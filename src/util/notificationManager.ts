import { enqueueSnackbar } from 'notistack';


export const showSuccessNotification = (message: string): void => {
  enqueueSnackbar(message, {
    variant: 'success',
    autoHideDuration: 5000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
  });
};


export const showErrorNotification = (message: string): void => {
  enqueueSnackbar(message, {
    variant: 'error',
    autoHideDuration: 5000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
  });
};
