import React, { useState } from 'react';
import validator from 'validator';

const ContactForm = () => {
    const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!validator.isLength(name, { min: 3 })) {
      newErrors.name = 'Name should be at least 3 characters long.';
    }

    if (!validator.isEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validator.isLength(message, { min: 10 })) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);

    // If errors exist, do not proceed with form submission
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

   // If inputs are valid, show success message
   setShowSuccess(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded shadow-md">
    {showSuccess ? (
        
        <div className="bg-green-100 p-4 rounded">
          <p className="text-green-600 font-semibold">
            Thank you for your message! We'll be in touch soon.
          </p>
        </div>
      ) : (
    <form
      className="max-w-md mx-auto p-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          placeholder="Your Name"
          required
        />
        {errors.name && (
          <p className="text-red-600 mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          placeholder="Your Email"
          required
        />
        {errors.email && (
          <p className="text-red-600 mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          rows="4"
          placeholder="Your Message"
          required
        ></textarea>
        {errors.message && (
          <p className="text-red-600 mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>)}
    </div>
  );
};

export default ContactForm;
