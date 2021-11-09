import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import chukydaitrang from "../product/logo/chukydaitrang.png";

export default function AdControlTab(){
    const[noti,setNoti]=useState(5);
    const[eCount,setECount]=useState(0);
    return(
        <>
            <div className="admin__control col-12 col-md-3 col-xl-2">
              <div className="admin__logo">
                <img src={chukydaitrang} alt="cua hang mau vang logo" className="admin__logo--img"/>
              </div>
              <ul className="admin__control--list">
                <li className="admin__control--item"><Link className="admin__control--link" to="#"><span><i className="fas fa-chart-line"></i></span> Databoard</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="#"><span><i className="fas fa-envelope-open-text"></i></span> Email <span class={`badge rounded-pill ${eCount===0?'bg-secondary':'bg-danger'}`}>{eCount}</span></Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="#"><span><i className="fab fa-product-hunt"></i></span> Products</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="#"><span><i className="fas fa-bell"></i></span> Notifications <span class={`badge rounded-pill ${noti===0?'bg-secondary':'bg-danger'}`}>{noti}</span></Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="#"><span><i class="fas fa-wrench"></i></span> Setting</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" to="#">Products</Link></li>
                <li className="admin__control--item"><Link className="admin__control--link" exact to="/" onClick={()=>{sessionStorage.AL="false"}}>Log out</Link></li>
              </ul>
            </div>

        </>
    )
}