"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./page.module.css";

export default function ProfilePage() {
  const username = useSelector((state) => state.user.username);
  const [result, setResult] = useState({
    username: null,
    user: null,
    error: "",
  });

  useEffect(() => {
    if (!username) return;

    const controller = new AbortController();

    async function loadProfile() {
      try {
        const response = await fetch("https://fakestoreapi.com/users", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to load profile: ${response.status}`);
        }

        const users = await response.json();
        if (!Array.isArray(users)) {
          throw new Error("The profile service returned invalid user data.");
        }
        const matchingUser = users.find((item) => item.username === username);
        if (!matchingUser) {
          throw new Error("No profile was found for the signed-in user.");
        }

        setResult({ username, user: matchingUser, error: "" });
      } catch (loadError) {
        if (!controller.signal.aborted) {
          setResult({ username, user: null, error: loadError.message });
        }
      }
    }

    loadProfile();
    return () => controller.abort();
  }, [username]);

  if (!username) {
    return (
      <p className={styles.loading} role="alert">
        Your sign-in information is unavailable. Please sign in again.
      </p>
    );
  }

  const profile = result.username === username ? result : null;

  if (profile?.error) {
    return <p className={styles.loading} role="alert">{profile.error}</p>;
  }

  if (!profile?.user) {
    return <p className={styles.loading} role="status">Loading your profile...</p>;
  }

  const { user } = profile;

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Your account</p>
        <h1 className={styles.heading}>Profile information</h1>
      </header>
      <div className={styles.card}>
        <div className={styles.details}>
          <div className={styles.label}>Full name</div>
          <div className={`${styles.value} ${styles.capitalize}`}>
            {user.name.firstname} {user.name.lastname}
          </div>

          <div className={styles.label}>Username</div>
          <div className={styles.value}>{user.username}</div>

          <div className={styles.label}>Email</div>
          <div className={styles.value}>{user.email}</div>

          <div className={styles.label}>Phone</div>
          <div className={styles.value}>{user.phone}</div>

          <div className={styles.label}>Address</div>
          <div className={`${styles.value} ${styles.capitalize}`}>
            {user.address.city}, {user.address.street}, {user.address.number}
          </div>
        </div>
      </div>
    </section>
  );
}
