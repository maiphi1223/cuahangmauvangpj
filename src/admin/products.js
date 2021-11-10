import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

export default function Products(props) {
    const[listSelect,setListSelect]=useState('All');
    const[products,setProducts]=useState([]);

    function fetchProduct(){
        fetch('http://localhost:8080/products')
            .then (res=>res.json())
            .then (data=>{
                console.log(data);
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{fetchProduct()},[props])
  return (
    <>
      <div className="admin__products--nav">
        <div className="admin__products--listing-box">
          <label>Listing: </label>
          <select className="admin__products--listing-select"
          onChange={()=>{}}
          >
            <option>All Products</option>
            <option>category1</option>
            <option>category1</option>
            <option>category1</option>
            <option>category1</option>
          </select>
        </div>
        <Link to={`add`} className="admin__products--nav-item">
          <span>
            <i class="fas fa-plus-square"></i>
          </span>{" "}
          Add
        </Link>
      </div>
    </>
  );
}
