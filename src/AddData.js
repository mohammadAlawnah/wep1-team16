import { collection, addDoc } from "firebase/firestore";
import { db } from "./firbase-config";
export  const addData = async (col,data) =>{
    const docRef = await addDoc(collection(db, col),data);
    // console.log("Document written with ID: ", docRef.id);
}