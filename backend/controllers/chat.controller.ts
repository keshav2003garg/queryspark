import { Request } from 'express';

import { pineconeClientInit } from '../lib/pinecone';
import { vectorRetrieval } from '../lib/vectorStore';
import { callChain } from '../lib/langchain';

const chat = async (req: Request) => {
    const { nameSpace } = req.body;
    const pinecone = await pineconeClientInit();
    const vectorStore = await vectorRetrieval(pinecone, nameSpace);
    await callChain({
        question: req.body.question,
        chatHistory: '',
        vectorStore,
        streaming: false,
    });
};

export { chat };
