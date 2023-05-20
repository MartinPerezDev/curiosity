import { toast } from "react-toastify"

export const notify = ({ name }, type, theme, msg = false) => {
    const toastifyOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
    }
    switch (type) {
        case "success":
            msg ? toast.success(msg, toastifyOptions) : toast.success(`Operación Realizada con exito!`, toastifyOptions)
            break
        case "error":
            msg ? toast.error(msg, toastifyOptions) : toast.error(`Ups, ${name}. Algo salió mal. Por favor, inténtalo de nuevo.`, toastifyOptions)
            break
        default:
            break
    }
}