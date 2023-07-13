import { toast } from "react-hot-toast";

// success
const ToastSuccess = (data) => toast.success(data);
// error
const ToastError = (data) => toast.error(data);
// loading
const ToastLoading = (data) => toast.loading(data);

export { ToastSuccess, ToastError, ToastLoading };
