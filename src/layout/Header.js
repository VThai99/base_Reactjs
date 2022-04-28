import { Dropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FlagEn from "../assets/svgs/FlagEn";
import { changLang } from "../redux/actions/lang";
import FlagVn from "../assets/svgs/FlagVn";
import Logo from "../assets/svgs/Logo";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const { pathname } = useLocation();
  const menu_arr = [
    { name: "home", url: "" },
    { name: "introduce", url: "introduce" },
    { name: "new_films", url: "film" },
    { name: "copy_right", url: "copy-right" },
    { name: "contact", url: "contact" },
    { name: "chat", url: "chat" },
  ];
  useEffect(() => {}, []);
  const handleGo = (url) => {
    navigate(url);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="logo col-md-6 d-flex justify-content-start align-items-center">
            <Dropdown className="dropdown-flag">
              <Dropdown.Toggle className="px-0">
                {lang == "en" ? <FlagEn /> : <FlagVn />}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => dispatch(changLang("en"))}>
                  <FlagEn />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(changLang("vn"))}>
                  <FlagVn />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Logo />
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <ul className="navs mb-0">
              {menu_arr.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`navs__tittle ${
                      pathname.split("/")[1] === item.url &&
                      "navs__tittle--active"
                    }`}
                    onClick={() => {
                      handleGo(item.url);
                    }}
                  >
                    {t(item.name)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
