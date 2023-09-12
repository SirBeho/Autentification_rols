import { useEffect, useState } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import axios from "axios";

export default function Nav() {
  const [sucursales, setSucursales] = useState([]);
  const [sucursal, setSucursal] = useState(1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/sucursales")
      .then((response) => {
        setSucursales(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("sucursal", sucursal);
  }, [sucursal]);

  return (
    <nav className="  z-10 top-0 fixed w-screen bg-blue-950 max-w-screen flex flex-wrap items-center justify-between text-white h-20 py-0 px-6">
      <div className="flex gap-2 items-center h-full font-medium ">
        <Navbar.Brand href="/home" className="flex items-center ">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Car Dealer
          </span>
        </Navbar.Brand>

        <div className="flex h-20 p-4 items-center text-white   hover:bg-blue-900">
          <Dropdown
            inline
            label={"Mantenimientos "}
            className="flex h-40 p-4 items-center mt-50 "
          >
            <Navbar.Link
              href="/marcas"
              className="block items-center hover:underline"
            >
              Marcas
            </Navbar.Link>
            <Navbar.Link
              href="/modelos"
              className="block items-center hover:underline"
            >
              Modelos
            </Navbar.Link>
            <Navbar.Link
              href="/suspensiones"
              className="block items-center hover:underline"
            >
              Suspensiones
            </Navbar.Link>
          </Dropdown>
        </div>

        <ul className="flex items-center h-20 ">
          <Navbar.Link
            href="/cardealer"
            className=" border-b-0 flex h-20 p-4 items-center text-white   hover:bg-blue-900"
          >
            Listado
          </Navbar.Link>
          <Navbar.Link
            href="/registro"
            className="border-b-0 flex h-20 p-4 items-center text-white  hover:bg-blue-900"
          >
            Vehiculos
          </Navbar.Link>

          <Navbar.Link
            href="/clientes"
            className="border-b-0 flex h-20 p-4 items-center text-white  hover:bg-blue-900"
          >
            Clientes
          </Navbar.Link>

          <Navbar.Link
            href="/proveedores"
            className="border-b-0 flex h-20 p-4 items-center text-white  hover:bg-blue-900"
          >
            Proveedores
          </Navbar.Link>

          <Navbar.Link
            href="/vendedores"
            className="border-b-0 flex h-20 p-4 items-center text-white  hover:bg-blue-900"
          >
            Vendedores
          </Navbar.Link>

          <Navbar.Link
            href="/registros"
            className="border-b-0 flex h-20 p-4 items-center text-white  hover:bg-blue-900"
          >
            Registros
          </Navbar.Link>
        </ul>
      </div>
      <div className="flex items-center gap-4 me-4">
        <label htmlFor="marca" className="mt-2">
          Sucursales:
        </label>
        <select
          id="marca"
          className=" border-2 bg-blue-950 rounded-lg"
          value={sucursal}
          onChange={(e) => setSucursal(e.target.value)}
        >
          <option value="" disable="true"></option>
          {sucursales.map((e, index) => (
            <option key={index} value={e.id}>
              {e.nombre}
            </option>
          ))}
        </select>

        <img
          className="h-14 rounded-full border border-black"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
          alt="user"
        />
      </div>
    </nav>
  );
}
