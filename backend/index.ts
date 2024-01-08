import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import chatRoute from './routes/chat.route';
import errorMiddleware from './middlewares/error.middleware';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api', chatRoute);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
