import { db } from "./firbase-config";
import { doc, updateDoc } from "firebase/firestore";

export function UpdateData  (col,document,field,newValue){
     const docRef = doc(db, col, document);
      updateDoc(docRef,{
        [field] : newValue
      })
}