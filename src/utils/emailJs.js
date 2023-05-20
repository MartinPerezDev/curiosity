import emailjs from "@emailjs/browser"
import { notify } from "./notificationToastify";

export const sendContactEmail = async (user, theme) => {
    try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            user,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        const msg = `Gracias por tu mensaje, ${user.name}. Pronto responderemos a tu correo.`
        notify(user, "success", theme, msg);
    } catch (error) {
        const msg = error.message
        notify(user, "error", theme, msg);
    }
}