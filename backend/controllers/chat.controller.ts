import { Request, Response } from 'express';

import { pineconeClientInit } from '../lib/pinecone';
import { vectorRetrieval } from '../lib/vectorStore';
import { callChain } from '../lib/langchain';

const chat = async (req: Request, res: Response) => {
    const { nameSpace, streaming } = req.body;
    const pinecone = await pineconeClientInit();
    const vectorStore = await vectorRetrieval(pinecone, nameSpace);
    const response = await callChain({
        question: req.body.question,
        chatHistory: '',
        vectorStore,
        streaming,
    });
    res.json({
        success: true,
        response: response,
    });
};

export { chat };
