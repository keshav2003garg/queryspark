declare module 'global' {
    global {
        namespace NodeJS {
            interface ProcessEnv {
                PORT: string;
                PINECONE_API_KEY: string;
                PINECONE_INDEX_NAME: string;
                OPENAI_API_KEY: string;
            }
        }
    }
}
