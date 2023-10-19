import Product from "./product.jsx";
import DataService from "./dataservice.js";
import "./catalog.css";
import { useEffect } from "react";

function Catalog(){
    useEffect(function(){
        console.log("catalog loaded");
        //similar to the init();
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
      setProducts(prods);
         
    }


return (
    <div className='catalog'>
        <h1>wellcome you have taken the first step to uniqness</h1>
        {Product.map(arrowProducts => <Product/>)}            
        

    </div>
);
}

export default Catalog;