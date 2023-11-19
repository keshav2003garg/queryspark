import { Pinecone } from '@pinecone-database/pinecone';

let pineconeClientInstance: Pinecone | null = null;

const pineconeClient = async (index?: string) => {
    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY,
        environment: 'gcp-starter',
    });

    const indexName = index || process.env.PINECONE_INDEX_NAME;
    const existingIndex = await pinecone.listIndexes();
    const indexExists = existingIndex.some((i) => i.name === indexName);
    if (!indexExists) {
        await pinecone.createIndex({
            name: indexName,
            dimension: 1536,
            metric: 'cosine',
        });
    }

    return pinecone;
};

const pineconeClientInit = async (index?: string) => {
    if (!pineconeClientInstance) {
        pineconeClientInstance = await pineconeClient(index);
    }
    return pineconeClientInstance;
};

export { pineconeClientInit };
