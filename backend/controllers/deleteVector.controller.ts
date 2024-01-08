import { pineconeClientInit } from '../lib/pinecone';
import asyncHandler from '../handlers/async.handler';
import ErrorHandler from '../handlers/error.handler';

import type { Request, Response, NextFunction } from 'express';

const deleteAllVectors = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { nameSpace } = req.body;
        if (!nameSpace) {
            return next(new ErrorHandler(400, 'NameSpace is required'));
        }
        const pinecone = await pineconeClientInit();
        const index = pinecone.index(process.env.PINECONE_INDEX_NAME);
        const ns = index.namespace(nameSpace);
        await ns.deleteAll();
        res.json({
            success: true,
            message: 'All vectors deleted successfully',
        });
    },
);

export { deleteAllVectors };
