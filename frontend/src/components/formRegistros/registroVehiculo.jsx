import React, { useEffect } from "react";
import { useState, handleSubmit } from "react";
import { useParams } from "react-router-dom";
import rateLimit from "axios-rate-limit";
import axios from "axios";
import Nav from "../Nav/Nav";


function RegistroVehiculo() {
  const params = useParams().id;
  const [msj, setMsj] = useState({});
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [suspenciones, setSuspenciones] = useState([]);
  const [combustibles, setCombustibles] = useState([]);
  const [cajas, setCajas] = useState([]);
  const [modelosOriginales, setModelosOriginales] = useState([]);
  const [userData, setUserData] = useState({
    matricula: "",
    anio: "",
    color: "",
    combustible_id: "",
    caja_id: "",
    descripcion: "",
    delantera_suspension_id: "",
    trasera_suspension_id: "",
    potencia: "",
    traccion: "",
    torque_maximo: "",
    ubicacion: "",
    cilindros: "",
    diametro_carrera: "",
    cilindraje: "",
    compresion: "",
    alimentacion: "",
    velocidades: "",
    frenos_delanteros: "",
    sucursal_id: "1",
    modelo_id: "",
    status: true,
    modelo: { marca_id: 0 },
  });

  

  const api = rateLimit(axios.create(), {
    maxRequests: 5,
    perMilliseconds: 1000,
  });

  useEffect(() => {
    api
      .get("http://127.0.0.1:8000/api/marcas")
      .then((response) => {
        setMarcas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    api
      .get("http://127.0.0.1:8000/api/modelos")
      .then((response) => {
        setModelosOriginales(response.data);
       
      })
      .catch((error) => {
        console.error(error);
      });

    api
      .get("http://127.0.0.1:8000/api/suspensiones")
      .then((response) => {
        setSuspenciones(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    api
      .get("http://127.0.0.1:8000/api/combustibles")
      .then((response) => {
        setCombustibles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    api
      .get("http://127.0.0.1:8000/api/cajas")
      .then((response) => {
        setCajas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    if (params) {
      api
        .get("http://127.0.0.1:8000/api/vehiculos/" + params)
        .then((response) => {
          console.log(response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  if (params) {
    useEffect(() => {
      cambiarModelos(userData.modelo.marca_id);
    }, [modelosOriginales]);
  }

  function Enviar(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datos = {};
    datos["sucursal_id"] = sessionStorage.getItem("sucursal");
    datos["status"] = false;

    formData.forEach((value, id) => {

      setUserData((userData) => ({
        ...userData,
        [id]: value,
      }));

      datos[id] = value;
    });

    console.log(datos);
    if (params) {
      axios
        .put("http://localhost:8000/api/vehiculos/" + params, datos)
        .then((response) => {
          setMsj(response.data);
        })
        .catch((error) => {
          const data =
            JSON.parse(error.request.response)["errors"] ||
            JSON.parse(error.request.response);
          setMsj(data);
        });
    } else {
      axios
        .post("http://localhost:8000/api/vehiculos", datos)
        .then((response) => {
          setMsj(response.data);
        })
        .catch((error) => {
          const data =
            JSON.parse(error.request.response)["errors"] ||
            JSON.parse(error.request.response);
          setMsj(data);
        });
    }

    setTimeout(() => {
      setMsj({});
    }, 20000);
  }


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(e.target.value)
    console.log(e.target.id)
 
    setUserData({
      ...userData,
      [id]: value,
    });
  };

  function cambiar(e){
    
    setUserData({
      ...userData,
      ["status"]: !userData.status,
    });
  }

  function cambiarModelos(id_marca) {
  

    setUserData({
      ...userData,
      ["modelo"]: { "marca_id": id_marca },
    });
   
    setModelos(modelosOriginales);
    
    const modelosFiltrados = modelosOriginales.filter((modelo) => modelo.marca_id == id_marca);
    setModelos(modelosFiltrados);
    
  }

  return (
    <div>
      <Nav />
      <form className="container mx-auto py-8 mt-14" onSubmit={Enviar}>
        <h1 className="font-bold text-2xl border-b-2 border-blue-900 ">
          Registro de vehiculo
        </h1>

        <section className="flex justify-center space-x-12 mt-4">
          <div className="flex-col  flex w-40">
            <h1 className="font-bold border-b-2 border-blue-900 w-40">
              Datos generales:
            </h1>

            <label htmlFor="matricula" className="mt-2">
              Matricula
            </label>
            <input
              id="matricula"
              name="matricula"
              type="text"
              className=" border-2 border-blue-900 rounded-lg"
              value={userData.matricula}
              onChange={handleInputChange}
            />

            <label htmlFor="marca" className="mt-2">
              Marca:
            </label>
            <select
              id="marca"
              className=" border-2 border-blue-900 rounded-lg"
              value={userData.modelo.marca_id}
              onChange={(e) => cambiarModelos(e.target.value) }
            >
              <option value="" disable="true"></option>
              {marcas.map((e, index) => (
                <option key={index} value={e.id}>
                  {e.nombre}
                </option>
              ))}
            </select>

            <label htmlFor="modelo_id" className="mt-2">
              Modelo:
            </label>
            <select
              id="modelo_id"
              name="modelo_id"
              className=" border-2 border-blue-900 rounded-lg"
              value={userData.modelo_id}
              onChange={handleInputChange}
            >
              <option value="" disable="true"></option>
              {modelos.map((e, index) => (
                <option key={index} value={e.id}>
                  {e.nombre}
                </option>
              ))}
            </select>

            <label htmlFor="anio" className="mt-2">
              Año
            </label>
            <input
              id="anio"
              name="anio"
              type="number"
              className=" border-2 border-blue-900 rounded-lg"
              value={userData.anio}
              onChange={handleInputChange}
            />

            <label htmlFor="color" className="mt-2">
              Color
            </label>
            <input
              id="color"
              name="color"
              type="text"
              className=" border-2 border-blue-900 rounded-lg"
              value={userData.color}
              onChange={handleInputChange}
            />

            <label htmlFor="combustible_id" className="mt-2">
              Combustible:
            </label>
            <select
              id="combustible_id"
              name="combustible_id"
              className=" border-2 border-blue-900 rounded-lg"
              value={userData.combustible_id}
              onChange={handleInputChange}
            >
              <option value="" disable="true"></option>
              {combustibles.map((e, index) => (
                <option key={index} value={e.id}>
                  {e.nombre}
                </option>
              ))}
            </select>

            <label htmlFor="caja_id" className="mt-2">
              Caja:
            </label>
            <select
              id="caja_id"
              name="caja_id"
              className=" border-2 border-blue-900 rounded-lg"
              value={userData.caja_id}
              onChange={handleInputChange}
            >
              <option value="" disable="true"></option>
              {cajas.map((e, index) => (
                <option key={index} value={e.id}>
                  {e.tipo}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-col flex">
            <label
              htmlFor="image"
              className=" font-bold border-b-2 border-blue-900 w-48"
            >
              Subir foto del vehiculo
            </label>
            <div className="h-52 w-96 rounded-lg border-2 border-blue-900 overflow-hidden mt-2">
              <img
                className="w-full h-full object-cover "
                src={params ? "../car1.png " : "./car.png "}
                alt="vehiculo"
              />
            </div>

            {/* <input type="file" id="image" className="font-bold mt-2" value={userData.imagen} onChange={handleInputChange} /> */}

            <label
              htmlFor="precio"
              className="font-bold border-b-2 border-blue-900 w-40"
            >
              Precio
            </label>
            <div className="relative mt-2">
              <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                payments
              </span>
              <input
                id="precio"
                name="precio"
                type="number"
                className="w-42 border-2 border-blue-900 rounded-lg pl-8"
                value={userData.precio}
                onChange={handleInputChange}
              />
            </div>

            <label
              htmlFor="descripcion"
              className="font-bold border-b-2 border-blue-900 w-40"
            >
              Descripcion
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="border-2 border-blue-900 w-96 h-28 rounded-lg mt-2 p-2"
              value={userData.descripcion}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
          
            <h1 className="font-bold border-b-2 border-blue-900 w-40">
              Datos Tecnicos:
            </h1>
            <div className="grid grid-cols-2 gap-x-4 ">
              <label htmlFor="delantera_suspension_id" className="mt-2">
                Suspecion Delantera: <br />
                <select
                  id="delantera_suspension_id"
                  name="delantera_suspension_id"
                  className=" border-2 border-blue-900 rounded-lg w-full"
                  value={userData.delantera_suspension_id}
                  onChange={handleInputChange}
                >
                  <option value="" disable="true"></option>
                  {suspenciones.map((e, index) => (
                    <option key={index} value={e.id}>
                      {e.tipo}
                    </option>
                  ))}
                </select>
              </label>

              <label htmlFor="trasera_suspension_id" className="mt-2 ">
                Suspecion Trasera: <br />
                <select
                  id="trasera_suspension_id"
                  name="trasera_suspension_id"
                  className=" border-2 border-blue-900 rounded-lg w-full"
                  value={userData.trasera_suspension_id}
                  onChange={handleInputChange}
                >
                  <option value="" disable="true"></option>
                  {suspenciones.map((e, index) => (
                    <option key={index} value={e.id}>
                      {e.tipo}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-2">
                Potencia
                <br />
                <input
                  id="potencia"
                  name="potencia"
                  type="number"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.potencia}
                  onChange={handleInputChange}
                />
              </label>

              <label className="mt-2">
                Traccion
                <br />
                <input
                  id="traccion"
                  name="traccion"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.traccion}
                  onChange={handleInputChange}
                />
              </label>

              <label className="mt-2">
                Torque Maximo
                <br />
                <input
                  id="torque_maximo"
                  name="torque_maximo"
                  type="number"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.torque_maximo}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="ubicacion" className="mt-2">
                Ubicaion
                <br />
                <input
                  id="ubicacion"
                  name="ubicacion"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.ubicacion}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="cilindros" className="mt-2">
                Cilindros
                <br />
                <input
                  id="cilindros"
                  name="cilindros"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.cilindros}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="diametro_carrera" className="mt-2">
                Carreta
                <br />
                <input
                  id="diametro_carrera"
                  name="diametro_carrera"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.diametro_carrera}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="cilindraje" className="mt-2">
                Cilindraje
                <br />
                <input
                  id="cilindraje"
                  name="cilindraje"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.cilindraje}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="compresion" className="mt-2">
                Compresion
                <br />
                <input
                  id="compresion"
                  name="compresion"
                  type="number"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.compresion}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="alimentacion" className="mt-2">
                Alimentacion
                <br />
                <input
                  id="alimentacion"
                  name="alimentacion"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.alimentacion}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="velocidades" className="mt-2">
                Velocidades
                <br />
                <input
                  id="velocidades"
                  name="velocidades"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.velocidades}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="frenos_delanteros" className="mt-2">
                Frenos
                <br />
                <input
                  id="frenos_delanteros"
                  name="frenos_delanteros"
                  type="text"
                  className="w-full border-2 border-blue-900 rounded-lg "
                  value={userData.frenos_delanteros}
                  onChange={handleInputChange}
                />
              </label>

              <label className="mt-8 inline-flex items-center cursor-pointer">
                <input

                  type="checkbox"
                  id="status"
                  name="status"
                  value={userData.status}
                  
                  defaultChecked={userData.status}
                  onClick={cambiar}
                  className="sr-only peer"
                />
                <div className=" relative w-11 h-5 bg-red-600 peer-checked:bg-green-600 rounded-full peer after:bg-white  after:absolute after:top-[2px] after:left-[2px] after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:after:translate-x-6"></div>
                <span className="hidden ml-3 text-sm font-semibold text-gray-900 peer peer-checked:block">
                  Activo
                </span>
                <span className=" ml-3 text-sm font-semibold text-gray-900 peer peer-checked:hidden">
                  Inactivo
                </span>
              </label>
            </div>
          </div>
        </section>

        <section className="font-semibold text-xl text-center  mt-8">
          <h1>
            {Object.entries(msj).map(([clave, valor]) => (
              <span
                key={clave}
                className={clave === "msj" ? "text-green-600" : "text-red-400"}
              >
                <strong>{clave}:</strong> {valor}
              </span>
            ))}
          </h1>

          <button
            type="submit"
            className="bg-blue-900 text-white font-bold py-2 px-10 rounded"
          >
            {params ? "Modificar" : "Registrar"}
          </button>
        </section>
      </form>
    </div>
  );
}

export default RegistroVehiculo;
