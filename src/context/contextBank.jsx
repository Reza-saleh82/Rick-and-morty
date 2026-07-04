import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [productFilter, setProductFilter] = useState([])
  const [searchData, setSearchData] = useState('')
  const [show, setShow] = useState(false);
  const [likeList, setLikeList] = useState([]);
  const [ showId , setShowId ] = useState()

   const handleLikeList = (id) => {
    
    setLikeList((prev) => {
      const item = productsData.find((item) => item.id === id);
      if (item) {
        if (prev.find((prevItem) => prevItem.id === id)) {
          return prev.filter((prevItem) => prevItem.id !== id);
        } else {  
          return [...prev, item];
        }
      }
      
      return prev;
    });
  };




  useEffect(() => {
    if (searchData === '') {
      setProductFilter(productsData)
    }
    else {
      const dataFilter = productsData.filter((item) => {
        return item?.name?.includes(searchData)
      })
      setProductFilter(dataFilter)
    }
  }, [searchData, productsData])


  useEffect(() => {
    const getData = async () => {
      fetch('http://localhost:3005/results')
        .then(res => res.json())
        .then(json => { setProductsData(json); setProductFilter(json) })
    }
    getData()
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsData,
        setProductsData,
        searchData,
        setSearchData,
        productFilter,
        show,
        setShow,
        handleLikeList,
        likeList,
        setLikeList , 
        showId ,
        setShowId ,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProductContext = () => useContext(ProductContext);
