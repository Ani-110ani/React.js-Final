"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import styles from "./page.module.css";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const addedMessageTimeout = useRef(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  useEffect(
    () => () => {
      window.clearTimeout(addedMessageTimeout.current);
    },
    [],
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowAddedMessage(true);
    window.clearTimeout(addedMessageTimeout.current);
    addedMessageTimeout.current = window.setTimeout(
      () => setShowAddedMessage(false),
      2500,
    );
  };

  if (loading)
    return <div className={styles.loading}>Loading product details...</div>;
  if (!product?.image)
    return <div className={styles.notFound}>Product not found</div>;

  return (
    <article className={styles.page}>
      <div className={styles.imageFrame}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.category}>{product.category}</p>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.purchaseInfo}>
          <span className={styles.price}>${product.price}</span>
          <div className={styles.rating}>
            ★ {product.rating?.rate} ({product.rating?.count} reviews)
          </div>
        </div>
        <button
          className={styles.addButton}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        {showAddedMessage && (
          <p className={styles.addedMessage} role="status">
            Added to cart successfully.
          </p>
        )}
      </div>
    </article>
  );
}
