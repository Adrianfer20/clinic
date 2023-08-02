/* eslint-disable react/prop-types */
//React
import { useState } from "react";
//Components
import { CardHPDetails } from "./CardHP-Details.jsx";
import { CardHPFooter } from "./CardHP-Footer.jsx";
import { CardHPHeader } from "./CardHP-Header.jsx";
//Functions
import { getHistory } from "../js/admin.js";

// eslint-disable-next-line react/prop-types
const countAllMount = (arr) => {
  const total = arr.reduce((accumulator, current) => {
    if (current.price) {
      return accumulator + current.price;
    }
    return accumulator;
  }, 0);

  return total;
};

export function CardHistory({ users, appointments }) {
  const historys = getHistory(users, appointments);
  const [visibleComponents, setVisibleComponents] = useState([]);

  const toggleVisibility = (index) => {
    setVisibleComponents((prevVisibleComponents) => {
      const updatedVisibleComponents = [...prevVisibleComponents];
      updatedVisibleComponents[index] = !updatedVisibleComponents[index];
      return updatedVisibleComponents;
    });
  };
  return (
    <>
      {/* // eslint-disable-next-line react/prop-types */}
      {historys &&
        historys.map((medicalRecord, index) => (
          <div key={index} className="grid gap-1">
            <CardHPHeader
              date={medicalRecord.fecha}
              i={index}
              toggleVisibility={toggleVisibility}
            />
            {visibleComponents[index] && (
              <div>
                {medicalRecord.appointments.map((appointment) => (
                  <div key={appointment.appointmentId}>
                    {appointment.pacientes.map((paciente) => (
                      <div key={paciente.id}>
                        {paciente && (
                          <CardHPDetails
                            id={paciente.id}
                            appointmentId={appointment.appointmentId}
                            today={medicalRecord.fecha}
                            identity={paciente.identity}
                            fullName={paciente.fullName}
                            price={appointment.price}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
                <CardHPFooter
                  usersAll={medicalRecord.appointments.length}
                  mountAll={countAllMount(medicalRecord.appointments)}
                />
              </div>
            )}
          </div>
        ))}
    </>
  );
}
