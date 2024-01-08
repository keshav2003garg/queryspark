import { pdfLoader } from '../lib/pdfLoader';
import { pineconeClientInit } from '../lib/pinecone';
import { vectorEmbedding } from '../lib/vectorStore';
import asyncHandler from '../handlers/async.handler';
import ErrorHandler from '../handlers/error.handler';

import type { Request, Response, NextFunction } from 'express';

const addData = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { url, nameSpace } = req.body;
        if (!url) {
            return next(new ErrorHandler(400, 'URL is required'));
        }
        if (!nameSpace) {
            return next(new ErrorHandler(400, 'NameSpace is required'));
        }
        const pdf = await pdfLoader(url);
        const pinecone = await pineconeClientInit();
        await vectorEmbedding(pinecone, pdf, nameSpace);
        res.json({ success: true, message: 'PDF embedded successfully' });
    },
);

export { addData };
