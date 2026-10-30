"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/lib/slices/userSlice";
import "./page.module.css";

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginSuccess(token));
      router.push("/profile");
    }
  }, [dispatch, router]);

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
        }
        dispatch(loginSuccess(result.token));
        router.push("/profile");
      } else {
        setAuthError("Invalid username or password");
      }
    } catch (error) {
      setAuthError("Network error occurred");
    }
  };

  return (
    <section>
      <h1>Login</h1>
      {authError && <p style={{ color: "red" }}>{authError}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input type="text" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" {...register("rememberMe")} />
            Remember me
          </label>
        </div>

        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
