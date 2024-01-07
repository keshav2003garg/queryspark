import ErrorHandler from 'handlers/error.handler';

export const errorHandler = (error: Error) => {
    if (error.message === 'User canceled directory picker') {
        return new ErrorHandler('Error', 'Please select a file');
    }
    if (
        error.message ===
        "[auth/invalid-credential] The supplied auth credential is incorrect, malformed or has expired. [ Error connecting to the given credential's issuer. ]"
    ) {
        return new ErrorHandler('GitHub Error', 'Please try again later');
    }
    if (error.message === 'Network Error') {
        return new ErrorHandler(
            'Internet Error',
            'Please check your internet connection',
        );
    }
    return error;
};
