import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointment/:docID" element={<MyAppointment />} />

      </Routes>
    </div>
  )
}