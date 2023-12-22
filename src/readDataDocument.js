import { doc, getDoc } from "firebase/firestore";
import { db } from "./firbase-config";


export async function readDataDocument(col,document){
    const docRef = doc(db, col, document);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
      return(docSnap.data())
    } else {
      console.log("No such document!");
    }

}

