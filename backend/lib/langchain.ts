import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import {
    StreamingTextResponse,
    LangChainStream,
    experimental_StreamData,
} from 'ai';
import { QUESTION_TEMPLATE, QA_TEMPLATE } from '../utils/promptTemplates';

type callChainArgs = {
    question: string;
    chatHistory: string;
    vectorStore: PineconeStore;
    streaming: boolean;
};

const callChain = async ({
    question,
    chatHistory,
    vectorStore,
    streaming,
}: callChainArgs) => {
    const sanitizedQuestion = question.trim().replaceAll('\n', ' ');
    const { stream, handlers } = LangChainStream({
        experimental_streamData: true,
    });
    const data = new experimental_StreamData();
    const streamingModel = new ChatOpenAI({
        modelName: 'gpt-3.5-turbo',
        streaming: true,
        temperature: 0,
    });
    const nonStreamingModel = new ChatOpenAI({
        modelName: 'gpt-3.5-turbo',
        streaming: false,
        temperature: 0,
    });
    const chain = ConversationalRetrievalQAChain.fromLLM(
        streaming ? streamingModel : nonStreamingModel,
        vectorStore.asRetriever(),
        {
            qaTemplate: QA_TEMPLATE,
            questionGeneratorTemplate: QUESTION_TEMPLATE,
            returnSourceDocuments: true,
            questionGeneratorChainOptions: {
                llm: nonStreamingModel,
            },
        },
    );

    let response;

    chain
        .call(
            {
                question: sanitizedQuestion,
                chat_history: chatHistory,
            },
            [handlers],
        )
        .then(async (res) => {
            const sourceDocuments = res?.sourceDocuments;
            const firstTwoDocuments = sourceDocuments.slice(0, 2);
            const pageContents = firstTwoDocuments.map(
                ({ pageContent }: { pageContent: string }) => pageContent,
            );
            data.append({
                sources: pageContents,
            });
            data.close();
            response = res;
            console.log(res);
        });

    if (streaming) {
        return new StreamingTextResponse(stream, {}, data);
    }

    return response;
};

export { callChain };
