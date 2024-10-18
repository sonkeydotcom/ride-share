import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Index from "./routes";
import ErrorPage from "./error-page";
import QuizPage from "./routes/quiz";
import QuizLayout from "./components/layout/quiz-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "quiz",
    element: <QuizLayout />,
    children: [{ path: "/quiz", element: <QuizPage /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
