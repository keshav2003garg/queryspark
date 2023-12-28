import type { Dispatch } from '@reduxjs/toolkit';

export interface AsyncOptions {
    EXCEPTION_HANDLER?: string;
    message?: string;
    warning?: string;
}
export interface AsyncHandler {
    (dispatch: Dispatch): Promise<void>;
}
