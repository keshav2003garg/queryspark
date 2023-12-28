import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

const vectorEmbedding = async (
    pinecone: Pinecone,
    // @ts-expect-error docs type error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document: Document<Record<string, any>>[],
    nameSpace: string,
    indexName?: string,
) => {
    const pineconeIndex = pinecone.index(
        indexName || process.env.PINECONE_INDEX_NAME,
    );
    await PineconeStore.fromDocuments(document, new OpenAIEmbeddings(), {
        pineconeIndex,
        namespace: nameSpace,
        textKey: 'text',
    });
};

const vectorRetrieval = async (
    pinecone: Pinecone,
    nameSpace: string,
    indexName?: string,
) => {
    const pineconeIndex = pinecone.index(
        indexName || process.env.PINECONE_INDEX_NAME,
    );
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        {
            pineconeIndex,
            textKey: 'text',
            namespace: nameSpace,
        },
    );
    return vectorStore;
};

export { vectorEmbedding, vectorRetrieval };
