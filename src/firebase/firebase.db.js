import { db } from "../firebase/firebase.config.js";
import { doc, collection, addDoc, getDocs, updateDoc, getDoc } from "firebase/firestore";

export const searchUser = async (identity) => {
    try {
        const querySnapshot = await getDocs(collection(db, "Users"));
        // eslint-disable-next-line no-unused-vars
        let data;
        querySnapshot.forEach((doc) => { if (doc.data().identity == identity) return data = doc; })

        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}


export const saveUser = async ({ fullName, identity }) => {
    try {
        const docRef = await addDoc(collection(db, "Users"), {
            fullName,
            identity,
            date: new Date(),
        });
        return docRef;
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

export const updateUserAppointments = async (User, idAppointment) => {
    try {
        const userUpdate = doc(db, "Users", User.id);
        const docSnap = await getDoc(userUpdate);
        console.log("Id de la cita: ", idAppointment);
        console.log("Usuario: ", docSnap);
        console.log(!docSnap.data().appointments);
        //Si el usurario no tiene citas agregale una dentto del array;
        if (!docSnap.data().appointments) {
            const response = await updateDoc(userUpdate, { appointments: [idAppointment] })
            return response
        }

        // //Si ya tiene un array de appointmet acuatlizalo y agg uno nuevo.
        //
        let newArrAppointment = docSnap.data().appointments;
        newArrAppointment.push(idAppointment);
        const response = await updateDoc(userUpdate, { appointments: newArrAppointment })
        return response

    } catch (error) {
        return error
    }
}

export const updatePriceAppointment = async (id, newPrice) => {
    try {
        const appointment = doc(db, "Appointments", id);
        if (!appointment) throw new Error("No se ah conseguido esta cita");
        await updateDoc(appointment, newPrice);
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

export const saveAppointment = async (idUser, { price, date }) => {
    try {
        return await addDoc(collection(db, "Appointments"), {
            idUser,
            date,
            price
        });

    } catch (error) {
        console.error("Error adding document: ", error);
        return error
    }
}

export const readColletion = async (nameCollection) => {
    const querySnapshot = await getDocs(collection(db, nameCollection));
    let dataCollection = [];
    querySnapshot.forEach((doc) => {
        dataCollection.push({ id: doc.id, ...doc.data() })
    });
    return dataCollection;
}

