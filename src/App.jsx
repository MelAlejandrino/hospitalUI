import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div  style={{minHeight: "100vh", backgroundColor: "white", position: "relative"}}>
      <Navbar />
      <div className="container" style={{height: "100%"}}>
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
