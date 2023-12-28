import { WebPDFLoader } from 'langchain/document_loaders/web/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

const pdfLoader = async (url: string) => {
    const res = await fetch(url);
    const file = await res.blob();
    const loader = new WebPDFLoader(file);
    const document = await loader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
    });
    const chunkedDocs = await textSplitter.splitDocuments(document);
    return chunkedDocs;
};

export { pdfLoader };
