import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

function ShowProduct(id) {
    const { productsData } = useProductContext()
    const selectProduct = productsData.find(item => item.id === parseInt(id))
  return (
    <div>
        <div>
            <h1>{selectProduct.title}</h1>
        </div>
    </div>
)
}

export default ShowProduct;