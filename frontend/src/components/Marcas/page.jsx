import { useState, useEffect } from "react"
import axios from "axios";
import Nav from "../Nav/Nav";

export default function Marcas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/marcas/full')
      .then((response) => {
        setMarcas(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
      <Nav />
        <main className="container mx-auto py-8">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 p-4">
              <label htmlFor="search" className="block text-lg  mb-2 font-medium">Search:</label>
              <input id="search" type="text" className="w-full px-4 py-2 border border-blue-900 rounded-md" />
            </div>
            <a
              
              href="/marcas/crear"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-12 text-center dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
              type="button"
            >
              Agregar Marca
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl mt-4">Nuestras Marcas</h1>
            <table className="w-full md:w-2/3 table-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-start">ID</th>
                  <th className="py-4 px-6 text-start">Nombre de la Marca</th>
                </tr>
              </thead>
              <tbody>
                {marcas.map((marca) => (
                  <tr key={marca.id} className="border-b border-gray-300">
                      <td className="py-4 px-6">{marca.id}</td>
                      <td className="py-4 px-6">{marca.nombre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-full md:max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Agregar Marca</h3>
                    <form className="space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                            <input type="text" name="nueva-marca" id="nueva-marca" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nissan" required />
                        </div>
                       
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar Marca</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
