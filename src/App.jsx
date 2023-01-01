import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./pages/components/Header"
import "./index.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SignIn />
            </>
          }
        />
        <Route
          path="signup"
          element={
            <>
              <Header />
              <SignUp />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
