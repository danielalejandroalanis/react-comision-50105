import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
export const FormProduct = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [category, setCategory] = useState('')

    const handleCreateProduct = () => {
      const newProduct = {
        title,
        description,
        thumbnail,
        category
      }

      const db = getFirestore();

      const productsCollection = collection(db, 'products');

      addDoc(productsCollection, newProduct).then(({id}) => console.log(id))

    }

  return (
    <div>
      <input type="text" placeholder='Titulo' onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder='Descripcion'  onChange={(e) => setDescription(e.target.value)}/>
      <input type="text" placeholder='Imagen' onChange={(e) => setThumbnail(e.target.value)}/>
      <input type="text" placeholder='Categoria' onChange={(e) => setCategory(e.target.value)}/>
      <button onClick={handleCreateProduct}>Crear Procucto</button>
    </div>
  );
};
