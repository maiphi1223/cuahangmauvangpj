import { Link} from "react-router-dom";
import { useState } from "react";
import chukydaitrang from "../product/logo/chukydaitrang.png";

export default function AdControlTab(){
    const[noti,setNoti]=useState(5);
    const[eCount,setECount]=useState(0);
    const[ordCount,setOrdCount]=useState(7);

    function navToggle(){
        var list=document.querySelector('.admin__control--list');
        list.classList.toggle('show');
    }
    return(
        <>
            <div className="admin__control col-12 col-md-3 col-xl-2">
                <div className="admin__logo col-6 col-sm-4 col-md-12" onClick={()=>{ window.location.href=window.location.origin}}>
                  <img src={chukydaitrang} alt="cua hang mau vang logo" className="admin__logo--img"/>
                </div>
                <span className="admin__control--icon-toggle" onClick={()=>{navToggle()}}><i className="fas fa-bars"></i></span>
              <ul className="admin__control--list">
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/notifications"><span><i className="fas fa-bell"></i></span> Notifications <span className={`badge rounded-pill ${noti===0?'bg-secondary':'bg-danger'}`}>{noti}</span></Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/orders"><span><i className="fab fa-shopify"></i></span> Orders <span className={`badge rounded-pill ${ordCount===0?'bg-secondary':'bg-danger'}`}>{ordCount}</span></Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/emails"><span><i className="fas fa-envelope-open-text"></i></span> Email <span className={`badge rounded-pill ${eCount===0?'bg-secondary':'bg-danger'}`}>{eCount}</span></Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/databoard"><span><i className="fas fa-chart-line"></i></span> Databoard</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/products"><span><i className="fab fa-product-hunt"></i></span> Products</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/promotions"><span><i className="fas fa-seedling"></i></span> Promotions</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/blogs"><span><i className="fab fa-blogger"></i></span> Blogs</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/admin/setting"><span><i className="fas fa-wrench"></i></span> Setting</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="/" onClick={()=>{sessionStorage.AL="false"}}> <span><i className="fas fa-sign-out-alt"></i></span> Log out</Link></li>
              </ul>
            </div>

        </>
    )
}