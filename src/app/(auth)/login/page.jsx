"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/lib/slices/userSlice";
import styles from "./page.module.css";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  rememberMe: yup.boolean(),
});

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (result.token) {
        if (data.rememberMe) {
          localStorage.setItem("token", result.token);
          sessionStorage.removeItem("token");
        } else {
          sessionStorage.setItem("token", result.token);
          localStorage.removeItem("token");
        }
        window.dispatchEvent(new Event("auth-change"));
        dispatch(loginSuccess(result.token));
        router.replace("/");
      } else {
        setAuthError("Invalid username or password");
      }
    } catch (error) {
      setAuthError("Network error occurred");
    }
  };

  return (
    <section className={styles.page}>
      <h1 className={styles.heading}>Login</h1>
      {authError && <p className={styles.status} role="alert">{authError}</p>}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label>Username</label>
          <input type="text" {...register("username")} />
          {errors.username && <p className={styles.error}>{errors.username.message}</p>}
        </div>

        <div className={styles.field}>
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>

        <div className={styles.remember}>
          <label>
            <input type="checkbox" {...register("rememberMe")} />
            Remember me
          </label>
        </div>

        <button className={styles.submit} type="submit">Sign In</button>
      </form>
      <p className={styles.switch}>
        New here? <Link href="/register">Create an account</Link>
      </p>
    </section>
  );
}
