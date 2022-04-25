import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/svgs/Logo";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer--blur"></div>
      <div className="footer__content">
        <div className="container">
          <div className="row">
            <div className="col-md-3 pt-5">
              <div className="mb-3">
                <Logo />
              </div>
              <p className="footer__slogan">{t("slogan")}</p>
              <div className="footer__icon">
                <ul>
                  <li>
                    <span>
                      <FaFacebookF />
                    </span>
                  </li>
                  <li>
                    <span>
                      <BsTwitter />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaGooglePlusG />
                    </span>
                  </li>
                  <li>
                    <span>
                      <GiEarthAmerica />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pt-5 footer__service">
              <div className="mb-3">
                <span className="footer__tittle">Our services</span>
              </div>
              <div className="footer__list">
                <ul>
                  <li>Issues</li>
                  <li>Created</li>
                  <li>Exported</li>
                  <li>Advertisement</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pt-5 footer__news">
              <div className="mb-3">
                <span className="footer__tittle">News</span>
              </div>
              <div className="footer__list">
                <ul>
                  <li>
                    <p>Doctor Strange assembles with the Avg</p>
                    <p>10/02/2023</p>
                  </li>
                  <li>
                    <p>Doctor Strange assembles with the Avg</p>
                    <p>10/02/2023</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pt-5 footer__news">
              <div className="mb-3">
                <span className="footer__tittle">Contact Us</span>
              </div>
              <div className="footer__list">
                <ul>
                  <li>
                    <FaLocationArrow /> 242 Bà Trưng
                  </li>
                  <li>
                    <SiMinutemailer /> vietthai2099@gmail.com
                  </li>
                  <li>
                    <FaPhoneAlt /> 0366668888
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer__copyright mt-3">
            <div className="col-md-6 d-flex align-items-end">
              @copyright Thaik supper html css
            </div>
            <div className="col-md-6">
              <ul>
                <li>Chính sách bản quyền về website</li>
                <li>Liên hệ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
