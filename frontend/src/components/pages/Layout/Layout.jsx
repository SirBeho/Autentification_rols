import SideBar from "./SideBar";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Autentification  from "./ValidationToken";
import axios from "axios";

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer `+sessionStorage.getItem("myToken");
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default function Layout({ children }) {

    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [data, setData] = useState({});
    const navigatetoUrl = useNavigate();
    const [aprove, setAprove] = useState(false);
    const autentificacion = Autentification();
   
    useEffect(()  => {
      autentificacion.validationtoken()
      .then((data) => {
        setAprove(true);
        setData(data)
      })
      .catch((error) => {
        console.error(error);
        navigatetoUrl("/");
      });
   
    }, []);
   
   
    if(!aprove){
       return <h1>Cargando ...</h1>
    }
 
    return (
        <div className="flex h-full  ">

            <SideBar sidebarController={[sidebarOpen,setSidebarOpen]}   />

            <div className="flex flex-col w-full h-full min-h-screen justify-between bg-gray-200">
                <div className="">
                    <NavBar sidebarController={[sidebarOpen,setSidebarOpen]} />
                                      
                  {children  }
                </div>
                <footer className="bg-white dark:bg-gray-700  text-center  flex justify-between py-2 px-5">

                    <p className=""> Universidad BTC. Todos los derechos reservados.</p>

                  
                </footer>

            </div>

        </div>
    )
}