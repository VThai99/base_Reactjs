import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="logo col-md-6">aaaa</div>
          <div className="col-md-6">
            <ul className="navs mb-0">
              <li className="navs__tittle navs__tittle--active">Home</li>
              <li className="navs__tittle">Introduce</li>
              <li className="navs__tittle">New Films</li>
              <li className="navs__tittle">Copy Right</li>
              <li className="navs__tittle">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
