import React from "react";
import { Link } from "react-router-dom";

export default function SideBar({sidebarController}) {

  const [sidebarOpen, setSidebarOpen] = sidebarController;

  const open = () => {
   
    setSidebarOpen(true)
  }

  return (
    <aside id="slidebar" onMouseEnter={open}  className={`bg-gray-sl text-gray-100 border-gray-100 border-e ${
      sidebarOpen ? "w-60 toggle" : "w-14 " } transform duration-300 ease-out min-h-screen flex flex-col`}>
      <div className="flex items-center gap-2 h-12 px-4 py-2 border-b-[0.1px] ">
        <div className="w-6 h-6 rounded-full overflow-hidden  ">
          <img className=" max-w-[253%] m-[-50%-75%]" src="../pictures/logo.jpg" alt="" />
        </div>
        <span className="link ">Universidad</span>
      </div>
      <div className="flex flex-col gap-2 p-4 border-b-[0.1px] link">
        <span className="">afmin</span>
        <span className="">Benjamin Tavarez{/*?php echo $us_name . " " . $us_lastname ?*/}</span>
      </div>
      <ul className="flex flex-col p-4 gap-2 ">
        <li className=" link block text-center whitespace-nowrap ">Menu Administracion</li>
        {/*?php if ($us_permiso == 1) : ?*/}
        <li className="hover:bg-white">
          <a className=" flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700  transform duration-300" href="./person">
            <div className="h-5 w-5">
              <img src="../svg/myprofile.svg" alt="" srcSet="" />
            </div>
            <span className="hidden">Person</span>
          </a>
        </li>
        <li className=" hover:bg-white">
          <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300" href="./rol">
            <div className="h-5 w-5">
              <img src="../svg/permissions.svg" alt="" srcSet="" />
            </div>
            <span className="hidden">Rol</span>
          </a>
        </li>
        <li className="hover:bg-white">
          <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700 transform duration-300" href="./log">
            <div className="h-5 w-5">
              <img src="../svg/nota.svg" alt="" srcSet="" />
            </div>
            <span className="hidden">Log</span>
          </a>
        </li>
        <li className="hover:bg-white">
          <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700  transform duration-300" href="./clases.php">
            <div className="h-5 w-5">
              <img src="../svg/classroom.svg" alt="" srcSet="" />
            </div>
            <span className="hidden">Clases</span>
          </a>
        </li>
        {/*?php endif; ?*/}
        {/*?php if ($us_permiso == 2) : ?*/}
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
        <ul data-collapse-toggle="lista_clases" id="lista_clases" className="hidden bg-gray-500 ps-2 border-y overflow-hidden  border-y-gray-500">
          {/*?php include "../model/R_clases_profesor_slider.php" ?*/}
        </ul>
        {/*?php endif; ?*/}
        {/*?php if ($us_permiso == 3) : ?*/}
        <li className="hover:bg-white">
          <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700  transform duration-300" href="./calificaciones.php">
            <div className="h-5 w-5">
              <img src="../svg/nota.svg " alt="" srcSet="" />
            </div>
            <span className="hidden">Ver calificaciones</span>
          </a>
        </li>
        <li className="hover:bg-white">
          <a className="flex gap-2 items-center whitespace-nowrap py-2 bg-gray-sl dark:bg-gray-700  transform duration-300" href="./clases_a.php">
            <div className="h-5 w-5">
              <img src="../svg/classroom.svg" alt="" srcSet="" />
            </div>
            <span className="hidden">Administra tus clases</span>
          </a>
        </li>
        {/*?php endif; ?*/}
      </ul>
    </aside>
  );
}
