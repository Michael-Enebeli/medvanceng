import { toast } from 'react-toastify';

const toastOptions = {
  position: 'top-center',
  autoClose: 3000,
};

export const showSuccess = (message = 'Operation successful!') => toast.success(message, {
  ...toastOptions,
  style: {
    backgroundColor: '#90EE90',
    color: '#333333',
    fontWeight: 'bold',
  },
});

export const showError = (message = 'Something went wrong!') => toast.error(message, {
  ...toastOptions,
  style: {
    backgroundColor: '#FFC0CB',
    color: '#660033',
    fontWeight: 'bold',
  },
});

export const showInfo = (message = 'Here is some information.') => toast.info(message, {
  ...toastOptions,
  style: {
    backgroundColor: '#ADD8E6',
    color: '#003366',
    fontWeight: 'bold',
  },
});

export const showWarning = (message = 'Be cautious of this action.') => toast.warning(message, {
  ...toastOptions,
  style: {
    backgroundColor: '#FFD7BE',
    color: '#663300',
    fontWeight: 'bold',
  },
});