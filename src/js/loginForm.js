// import { useNavigate } from "react-router-dom";
// //Hooks
// import { useAuth } from "../context/AuthContext.jsx";

// import { toast } from "react-hot-toast";

// export const handleLogin = async (e, emailLogin, passwordLogin) => {
//     try {
//         const navigate = useNavigate();
//         const auth = useAuth();
//         e.preventDefault();
//         const toastId = toast.loading("Espere un momento...");
//         const response = await auth.login(emailLogin, passwordLogin);
//         //All User Correct Rederin to Page Admin;
//         if (response.success) return navigate("/Admin");
//         toast.dismiss(toastId);
//         //Message Error User or Paswword incorrect;
//         if (
//             response.error == "Firebase: Error (auth/wrong-password)." ||
//             response.error == "Firebase: Error (auth/user-not-found)."
//         )
//             return toast.error("Usuario o Contraseña Incorrecta.");
//         if (
//             response.error ==
//             "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
//         )
//             return toast.error(
//                 "El acceso a esta cuenta ha sido desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. "
//             );
//         return toast.error("Existe un error: " + response.error);
//     } catch (error) {
//         console.log(error);
//         // return showMessage("Ah ocurrido un error :" + error);
//     }
// };
