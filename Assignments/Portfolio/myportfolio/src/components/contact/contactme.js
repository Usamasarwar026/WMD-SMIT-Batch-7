import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactme.css';
import { ToastContainer, toast } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
import Button from '../button/Button';

function Contactme() {
  // State management for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Simple validation for form fields
  // const validateForm = () => {
  //   const { name, email, message } = formData;
  //   if (!name || !email || !message) {
  //     toast.error("Please fill all fields.");
  //     return false;
  //   }
  //   return true;
  // };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "880ad9c8-e71a-4523-98a3-5627b5772e8f"); // use your own Access key here not this

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message send successfully!");
      console.log("Success", res);

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };


  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control "
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="comment" className="form-label">Message:</label>
          <textarea
            className="form-control"
            rows="5"
            id="comment"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Button title='Send Message'  />
      </form>

      {/* Toast Container to display toasts */}
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}

export default Contactme;
