import { useAuth } from "../context/AuthContext.jsx";

export function BtnLogout() {
  const auth = useAuth();
    const handleClick = ()=> {
        auth.logout()
    }
  return <button className="border-none rounded-full bg-yellow-400 text-yellow-900 py-1 px-4" onClick={()=>{handleClick()}}>Salir</button>;
}
