import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Autentification from "../Layout/ValidationToken";
import axios from "axios";

export default function SideBar({ sidebarController }) {
  const [sidebarOpen, setSidebarOpen] = sidebarController;
  const [datos, setDatos] = useState(null);

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    if (!sidebarOpen) {
      setOpen(0);
    }
  }, [sidebarOpen]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rolpage")
      .then((response) => {
        console.log(response.data);

        const filteredData = response.data.filter((item) => item.enlaced_to == null);
      setDatos(filteredData);

        
      })
      .catch((error) => {
        const data = JSON.parse(error.request.response)["errors"] || JSON.parse(error.request.response);
        setMsj(data);
      });
  }, []);

  return (
    <aside id="slidebar" onClick={() => setSidebarOpen(true)} className={`bg-gray-sl text-gray-100 border-gray-100 border-e ${sidebarOpen ? "w-60 toggle" : "w-14 "} transform duration-300 ease-out min-h-screen flex flex-col`}>
      <div className="flex items-center gap-2 h-12 px-4 py-2 border-b-[0.1px] ">
        <div className="w-6 h-6 rounded-full overflow-hidden  ">
          <img className=" max-w-[253%] m-[-50%-75%]" src="../pictures/logo.jpg" alt="" />
        </div>
        <span className="link ">Universidad</span>
      </div>
      <div className="flex flex-col gap-2 p-4 border-b-[0.1px] link">
        <span className="">afmin</span>
        <span className="">Benjamin Tavarez</span>
      </div>
      <ul className={`flex flex-col p-4 gap-2 `}>
        <li className=" link block text-center whitespace-nowrap ">Menu Administracion</li>

        <div>
          <li onClick={() => handleOpen(55)} className={`hover:bg-white relative ${open == 55 ? "ps-2 bg-white" : ""}`}>
            <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300 cursor-pointer">
              <div className="h-5 w-5">
                <img src="../svg/edit.svg" alt="" srcSet="" />
              </div>
              <span className="hidden">General</span>
              <img className={`absolute right-0 top-3 ${open == 55 ? "rotate-180" : ""} `} src="../svg/flecha.svg" alt="" srcSet="" />
            </a>
          </li>

          <ul className={` bg-gray-500 overflow-hidden submenu ${open == 55 ? "h-40" : "h-0"} `}>
            <li className="hover:bg-white  ">
              <a className="flex gap-2 items-center whitespace-nowrap py-2  bg-gray-sl dark:bg-gray-700 transform duration-300" href="./link">
                <div className="h-5 w-5">
                  <img src="../svg/link.svg" alt="" srcSet="" />
                </div>
                <span className="hidden">Link</span>
              </a>
            </li>
            <li className="hover:bg-white ">
              <a className=" flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700  transform duration-300" href="./person">
                <div className="h-5 w-5">
                  <img src="../svg/myprofile.svg" alt="" srcSet="" />
                </div>
                <span className="hidden">Person</span>
              </a>
            </li>
            <li className=" hover:bg-white ">
              <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300" href="./rol">
                <div className="h-5 w-5">
                  <img src="../svg/permissions.svg" alt="" srcSet="" />
                </div>
                <span className="hidden">Rol</span>
              </a>
            </li>
            <li className="hover:bg-white ">
              <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300" href="./log">
                <div className="h-5 w-5">
                  <img src="../svg/nota.svg" alt="" srcSet="" />
                </div>
                <span className="hidden">Log</span>
              </a>
            </li>
          </ul>
        </div>

        {datos ? (
          datos.map((item) => (
            <div>
            <li key={item.id} onClick={() => handleOpen(item.id)} className={`hover:bg-white relative ${open === item.id ? "ps-2 bg-white" : ""}`}>
              <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300 cursor-pointer">
                <div className="h-5 w-5">
                  <img src="../svg/edit.svg" alt="" />
                </div>
                <span className="hidden">{item.description}</span>
                <img className={`absolute right-0 top-3 ${open === item.id ? "rotate-180" : ""}`} src="../svg/flecha.svg" alt="" />
              </a>
              </li>

              <ul className={` bg-gray-500 overflow-hidden submenu ${open == item.id ? "" : "h-0"} `}>
              {item.linkeds.length > 0 && Array.isArray(item.linkeds)   ? (
               
                item.linkeds.map((item_, index_) => (
                  <li key={item_.id} className="hover:bg-white">
                    <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300" href={item_.page.url}>
                      <div className="h-5 w-5">
                        <img src="../svg/link.svg" alt="" />
                      </div>
                      <span className="hidden">{item_.description}</span>
                    </a>
                  </li>
                ))
               
              ) : (
                <div className=" ">
                  <div className="flex ms-2 gap-2 items-center whitespace-nowrap py-2 bg-gray-sl " >
                    <span className="hidden ps-2">No pages</span>
                  </div>
              </div>
              )}
               </ul>
          
            </div>
          ))
         
        ) : (
          <tr className="w-full">cargando ... </tr>
        )}

        <li className="hover:bg-white flex">
          <a className="flex w-full gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300" href="./clases_m.php">
            <div className="h-5 w-5 ">
              <img src="../svg/classroom.svg" alt="" srcSet="" />
            </div>
            <span className="hidden justify-between ">Mis Clases </span>
          </a>
          <span className="hidden">
            <img aria-controls="lista_clases" data-collapse-toggle="lista_clases" className=" cursor-pointer bg-gray-sl dark:bg-gray-700 ms-auto w-10 px-2 dark:hover:bg-gray-500 hover:bg-gray-500" src="../svg/arrow2.svg" alt="" />
          </span>
        </li>
        <ul data-collapse-toggle="lista_clases" id="lista_clases" className="hidden bg-gray-500 ps-2 border-y overflow-hidden  border-y-gray-500"></ul>
      </ul>
    </aside>
  );
}
