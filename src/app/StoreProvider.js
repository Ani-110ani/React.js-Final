"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Provider, useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { makeStore } from "../lib/store";
import { loginSuccess } from "../lib/slices/userSlice";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const AUTH_CHANGE_EVENT = "auth-change";

function subscribeToAuthChanges(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(AUTH_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(AUTH_CHANGE_EVENT, callback);
  };
}

function getAuthSnapshot() {
  return Boolean(
    window.localStorage.getItem("token") ||
      window.sessionStorage.getItem("token"),
  );
}

function getServerAuthSnapshot() {
  return false;
}

function subscribeToClient() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerClientSnapshot() {
  return false;
}

function StoreContent({ children }) {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const isAuthenticated = useSyncExternalStore(
    subscribeToAuthChanges,
    getAuthSnapshot,
    getServerAuthSnapshot,
  );
  const isAuthPage = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      dispatch(loginSuccess(token));
      if (isAuthPage) router.replace("/");
    } else if (!isAuthPage) {
      router.replace("/login");
    }
  }, [dispatch, isAuthPage, pathname, router]);

  if (
    (isAuthenticated && isAuthPage) ||
    (!isAuthenticated && !isAuthPage)
  ) {
    return <p role="status">Checking your sign-in...</p>;
  }

  return (
    <>
      {isAuthenticated && <NavBar />}
      <main className="siteMain">{children}</main>
      {isAuthenticated && <Footer />}
    </>
  );
}

function ClientStoreProvider({ children }) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <StoreContent>{children}</StoreContent>
    </Provider>
  );
}

export default function StoreProvider({ children }) {
  const isClient = useSyncExternalStore(
    subscribeToClient,
    getClientSnapshot,
    getServerClientSnapshot,
  );

  if (!isClient) return <p role="status">Loading your store...</p>;

  return <ClientStoreProvider>{children}</ClientStoreProvider>;
}
