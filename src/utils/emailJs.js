import emailjs from "@emailjs/browser"
import { succesSendContactEmail } from "./sweetAlert2"

export const sendContactEmail = async (user) => {
    try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            user, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        succesSendContactEmail(user)
    } catch (error) {
        console.error(error)
    }
}