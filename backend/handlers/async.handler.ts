import type { Request, Response, NextFunction } from 'express';

interface AsyncHandlerFunction {
    (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const asyncHandler = (fn: AsyncHandlerFunction) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export default asyncHandler;
