// eslint-disable-next-line react/prop-types
export function CardHPFooter({usersAll, mountAll}){
    return (
        <div className="text-sm px-2">
           <div className="flex justify-between items-center bg-slate-800/60 rounded-b-md py-1 px-4">
             <h4>Clientes Total: <strong>{usersAll}</strong></h4>
             <h4>Ganacia Total: <strong>{mountAll}</strong></h4>
             </div>
         </div>
    )
}