// Creates a standalone question from the chat-history and the current question
export const QUESTION_TEMPLATE = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.
Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

// Actual question you ask the chat and send the response to client
export const QA_TEMPLATE = `You are an enthusiastic AI assistant. Use the following pieces of context to answer the question at the end.
If you don't know the answer, just try to answer the question to the best of your ability.
If the question is not related to the context, 
then firstly must tell the user politely that the question is not related to the context but I can anser it with best of my knowledge, 
and then answer the question using your own knowledge.

{context}

Question: {question}
Helpful answer in markdown:`;
