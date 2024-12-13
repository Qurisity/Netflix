import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import Footer from "./components/Footer"

export default function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  console.log(('auth user if here', user));

  useEffect(() => {
    authCheck();
  }, [])
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={!user ? <Login />: <Navigate to={"/"}/>} />
      <Route path="/signup" element={!user ? <Signup />: <Navigate to={"/"}/>} />
      </Routes>
    <Footer/>  
    <Toaster />
    </>
  )
}