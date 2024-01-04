import { Request, Response } from 'express';

import { pineconeClientInit } from '../lib/pinecone';

const deleteAllVectors = async (req: Request, res: Response) => {
    const { nameSpace } = req.body;
    const pinecone = await pineconeClientInit();
    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);
    const ns = index.namespace(nameSpace);
    await ns.deleteAll();
    res.json({
        success: true,
    });
};

export { deleteAllVectors };
