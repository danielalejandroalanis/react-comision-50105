/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  getAllProducts,
  getProductsByCategory,
  getSingleProducts,
} from "../services";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

//Obtener todos los productos
export const useAllProducts = (collectionName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //Primero inicializar firestore
    const db = getFirestore();
    //Segundo indicar a que coleccion
    const productsCollection = collection(db, collectionName);
    //Tercero hacer la consulta
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

//Obtener un unico producto
export const useSingleProduct = (collectionName, id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const singleProduct = doc(db, collectionName, id);

    getDoc(singleProduct).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() })
        .catch(() => setError(true))
        .finally(setLoading(false));
    });
  }, []);

  return { product, loading, error };
};

//TODO Refactorizar este hook
export const useProductsByCategory = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProductsByCategory(categoryId)
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { products, loading, error };
};
