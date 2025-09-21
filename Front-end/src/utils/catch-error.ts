import axios from 'axios';

export const CatchError = (error: unknown) => {
  let errorMessage = 'Data upload error';
  if (axios.isAxiosError(error)) {
    const axiosError = error;
    //404 or 500
    if (axiosError.response) {
      errorMessage = `Error ${axiosError.response.status} - ${axiosError.response.data.message}`;
    } else if (axiosError.request) {
      errorMessage = 'No response from the server';
    } else {
      errorMessage = `Error ${axiosError.message}`;
    }
  } else if (error instanceof Error) {
    errorMessage = `Error ${error.message}`;
  }

	return errorMessage;
};
