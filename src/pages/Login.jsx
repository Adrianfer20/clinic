//React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Hooks
import { useAuth } from "../context/AuthContext.jsx";
//Components
import { Btn } from "../componets/Btn.jsx";
import { Input } from "../componets/Input.jsx";
import { Toaster, toast } from "react-hot-toast";

//Component
export function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const toastId = toast.loading("Espere un momento...");
      const response = await auth.login(emailLogin, passwordLogin);
      //All User Correct Rederin to Page Admin;
      toast.dismiss(toastId);
      if (response.success) return navigate("/clinic/");
      //Message Error User or Paswword incorrect;
      if (
        response.error == "Firebase: Error (auth/wrong-password)." ||
        response.error == "Firebase: Error (auth/user-not-found)."
      )
        return toast.error("Usuario o Contraseña Incorrecta.");
      if (
        response.error ==
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      )
        return toast.error(
          "El acceso a esta cuenta ha sido desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. "
        );
        return toast.error("Existe un error: "+ response.error);
    } catch (error) {
      console.log(error);
      // return showMessage("Ah ocurrido un error :" + error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action=""
        className="max-w-md w-10/12  h-72 flex flex-col items-center  bg-slate-100 text-slate-900 rounded-xl shadow-sm py-4 px-8 m-auto"
      >
        <h3 className="font-semibold text-xl text-center uppercase pt-4 pb-6">
          Inicio de Sesión
        </h3>
        <div className="w-full flex flex-col justify-center gap-5">
          <div className="w-full flex flex-col gap-2">
            <Input
              id="input-email"
              type="text"
              text="Ingresar Correo.."
              handleChange={setEmailLogin}
            />
            <Input
              id="input-pass"
              type="password"
              text="Ingresar Contraseña.."
              handleChange={setPasswordLogin}
            />
          </div>
          <Btn type={true} text="Iniciar Session" handleClick={handleClick} />
        </div>

        <Toaster position="bottom-center" />
      </form>
    </div>
  );
}
