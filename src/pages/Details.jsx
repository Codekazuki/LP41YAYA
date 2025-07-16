import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Details.css";
import teamData from "../teamData";

const Details = () => {
  const { id } = useParams();

  const teamMember = teamData.find((member) => member.id === Number(id));

  if (!teamMember) {
    return (
      <div className='details'>
        <Navbar />
        <main className='main-content'>
          <div className='detail-container'>
            <h2>Team member not found</h2>
            <Link to='/' className='back-button'>
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className='details'>
      <Navbar />
      <main className='main-content'>
        <div className='detail-container'>
          <img src={teamMember.image} alt={teamMember.name} />
          <div>
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.title}</h3>
            <p>{teamMember.description}</p>
            <Link to='/' className='back-button'>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Details;
