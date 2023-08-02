import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext.jsx";
import { Btn } from "./Btn.jsx";
import { IconLogout } from "./Icons.jsx";

export function Navbar() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = async ()=> {
    await auth.logout();
    navigate("/clinic/")
  }
  return (
    <>
      <nav className="fixed left-0 top-0 right-0 bg-slate-100 text-slate-900 flex items-center justify-between py-1 px-4 z-10">
        <Link to="/clinic/" className="font-bold uppercase">MONSANTO</Link>
        <ul className="flex items-center gap-4">
          {!auth.user ?(
            // Segmento de la interfaz para usuarios no logueados
            <>
              <button
                disabled
                className="underline underline-offset-1 py-1 px-4"
              >
                Registrar
              </button>
              <span>ó</span>
              <Link to="/clinic/login" className="bg-yellow-400 text-yellow-900 upperacse border-none rounded-full py-1 px-4">Iniciar Session</Link>
            </>
          ): (
            // Segmento de la interfaz para usuarios logueados
            <>  
              <Btn text="Salir" icon="logout" handleClick={handleLogout}>
                <IconLogout/>
                </Btn>
                {/* <BtnLogout></BtnLogout> */}
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
