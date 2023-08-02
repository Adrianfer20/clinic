import {
    IconChevronDown
  } from "./Icons.jsx";
// eslint-disable-next-line react/prop-types
export function CardHPHeader({date,i, toggleVisibility}){
  const handleClick = (e)=>{
    e.preventDefault();
    toggleVisibility(i)
  }
    return (
        <header className="flex justify-between items-center bg-slate-800 rounded-md py-1 px-2">
           <h4>{date}</h4>

           <button onClick={(e)=>{handleClick(e)}}>
             <IconChevronDown />
           </button>
         </header>
    )
}