import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import  Autentification  from "./Layout/ValidationToken";


export default function Dashboard() {
  
  const [data, setData] = useState();
  const navigatetoUrl = useNavigate();
  const autentificacion = Autentification();

  useEffect(()  => {
    autentificacion.validationtoken()
        .then((data) => {
      setData(data)
      console.log( data);
    })
    .catch((error) => {
      console.error(error);
      navigatetoUrl("/");
    });
 
  }, []);

  return (

    <main className="h-full min-h-full flex flex-col bg-gray-200 p-4 ">
      
  <div className="w-full flex justify-between my-4">
    <h1 className="text-2xl ">Dashboard</h1>
    <span className="text-sm text-blue-900 dark:text-blue-600">
      Home / <span className="text-gray-600 dark:text-gray-400">Dashboard</span>
    </span>
  </div>
  <div className="w-fit bg-white dark:bg-gray-700 p-2 rounded-md pe-4 shadow-md">
    Bienvenido
    <br /> Selecciona la acción que quieras realizar en las pestañas del menú de
    la izquierda.
  </div>
</main>

      

  );
}

