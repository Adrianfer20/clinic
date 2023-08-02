import { searchUser, saveUser, saveAppointment, updateUserAppointments } from "../firebase/firebase.db.js";
import { getDate } from "./admin.js";
  
  
export const handlerAppointment = async (form) => {
    try {
        const isUser = await searchUser(form.identity);
        let date = getDate;
        const appointment = { price: form.price, date};

        //Guardar un nuevo usuario;
        if (!isUser) {
            const user = { identity: form.identity, fullName: form.fullName};
            //Guardar un nuevo usuario y retornarlo;
            const User = await saveUser(user);
            //Guardar una nueva cita y enviando el ID del Usuario Nuevo;
            const Appointment = await saveAppointment(User.id, appointment);
            //Actualizar Las citas que ah tenido este Usuario;
            await updateUserAppointments(User, Appointment.id);
            return {
              success: true
          };
        }
        // Existe un usuario;
        //Guardar la cita con el ID del usuario existente;
        const Appointment = await saveAppointment(isUser.id, appointment);

        //Actualizar las citas que ah tenido este Usuario;
        await updateUserAppointments(isUser, Appointment.id);
        return {
          success: true
        };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
}