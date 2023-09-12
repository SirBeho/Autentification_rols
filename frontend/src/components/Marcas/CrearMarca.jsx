import React, { useState } from "react";
function CrearMarca() {
  return (
    <div className="max-w-md mx-auto mt-28 p-4 bg-white shadow-md rounded-md ">
      <h2 className="text-xl font-semibold mb-8 flex justify-center ">
        Nueva Marca
      </h2>
      <form className="flex flex-col gap-[20px] w-160" method="POST" action="http://127.0.0.1:8000/api/marcas">
        <div className="w-160 flex flex-col gap-[10px]">
          <label htmlFor="nombre" className="font-medium mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 col-span-3 mb-6"
        >
          Guardar Marca
        </button>
      </form>
    </div>
  );
}
export default CrearMarca;
