import axios from 'axios';
import { useState } from 'react';
import '../CSS/Contact.css';



function Contact() {
  const [form, setForm] = useState({ email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const postForm = async (e) => {
    e.preventDefault();
    try {
      const { email, message } = form; // Destructure email and message from form
  
      const response = await axios.post('http://localhost:3001/api/v1/postForm', { email, message });
      
      if (response.status === 200) {
        alert('Thanks!');
        setForm({ email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="contact">
      <h3 className="contact__title">Contact</h3>
      <div className="form-container">
        <form className="form" onSubmit={postForm}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              value={form.email}
              type="text"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Leave a message</label>
            <textarea
              onChange={handleChange}
              value={form.message}
              name="message"
              id="message"
              rows={10}
              cols={50}
              required
            ></textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
