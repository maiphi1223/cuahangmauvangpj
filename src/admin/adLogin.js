import { useState } from "react";

export default function AdLogin(props) {
  const [pass, setpass] = useState("");  
  const [loginStatus, setLoginStatus] = useState("");
  function changeInputValue(e) {
    setpass(e.target.value);
  }

  function AdLoginSubmit() {
    fetch("http://localhost:8080/admin/login", {
      method: "POST",
      body: JSON.stringify(pass),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json === "correct") {
          props.setActive(true);
        } 
        else {
            props.setActive(false);
            setLoginStatus('Password is incorrect! Please try again.');
            var input=document.querySelector("#admin-login__input");
            input.focus();
            setpass('');

        };
        console.log(json);
      });
  }

  return (
    <div className="container-fluid admin-login">
      <div className="admin-login__box col-11 col-sm-8  col-lg-6 col-xl-5 ">
        <h3 className="admin-login__header">Login</h3>
        <form
          action="#login"
          className="admin-login__form"
          onSubmit={(e) => e.preventDefault(e)}
          name="login"
          method="post"
        >
          <label
            htmlFor="admin-login__input"
            className="admin-login__form--label"
          >
            Password:{" "}
          </label>
          <input
            type="password"
            className="admin-login__form--input"
            id="admin-login__input"
            onChange={(e) => {
              changeInputValue(e);
            }}
            value={pass}
            required
            onKeyPress={(e)=>{
                if(e.code==="Enter")
                AdLoginSubmit()}}
          />
          {/* <input 
          type="checkbox"
          className="admin-login__form--remember-check"/> */}
          <p className="text-danger">{loginStatus}</p>
        </form>
      </div>
    </div>
  );
}
