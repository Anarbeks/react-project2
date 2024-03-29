import React from "react";

import "./footer.css";
import Inst from "../../img/inst.svg";
import Vk from "../../img/vk.svg";
import Fb from "../../img/facebook.svg";
import Ok from "../../img/ok.svg";
import mail from "../../img/mail (1).png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__left">
              <h3>GAME STORE</h3>
              <div className="footer__text">
                <p onClick={() => navigate("/about")}>О компании</p>
                <p onClick={() => navigate("/contacts")}>Контакты</p>
                <p onClick={() => navigate("/vakansi")}>Вакансии</p>
                <p onClick={() => navigate("/testi")}>Отзывы</p>
              </div>
            </div>
            <div className="footer__right">
              <a href="#">
                <img src={Inst} alt="instagram" />
              </a>
              <a href="#">
                <img src={Vk} alt="vk" />
              </a>
              <a href="#">
                <img src={Fb} alt="facebook" />
              </a>
              <a href="#">
                <img src={Ok} alt="ok" />
              </a>
              <a className="footer__right-phone" href="#">
                {" "}
                <img src={mail} alt="mail" style={{ m: "0 5px" }} />
                gamestore@outlook.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
