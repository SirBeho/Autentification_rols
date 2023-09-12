
import { useState } from "react";


function ClientesRegistro() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    direccion: "",
    sexo: "",
    edad: "",
    referencias: "",
    histdecompras: "",
    niveldesatisfacion: "",
    observaciones: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-28 p-4 bg-white shadow-md rounded-md ">
      <h2 className="text-xl font-semibold mb-8 flex justify-center ">
        Registro de Clientes
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 w-160">
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block font-medium mb-1">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block font-medium mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block font-medium mb-1">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sexo" className="block font-medium mb-1">
            Sexo
          </label>
          <select
            id="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="edad" className="block font-medium mb-1">
            Edad
          </label>
          <input
            type="number"
            id="edad"
            value={formData.edad}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="referencias" className="block font-medium mb-1">
            Referencias
          </label>
          <textarea
            id="referencias"
            value={formData.referencias}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-100 resize-none"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="historialCompras" className="block font-medium mb-1">
            Hist. de Compras
          </label>
          <textarea
            id="historialCompras"
            value={formData.histdecompras}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="nivelSatisfaccion" className="block font-medium mb-1">
            Nivel Satisfacción
          </label>
          <input
            type="number"
            id="nivelSatisfaccion"
            value={formData.niveldesatisfacion}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="observaciones" className="block font-medium mb-1">
            Observaciones
          </label>
          <textarea
            id="observaciones"
            value={formData.observaciones}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 col-span-3 mb-6"
        >
          Registrar Cliente
        </button>
      </form>
    </div>
  );
}
export default ClientesRegistro;
