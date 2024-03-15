import React from 'react'
import './index.css'

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import imagen from "../public/global.fw.png"

import Navbar from "./Components/Navbar/Navbar.jsx"
import Index from "./Components/Index/Index.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> 

      <Navbar> </Navbar>
      <Index> </Index>

    </div>,
  },
  {
    path: "/nosotros",
    element: <div>Hello world!</div>,
  },
  {
    path: "/galeria",
    element: <div>Hello world!</div>,
  },
  {
    path: "/iniciar-sesion",
    element: <div>Hello world!</div>,
  },
  {
    path: "/registrarse",
    element: <div>Hello world!</div>,
  },
  {
    path: "/contacto",
    element: <div>Hello world!</div>,
  },
  {
    path: "/servicios/:servicio",
    element: <div>Hello world!</div>,
  },
  {
    path: "/blog",
    element: <div>Hello world!</div>,
  },
  {
    path: "/reservar-hora",
    element: <div>Hello world!</div>,
  },
  {
    path: "/contacto",
    element: <div>Hello world!</div>,
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
