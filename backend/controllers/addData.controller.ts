import { Request, Response } from 'express';

import { pdfLoader } from '../lib/pdfLoader';
import { pineconeClientInit } from '../lib/pinecone';
import { vectorEmbedding } from '../lib/vectorStore';

const addData = async (req: Request, res: Response) => {
    const { url, nameSpace } = req.body;
    const pdf = await pdfLoader(url);
    const pinecone = await pineconeClientInit();
    await vectorEmbedding(pinecone, pdf, nameSpace);
    res.json({ success: true, message: 'Data added to Pinecone' });
};

export { addData };
