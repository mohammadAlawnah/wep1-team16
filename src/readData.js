import { collection, getDocs } from "firebase/firestore";
import { db } from './firbase-config'
export const getData = async (col) =>{
let  newData ; 
  await getDocs(collection(db, col))
        .then((querySnapshot)=>{               
             newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
              return(newData);                
        })
        return(newData)
  }

