import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../tools/constants";

const Products = () => {
 const [product , setProduct] = useState([]);
 useEffect(()=>{
     axios.get(API_PATH + "variations")
         .then((res)=>{
console.log(res)
         })
 },[])

    return (
        <div>
          <div className="products">

          </div>
        </div>
    );
};

export default Products;
