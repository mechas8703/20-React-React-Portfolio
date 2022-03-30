import React, { useState } from 'react';
import '../App.css';

// check if the email is valid
import { validateEmail } from '../utils/helper';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
        setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // check if email is not valid-  If so , an error message will display
    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Please double check that, please make sure your email address is correct and that each field is filled out.');
      return;
    }
  
    alert(`Thanks for reaching out ${name}`);

    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div>
      <form className="form m-3">
        <input
          className='form-control m-2'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          className='form-control m-2'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          className='form-control m-2'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        
        <button className="btn btn-outline-light" type="button" onClick={handleFormSubmit}>Send</button>
      </form>

      {errorMessage && (
        <div>
          <p className="error-text text-danger">{errorMessage}</p>
        </div>
      )}
    </div>

  );
}

export default Form;