import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import netErrorImg from '../.././assets/img/internetError.jpg';

const Internetconnection = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate('/');
    }
  
    const buttonStyle = {
      fontWeight: 700,
      letterSpacing: '0.8px',
      padding: '7px 7px',
      marginTop:'10px',
      background: '#97b9fc',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      fontSize: '18px',
      marginBottom: '12px',
      display: 'inline-block'
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <img src={netErrorImg} alt="Internet Error" style={{width:"15%"}}/>
        <h3>Unable to connect to the internet. Please verify your internet connection. </h3>
        <button style={buttonStyle} onClick={navigateToHome}>
          <ArrowLeftCircle size={25} style={{ marginRight: '8px' }} /> Go Back
        </button>
      </div>
    );
  }
  
export default Internetconnection
