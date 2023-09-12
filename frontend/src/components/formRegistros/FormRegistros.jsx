import { Fragment, useState } from "react";
import FormClientes from "../formClientes/FormClientes";
import FormProveedores from "../formProveedores/FormProveedores";
import FormVendedores from "../formVendedores/FormVendedores";
import Nav from "../Nav/Nav";

export default function FormRegistros() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    sexo: "",
    fecha_nacimiento: "",
    documento_identificacion: "",
    direccion: "",
    codigo_postal: "",
    pais: "",
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

  const [select, setSelect] = useState();

  return (
    <Fragment>
      <Nav />
      <main className=" h-screen bg-white justify-center items-center flex">
        <form
          action={"http://127.0.0.1:8000/api/" + select + "/create"}
          method="POST"
          className=" w-[90%] h-[70%] flex items-center justify-around bg-white rounded-3xl  shadow-slate-400 shadow-xl "
        >
          <div className=" flex flex-wrap w-[45%] h-[90%] justify-around items-center">
            <label htmlFor="nombre" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
                Nombre
              </h3>
              <input
                value={formData.nombre}
                onChange={handleInputChange}
                type="text"
                name="nombre"
                id="nombre"
                className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="apellidos" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
                Apellido
              </h3>
              <input
                value={formData.apellidos}
                onChange={handleInputChange}
                type="text"
                name="apellidos"
                id="apellidos"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="telefono" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2 bottom-8 rounded-lg shadow-sm">
                Telefono
              </h3>
              <input
                value={formData.telefono}
                onChange={handleInputChange}
                type="text"
                name="telefono"
                id="telefono"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="sexo" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
                Sexo
              </h3>
              <input
                value={formData.sexo}
                onChange={handleInputChange}
                type="text"
                name="sexo"
                id="sexo"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="fecha_nacimiento" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
                Fec. de Nacimiento
              </h3>
              <input
                value={formData.fecha_nacimiento}
                onChange={handleInputChange}
                type="date"
                name="fecha_nacimiento"
                id="fecha_nacimiento"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="documento_identificacion" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
                Doc. de Identidad
              </h3>
              <input
                value={formData.documento_identificacion}
                onChange={handleInputChange}
                type="text"
                name="documento_identificacion"
                id="documento_identificacion"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="pais" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2 bottom-8 rounded-lg shadow-sm">
                País
              </h3>
              <input
                value={formData.pais}
                onChange={handleInputChange}
                type="text"
                name="pais"
                id="pais"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="codigo_postal" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
                Código Postal
              </h3>
              <input
                value={formData.codigo_postal}
                onChange={handleInputChange}
                type="text"
                name="codigo_postal"
                id="codigo_postal"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <label htmlFor="direccion" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2 bottom-8 rounded-lg shadow-sm">
                Dirección
              </h3>
              <input
                value={formData.direccion}
                onChange={handleInputChange}
                type="text"
                name="direccion"
                id="direccion"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
                required
              />
            </label>
            <select
              className=" border-black border-2 py-2 pl-4 w-[200px]"
              name="select"
              id="select"
              onChange={(e) => setSelect(e.target.value)}
              required
            >
              <option value="" disabled selected>
                --Seleccione--
              </option>
              <option value="proveedor">Proveedor</option>
              <option value="cliente">Cliente</option>
              <option value="vendedor">Vendedor</option>
            </select>
          </div>
          <div className=" flex flex-col justify-between w-[45%] h-[90%]">
            <div
              style={{ boxShadow: "inset -7px -7px  10px #dfdfdf" }}
              className="flex border w-full h-[80%] overflow-x-hidden overflow-y-scroll justify-center items-center"
            >
              {select === "proveedor" && (
                <p>
                  <FormProveedores />
                </p>
              )}
              {select === "cliente" && (
                <p>
                  <FormClientes />
                </p>
              )}
              {select === "vendedor" && (
                <p>
                  <FormVendedores />
                </p>
              )}
            </div>
            <button className=" px-12 py-3 bg-blue-600 hover:bg-blue-400 text-white rounded-2xl transition-all duration-200">
              Registar
            </button>
          </div>
        </form>
      </main>
    </Fragment>
  );
}
