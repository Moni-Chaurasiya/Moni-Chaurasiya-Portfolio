import { useState } from "react";
import service from "../appwrite/conf"; // Import your service class

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to Appwrite backend
    const response = await service.submitContactForm(formData);
    if (response) {
      alert("Your message has been sent successfully!");
    } else {
      alert("There was an error sending your message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-yellow-400">Name</label>
        <input
          className="w-full p-2 border border-gray-300 rounded bg-navy-blue"
          type="text"
          name="name"
          placeholder="Your Name..."
          required
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="mb-4">
        <label className="block text-yellow-400">Email</label>
        <input
          className="w-full p-2 border border-gray-300 rounded bg-navy-blue"
          type="email"
          name="email"
          placeholder="Your Email..."
          required
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="mb-4">
        <label className="block text-yellow-400">Phone</label>
        <input
          className="w-full p-2 border border-sky-600 rounded bg-navy-blue"
          type="tel"
          name="phone"
          placeholder="Your Phone Number..."
          pattern="[0-9]{10}"
          title="Please enter a valid phone number"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-yellow-400">Message</label>
        <textarea
          className="w-full p-2 border border-sky-400 rounded bg-navy-blue text-white"
          rows="3"
          name="message"
          placeholder="Write your message here..."
          required
          onChange={handleChange}
          value={formData.message}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-amber-600 text-white bold px-4 py-2 rounded hover:bg-amber-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
