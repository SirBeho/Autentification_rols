import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Validationtoken() {
  const navigatetoUrl = useNavigate();

  const validationtoken = () => {
    return new Promise((resolve, reject) => {
      if (!sessionStorage.getItem("myToken")) {
        console.log(sessionStorage.getItem("myToken"));
        navigatetoUrl("/");
        reject("No hay token de sesión");
      }

      axios.post("http://localhost:8000/api/auth/me")
        .then((response) => {
          if (!response.data.message) {
            navigatetoUrl("/");
            console.log("sin datos");
            reject("No hay datos disponibles");
          } else {
            const data = response.data.message;
            resolve(data);
          }
        })
        .catch((error) => {
          const data = error.response?.data?.errors || error.response?.data || { "error": error["message"] };
          console.log(data);
          reject(data);
        });
    });
  }

  return { validationtoken };
}