"use client";

import { Trash2 } from "lucide-react";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/lib/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartProducts, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart,
  );

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Your selection</p>
        <h1 className={styles.heading}>Shopping cart</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.cart}>
          <div className={styles.columnLabels}>
            <span>Product</span>
            <span>Quantity</span>
            <span>Price</span>
          </div>
          {cartProducts.length === 0 ? (
            <p className={styles.empty}>Your cart is empty.</p>
          ) : (
            cartProducts.map((item) => (
              <div className={styles.item} key={item.id}>
                <div className={styles.product}>
                  <div className={styles.imageFrame}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                    />
                  </div>
                  <div>
                    <h2 className={styles.productName}>{item.title}</h2>
                  </div>
                </div>
                <div className={styles.quantity}>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className={styles.quantityButton}
                  >
                    −
                  </button>
                  <span className={styles.quantityValue}>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className={styles.quantityButton}
                  >
                    +
                  </button>
                </div>
                <div className={styles.price}>
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className={styles.removeButton}
                  >
                    <Trash2 size={18} strokeWidth={1.7} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <aside className={styles.summary}>
          <p className={styles.summaryEyebrow}>Order summary</p>
          <div className={styles.summaryRow}>
            <span>Items</span>
            <span>{totalQuantity}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
