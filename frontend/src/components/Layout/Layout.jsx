import SideBar from "./SideBar";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { use } from "react";

axios.interceptors.request.use(
  (config) => {
    config.headers['X-User-OS'] = window.navigator.platform;
    config.headers['X-User-Browser'] = identificarNavegador(navigator.userAgent);
    config.headers.Authorization = `Bearer ` + sessionStorage.getItem("myToken");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
function identificarNavegador(userAgent) {
  if (userAgent.includes("Edg") || userAgent.includes("Edge")) {
    return "Microsoft Edge";
  } else if (userAgent.includes("Firefox")) {
    return "Mozilla Firefox";
  } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
    return "Opera";
  } else if (userAgent.includes("Chrome")) {
    return "Google Chrome";

  } else if (userAgent.includes("Safari")) {
    return "Safari";
  } else {
    return "Otro Navegador ";
  }
}

export default function Layout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(sessionStorage.getItem("sidebarOpen") == "true");
  const { user, isChecking } = useAuth();


  useEffect(() => {
    sessionStorage.setItem("sidebarOpen", sidebarOpen);
  }, [sidebarOpen]);


  if (isChecking && !user) {
    return <div className="spinner">Validando integridad...</div>;
  }

  if (!user) {

    return <p>No autorizado</p>;
  }

  return (
    <div className="flex h-full light-theme ">
      <SideBar sidebarController={[sidebarOpen, setSidebarOpen]} user={user} />

      <div className="flex flex-col w-full h-full min-h-screen justify-between bg-gray-200">
        <div className="">
          <NavBar sidebarController={[sidebarOpen, setSidebarOpen]} user={user} />

          {children}
        </div>
        <footer className="bg-white dark:bg-gray-700  text-center  flex justify-between py-2 px-5">
          <p className=""> Universidad BTC. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
