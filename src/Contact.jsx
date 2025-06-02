import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://683ca83f199a0039e9e310e7.mockapi.io/api/hospital/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response) {
          toast.success("Mesaj uğurla göndərildi!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          toast.error("Xəta baş verdi.");
        }
      })
      .catch((error) => {
        console.error("Xəta:", error);
        toast.success("Mesaj göndərilə bilmədi.");
      });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <div>
            <h1>Əlaqə</h1>
            <p className="contact-header-info">
              Klinikamızla əlaqə saxlamaq üçün formu doldurun və ya bizə birbaşa
              zəng edin.
            </p>

            <div className="contact-info">
              <p>
                <strong>Ünvan:</strong> Bakı, Nərimanov rayonu, H.Əliyev pr. 123
              </p>
              <p>
                <strong>Telefon:</strong> +994 50 123 45 67
              </p>
              <p>
                <strong>Email:</strong> info@vitacare.az
              </p>
              <p>
                <strong>İş saatları:</strong> 24/7
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Bizimlə əlaqə</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ad və Soyad"
                value={formData.name}
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
              <input
                type="text"
                name="subject"
                placeholder="Mövzu"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Göndər</button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.7685285545!2d49.69014584046229!3d40.39473700850412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1748805217409!5m2!1sen!2saz"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            title="Klinikanın yeri"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
