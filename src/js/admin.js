export function getToday() {
  // Obtenemos la fecha actual
  const date = new Date();

  // Definimos los nombres de los días de la semana en español
  const nameToday = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // Obtenemos el día de la semana, el día, el mes y el año
  const weekday = nameToday[date.getDay()];
  const today = date.getDate();
  const month = date.getMonth() + 1; // Los monthes comienzan en 0, por lo que se suma 1
  const year = date.getFullYear();

  // Formateamos la fecha en el formato deseado: "DíaDeLaSemana día/month/year"
  const formattedDate = `${weekday} ${today < 10 ? '0' + today : today}/${month < 10 ? '0' + month : month}/${year}`;

  // Retornamos la fecha formateada
  return formattedDate;
}

export const getHistory = (users, appointments) => {
  const appointmentsForDate = {};
  appointments.forEach((appointment) => {
    const fecha = appointment.date.substring(0, 10);
    const usuario = users.find((user) => user.id === appointment.idUser);
    if (!usuario) return; // Si no se encuentra el usuario, se omite la appointment
    
    const pacientes = usuario.appointments
      .filter((appointmen) => appointmen === appointment.id)
      .map(() => ({ ...usuario }));

    if (!appointmentsForDate[fecha]) {
      appointmentsForDate[fecha] = [];
    }

    appointmentsForDate[fecha].push({ appointmentId: appointment.id, price: appointment.price, pacientes });
  });

  const dateSort = Object.keys(appointmentsForDate).sort();

  const appointmentsSort = dateSort.map((fecha) => { return { fecha, appointments: appointmentsForDate[fecha] }; }).reverse()
  return appointmentsSort;
}

export function getDate() {
  var fecha = new Date();

  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
  var anio = fecha.getFullYear();

  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();

  // Agrega un cero inicial si el día, mes, hora o minutos tienen un solo dígito
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  var fechaHora = "" + dia + "/" + mes + "/" + anio;
  return fechaHora;
}