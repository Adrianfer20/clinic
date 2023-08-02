import { IconPencil } from "./Icons.jsx";

// eslint-disable-next-line react/prop-types
export function CardHPDetails({ id, appointmentId, today, identity, fullName, price }) {
  const setId = today+"-"+id;
  
  const handleEdit = (e) => {
    e.preventDefault();
    const $form = document.querySelector("#form-Appointment");
    $form.setAttribute("data-appointment", appointmentId);
    $form.querySelector("#identity").value = identity;
    $form.querySelector("#fullName").value = fullName;
    $form.querySelector("#price").value = price;
  };
  return (
    <div key={id} className="text-sm px-2">
      <div className="flex justify-between items-center bg-slate-800/60 border-b border-slate-700 py-1 px-4">
        <div id={setId} className="flex justify-between items-center gap-4">
          <h4>{fullName}</h4>
          <strong>{price}$</strong>
        </div>

        <button
          onClick={(e) => {
            handleEdit(e);
          }}
        >
          <IconPencil />
        </button>
      </div>
    </div>
  );
}
