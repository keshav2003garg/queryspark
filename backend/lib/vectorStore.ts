import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

const vectorEmbedding = async (
    pinecone: Pinecone,
    // @ts-expect-error docs type error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document: Document<Record<string, any>>[],
    indexName?: string,
) => {
    const pineconeIndex = pinecone.index(
        indexName || process.env.PINECONE_INDEX_NAME,
    );
    await PineconeStore.fromDocuments(document, new OpenAIEmbeddings(), {
        pineconeIndex,
        textKey: 'text',
    });
};

const vectorRetrieval = async (pinecone: Pinecone, indexName?: string) => {
    const pineconeIndex = pinecone.index(
        indexName || process.env.PINECONE_INDEX_NAME,
    );
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        {
            pineconeIndex,
            textKey: 'text',
        },
    );
    return vectorStore;
};

export { vectorEmbedding, vectorRetrieval };
