import React, { useState, useEffect } from 'react';
import formGraphic from './assets/Airfryer.png';

// Generates a 16-digit code formatted as ####-####-####-####
const generateCode = () => {
  const digits = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10));
  return digits.join('').match(/.{1,4}/g).join('-');
};

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    code: '',
  });

const [submitted, setSubmitted] = useState(false); // NEW

  useEffect(() => {
    const randomCode = generateCode();
    setFormData((prev) => ({ ...prev, code: randomCode }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    setSubmitted(true); // NEW

    setFormData((prev) => ({
      ...prev,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      code: generateCode(),
    }));
  };

  if (submitted) {
    return (
      <div
        style={{
          maxWidth: '500px',
          margin: '4rem auto',
          padding: '2rem',
          borderRadius: '12px',
          backgroundColor: '#56ACBD',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h2>Thanks for submitting!</h2>
        <p>We've received your interest for the Spidr Air-matic.</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '500px',
        margin: '4rem auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        borderRadius: '12px',
        backgroundColor: '#56ACBD', 
        color: 'white',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      <h2 style={{ fontWeight: 700, textAlign: 'center', color: 'white', marginBottom: '1rem' }}>
        COMING SOON
      </h2>
      
      <hr style={{ border: 'none', borderTop: '1px solid white', margin: '0 auto .1rem', width: '60%' }} />

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <img
          src={formGraphic}
          alt="Form Graphic"
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'fill', // better for filling the circle
            borderRadius: '50%',
            border: '5px solid black' // adjust thickness as needed

          }}
        />
        <p style={{ color: '#ddd', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
          Show excitement for the new Spidr Air-matic today for a limited discount!
        </p>
      </div>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input type="hidden" name="code" value={formData.code} />
      
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <div
          style={{
            padding: '0.5rem 0.75rem',
            backgroundColor: '#ffffffff',
            color: 'white',
            borderRadius: '4px',
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.85rem',
            lineHeight: '1.2',
            flex: 1,
          }}
        >
          <span style={{ fontSize: '1.2rem', fontWeight: '600',  textDecoration: 'line-through', color: '#FF0000' }}>$99</span>
          <span style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold' }}>Now $49.99</span>
        </div>

      <button
      type="submit"
      style={{
        padding: '0.5rem',
        backgroundColor: '#00c3ff',
        color: 'white',
        border: '1px solid white',
        borderRadius: '4px',
        cursor: 'pointer',
        flex: 1,
        }}
      >
        INTERESTED
      </button>
      </div>
    </form>
  );
};

export default Form;
