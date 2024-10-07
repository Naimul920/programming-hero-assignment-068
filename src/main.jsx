import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PageToRead from "./components/PageToRead/PageToRead.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // children:[
        //   {
        //     path : "/:id",
        //     element: <h1>Hello</h1>,
        //   }
        // ],
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch("../books.json"),
      },
      {
        path: "/page-to-read",
        element: <PageToRead></PageToRead>,
        loader: ()=>fetch("../books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch("../books.json"),
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
