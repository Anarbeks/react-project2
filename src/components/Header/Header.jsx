import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import Search from "../../img/search.svg";
import Favourite from "../../img/favourite.png";
import Cart from "../../img/grocery-store.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Avatar, Badge, Tooltip } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/AuthContext";
import { favContext } from "../../contexts/favContext";

const Header = () => {
  const { count } = useContext(cartContext);
  const { count2 } = useContext(favContext);
  const { user, logOut } = useAuth();
  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState();
  const [click, isClick] = useState(false);
  useEffect(() => {
    setSearchParam(searchParam.get("q") ? searchParam.get("q") : "");
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    setSearchParam({
      q: search,
    });
  }, [search]);
  function handleLogOut() {
    logOut();
  }
  useEffect(() => {
    navigate("/");
  }, []);
  const isProfileClicked = () => {
    isClick(true);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h3 onClick={() => navigate("/")}>GAME STORE</h3>
          <div className="header__search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Найти товар"
            />
            <img src={Search} alt="search" />
          </div>
          <div onClick={() => navigate("/favourite")} className="header__ftrs">
            <Badge badgeContent={count2} color="error"></Badge>
            <img src={Favourite} alt="favorite" width="25px" />
            <p>Избранное</p>
          </div>
          <div onClick={() => navigate("/cart")} className="header__ftrs">
            <Badge badgeContent={count} color="error"></Badge>
            <img src={Cart} alt="cart" width="25px" />
            <p>Корзина</p>
          </div>{" "}
          <div className="header__download">
            {" "}
            <button>Загрузить</button>
          </div>{" "}
          <div className="header__avatar">
            {user ? (
              <div className="header__avatar-image">
                <Tooltip title={user.email}>
                  <Avatar
                    alt={user.displayName}
                    src={user.photoUrl}
                    onClick={() => isProfileClicked()}
                  />
                </Tooltip>
                {click ? (
                  <button
                    style={{ marginTop: "-6px" }}
                    onClick={() => handleLogOut()}
                  >
                    Выйти
                  </button>
                ) : null}
              </div>
            ) : (
              <>
                {" "}
                <button onClick={() => navigate("/login")}>Войти</button>
                <button onClick={() => navigate("/register")}>
                  Зарегистрироваться
                </button>
              </>
            )}{" "}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
