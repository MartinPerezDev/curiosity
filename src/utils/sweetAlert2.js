import Swal from 'sweetalert2'

export const succesSendContactEmail =(user)=>{
    Swal.fire({
        title: 'Email enviado correctamente!',
        text: `Muchas gracias por ponerte en contacto con nosotros ${user.name} 
        en breves estaremos respondiendo al email proporcionado`,
        icon: 'success',
        confirmButtonText: 'Continuar'
    })
}