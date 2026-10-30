"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().min(6).required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
});

export default function RegisterPage() {
  const router = useRouter();
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          username: data.username,
          password: data.password,
          name: {
            firstname: data.firstname,
            lastname: data.lastname,
          },
          address: {
            city: "N/A",
            street: "N/A",
            number: 0,
            zipcode: "N/A",
            geolocation: { lat: "0", long: "0" },
          },
          phone: "N/A",
        }),
      });

      const result = await res.json();
      if (result) {
        setStatus("Registration successful!");
        setTimeout(() => router.push("/login"), 1500);
      }
    } catch (error) {
      setStatus("Registration failed");
    }
  };

  return (
    <section className={styles.page}>
      <h1 className={styles.heading}>Register</h1>
      {status && <p className={styles.status} role="status">{status}</p>}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label>First Name</label>
          <input type="text" {...register("firstname")} />
          {errors.firstname && <p className={styles.error}>{errors.firstname.message}</p>}
        </div>
        <div className={styles.field}>
          <label>Last Name</label>
          <input type="text" {...register("lastname")} />
          {errors.lastname && <p className={styles.error}>{errors.lastname.message}</p>}
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" {...register("email")} />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
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

        <button className={styles.submit} type="submit">Register</button>
      </form>
      <p className={styles.switch}>
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </section>
  );
}
