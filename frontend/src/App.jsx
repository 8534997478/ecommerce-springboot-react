import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import ProductList from "./pages/ProductList";
// import Cart from "./pages/Cart";
// import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [removeSplash, setRemoveSplash] = useState(false);


  useEffect(() => {

    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      setShowSplash(false);
      setRemoveSplash(true);
    }
    else{
      setShowSplash(true);
      setRemoveSplash(false);
    }
  }, []);
  return (
    <>
      {/* HOME IS ALWAYS MOUNTED */}
      <div className={`transition-opacity  showSplash ? "opacity-50 transition-opacity duration-1000 ease-in-out" : "opacity-100"`} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/ProductList" element={<ProductList/>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/AdminDashboard" element={<AdminDashboard/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>

      {/* SPLASH */}
      {!removeSplash && (
        <SplashScreen
          onFinish={() => {
            sessionStorage.setItem("hasSeenSplash", "true");
            setShowSplash(false);

            // remove splash AFTER fade completes
            setTimeout(() => setRemoveSplash(true), 1000);
          }}
        />
      )}
    </>
  )
}

export default App;
