import React, { useState } from "react";
import "./register.css";

function Registeration(){
  // States for registration
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [li,setLi] = useState('');
  const [fb,setFb] = useState('');
  const [insta,setInsta] = useState('');
  const [file,setFile] = useState(''); 

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleAge = (e) => {
    setAge(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlebio = (e) => {
    setBio(e.target.value);
    setSubmitted(false);
  };
  const handleLi = (e) => {
    setLi(e.target.value);
    setSubmitted(false);
  };
  const handleFb = (e) => {
    setFb(e.target.value);
    setSubmitted(false);
  };
  const handleInsta = (e) => {
    setInsta(e.target.value);
    setSubmitted(false);
  };
  const handleFile = (e) => {
    setBio(e.target.value);
    setSubmitted(false);
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || age === '' || bio==='') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

    return(
        <div>
            <span className="header-name">Registeration</span>
            <form className="reg-form">
                <label for='name'>Enter Name:</label>
                <input type = 'text' onChange={handleName()}></input>
                <label for='name'>Enter Age:</label>
                <input type = 'text' onChange={handleName()}></input>
                <label for='name'>Enter Bio:</label>
                <input type = 'text' onChange={handleName()}></input>
                <label for='fb'>Enter Facebook:</label>
                <input type = 'text' onChange={handleName()}></input>
                <label for='name'>Enter Instagram profile:</label>
                <input type = 'text' onChange={handleName()}></input>
                <label for='name'>Enter LinkedIn profile:</label>
                <input type = 'text' onChange={handleName()}></input>
            </form>
        </div>
    )
}
export default Registeration();