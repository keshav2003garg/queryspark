import { Request, Response } from 'express';

import { pdfLoader } from '../lib/pdfLoader';
import { pineconeClientInit } from '../lib/pinecone';
import { vectorEmbedding } from '../lib/vectorStore';

const addData = async (req: Request, res: Response) => {
    const pdf = await pdfLoader(req.body.url);
    const pinecone = await pineconeClientInit();
    await vectorEmbedding(pinecone, pdf);
    res.json({ success: true, message: 'Data added to Pinecone' });
};

export { addData };
