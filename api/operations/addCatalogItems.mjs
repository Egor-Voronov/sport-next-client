import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.mjs";
import {catalogItems} from "../data/catalogItems.mjs";

try {
    const docRef = await addDoc(collection(db, "catalogItems"), {catalogItems});
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
