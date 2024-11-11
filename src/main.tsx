import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/404";
import { Root } from "./Root";
import { About } from "./pages/About";
import { Clinical } from "./pages/Clinical";
import { Forensic } from "./pages/Forensic";
import { Aging } from "./pages/Aging";
import { Contact } from "./pages/Contact";
import { Forms } from "./pages/Forms";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/meet-dr-gould",
          element: <About />,
        },
        {
          path: "/clinical-neuropsychology",
          element: <Clinical />,
        },
        {
          path: "/forensic-evaluations",
          element: <Forensic />,
        },
        {
          path: "/cognitive-aging",
          element: <Aging />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/forms",
          element: <Forms />,
        },
      ],
    },
  ],
  {
    basename: "/mindweb/",
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
