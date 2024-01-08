import { pineconeClientInit } from '../lib/pinecone';
import { vectorRetrieval } from '../lib/vectorStore';
import { callChain } from '../lib/langchain';
import asyncHandler from '../handlers/async.handler';
import ErrorHandler from '../handlers/error.handler';

import type { Request, Response, NextFunction } from 'express';

const chat = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { nameSpace, streaming, chatHistory, question } = req.body;
        if (!nameSpace) {
            return next(new ErrorHandler(400, 'NameSpace is required'));
        }
        if (!streaming) {
            req.body.streaming = false;
        }
        if (!chatHistory) {
            req.body.chatHistory = '';
        }
        if (!question) {
            return next(new ErrorHandler(400, 'Question is required'));
        }
        const pinecone = await pineconeClientInit();
        const vectorStore = await vectorRetrieval(pinecone, nameSpace);
        const response = await callChain({
            question,
            chatHistory: req.body.chatHistory,
            vectorStore,
            streaming: req.body.streaming,
        });
        res.json({
            success: true,
            response: response,
        });
    },
);

export { chat };
