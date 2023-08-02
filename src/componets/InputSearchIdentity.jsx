import { useState } from "react";
import { IconDNI } from "../componets/Icons.jsx";
// eslint-disable-next-line react/prop-types
export const InputSearchIdentity = ({ users }) => {
  const [searchIdentity, setSearchIdentity] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleInputChange = (e) => {
    const identity = e.target.value;
    setSearchIdentity(identity);
    // eslint-disable-next-line react/prop-types
    const filteredResults = users.filter((user) =>
      user.identity.includes(identity)
    );
    if(filteredResults.length != 0){
      setFilteredUsers(filteredResults);
    }else{
      setSearchIdentity(false)
    }
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    const identity = e.target.dataset.identity;
    const fullName = e.target.dataset.name;
    document.getElementById("identity").value = identity;
    document.getElementById("fullName").value = fullName;
    setSearchIdentity(false);
  };
  const handleInputBlur = ()=>{setSearchIdentity(false)}
  return (
    <div className="relative w-full flex gap-2 border-2 border-yellow-400 text-slate-900 rounded-full px-3 py-1 focus-within:border-yellow-900">
      <IconDNI />
      <input
        id="identity"
        className="w-full bg-transparent border-none focus:border-none focus-visible:outline-none"
        type="text"
        placeholder="Ingresar Cedula"
        autoComplete="off"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      {searchIdentity && (
        <ul className="absolute left-0 top-full right-0 w-10/12 h-36 bg-yellow-800 text-yellow-100 rounded-lg overflow-y-auto mt-1 mx-auto">
          {filteredUsers.map((user) => (
            <li
              onClick={(e) => handleClick(e)}
              data-identity={user.identity}
              data-name={user.fullName}
              key={user.id}
              className="flex items-center justify-between hover:text-yellow-100 hover:bg-yellow-200 cursor-pointer px-2"
            >
              {user.identity+" " + "-" + " " +user.fullName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
