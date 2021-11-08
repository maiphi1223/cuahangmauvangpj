import { useState } from "react";
import { Link } from "react-router-dom";

export default function Admin(props) {
  const [isActive, setActive] = useState(false);
  const [txt, setTxt] = useState("");

  function fetchTxt() {
    // fetch("http://localhost:8080")
    //   .then((res) => res.json())
    //   .then((data) => setTxt(data))
    //   .catch((err) => console.log(err));

    fetch("http://localhost:8080/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    })
      .then((res) => res.json())
      .then((json) => {console.log(json);setTxt(json.mess);;
      });
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            setActive(!isActive);
            fetchTxt();
          }}
        >
          {!isActive ? "LogIn" : "LogOut"}
        </button>
      </div>
      {!isActive ? (
        <div> please log in to see content</div>
      ) : (
        <div className="container-fuild">
          <h1>Hello Admin. welcome!</h1>
          <p>{txt}</p>
          <Link to="/">Back to Main page</Link>
        </div>
      )}
    </>
  );
}
