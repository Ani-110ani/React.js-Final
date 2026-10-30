"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

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
    <section>
      <h1>Register</h1>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input type="text" {...register("firstname")} />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...register("lastname")} />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
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

        <button type="submit">Register</button>
      </form>
    </section>
  );
}
