import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

export function Register() {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action=""
        className="max-w-sm grid gap-4 bg-slate-100 text-slate-900 rounded-xl shadow-sm p-4 m-auto"
      >
        <h3 className="font-semibold text-xl text-center">Registro</h3>
        <input
          onChange={(e) => {
            setEmailRegister(e.target.value);
          }}
          className="border-2 border-yellow-900 text-slate-900 rounded-full px-2 py-1"
          placeholder="Correo..."
          type="email"
          name=""
          id="input-email"
        />
        <input
          onChange={(e) => {
            setPasswordRegister(e.target.value);
          }}
          className="border-2 border-yellow-900 text-slate-900 rounded-full px-2 py-1"
          placeholder="Contraseña..."
          type="password"
          name="input-password"
          id=""
        />
        <button
          onClick={(e) => {
            handleRegister(e);
          }}
          className="bg-yellow-200 text-yellow-900 rounded-full px-2 py-1"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
