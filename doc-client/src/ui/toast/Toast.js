import { toast } from "react-toastify";

export const successToast = (message, duration) => {
  toast.success(message, { autoClose: duration ? duration : 3000 });
};

export const errorToast = (message, duration) => {
  toast.error(message, { autoClose: duration ? duration : 3000 });
};

export const warningToast = (message, duration) => {
  toast.warning(message, { autoClose: duration ? duration : 3000 });
};
