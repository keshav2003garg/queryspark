import ErrorHandler from '../handlers/error.handler';

import type { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
    error: Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
) => {
    let statusCode = 500;
    let message = error.message || 'Internal server error';
    if (error instanceof ErrorHandler) {
        statusCode = error.statusCode;
        message = error.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default errorMiddleware;
