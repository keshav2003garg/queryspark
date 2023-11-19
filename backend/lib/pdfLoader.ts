import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

const pdfLoader = async (pdf?: string) => {
    const loader = new PDFLoader(pdf || './assets/resume.pdf');
    const document = await loader.load();
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
    });
    const chunkedDocs = await textSplitter.splitDocuments(document);
    return chunkedDocs;
};

export { pdfLoader };
