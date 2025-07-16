import React from "react";
import Navbar from "../components/Navbar";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <main className='main-content'>
        <h1>RCCG LP41 YAYA LEADERSHIP SUMMIT 2025</h1>
        <h1>EFFECTIVE LEADERSHIP & STEWARDSHIP</h1>
        <CardList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
