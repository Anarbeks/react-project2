import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import "./cart.css";
import { useAuth } from "../../contexts/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    useContext(cartContext);
  const { user } = useAuth();
  useEffect(() => {
    getCart();
  }, []);
  const checkUser = () => {
    user ? navigate("/payment") : navigate("/login");
  };
  return cart ? (
    <div>
      <div className="container">
        <div className="path">
          <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Главная
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
              fill="#414141"
            />
          </svg>
          <p style={{ cursor: "pointer" }}>Корзина</p>
        </div>
        <div className="cart">
          <h2>Корзина</h2>
          <div className="cart__content">
            <div>
              {cart.products.map(
                (elem) =>
                  (
                    <div className="cart__card" key={elem.item.id}>
                      <div className="cart__cart-text">
                        <img src={elem.item.image} alt="" width="100px" />
                        <div className="cart__card-info">
                          <p className="super__price">{elem.item.title}</p>
                          <p className="sub__price">
                            {elem.item.price} ₽ за шт.
                          </p>
                        </div>
                      </div>
                      <div className="cart__btn-parent">
                        <div className="cart__btn">
                          <svg
                            onClick={() =>
                              changeCount(elem.count - 1, elem.item.id)
                            }
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                              fill="white"
                            />
                          </svg>
                          <p>{elem.count}</p>
                          <svg
                            onClick={() =>
                              changeCount(elem.count + 1, elem.item.id)
                            }
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <svg
                          onClick={() => deleteFromCart(elem.item.id)}
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H19C20.3807 2.5 21.5 3.61929 21.5 5V19C21.5 20.3807 20.3807 21.5 19 21.5H5C3.61929 21.5 2.5 20.3807 2.5 19V5ZM5 3.5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V5C20.5 4.17157 19.8284 3.5 19 3.5H5Z"
                            fill="#414141"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.64645 8.64645C8.84171 8.45118 9.15829 8.45118 9.35355 8.64645L15.3536 14.6464C15.5488 14.8417 15.5488 15.1583 15.3536 15.3536C15.1583 15.5488 14.8417 15.5488 14.6464 15.3536L8.64645 9.35355C8.45118 9.15829 8.45118 8.84171 8.64645 8.64645Z"
                            fill="#414141"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.3536 8.64645C15.5488 8.84171 15.5488 9.15829 15.3536 9.35355L9.35355 15.3536C9.15829 15.5488 8.84171 15.5488 8.64645 15.3536C8.45118 15.1583 8.45118 14.8417 8.64645 14.6464L14.6464 8.64645C14.8417 8.45118 15.1583 8.45118 15.3536 8.64645Z"
                            fill="#414141"
                          />
                        </svg>
                      </div>
                    </div>
                  ) || []
              )}
            </div>

            <div className="cart__pay">
              <p>
                Сумма <span className="sum">{cart.totalPrice} ₽</span>
              </p>
              <p>
                Скидка <span className="dis">{-cart.discount} ₽</span>
              </p>
              <hr className="cart__line" />
              <p>
                Итог{" "}
                <h3 className="total">{cart.totalPrice - cart.discount} ₽</h3>
              </p>
              <div className="bonus__payment">
                <span className="bonus-parent">
                  Вы получаете{" "}
                  <span className="bonus">
                    {Math.ceil((cart.totalPrice - cart.discount) * 0.02)}{" "}
                    бонусов
                  </span>
                </span>
                <button onClick={() => checkUser()} className="pay__btn">
                  <p>Оформить заказ</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Cart;
