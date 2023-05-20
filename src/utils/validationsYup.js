import { object, string } from "yup";

let userSchema = object({
    name: string().required("El campo name no puede enviarse vacío"),
    email: string().email("Email invalido").required("El campo email no puede enviarse vacío"),
    message: string().required("El campo mensaje no puede enviarse vacío"),
})

export const validateForm = async (data) => {
    try {
        await userSchema.validate(data, { strict: true })
        return true
    } catch (err) {
        return err.message
    }
}