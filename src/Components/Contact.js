import React, { useState } from "react";

const Contact = ({ data }) => {
  const [url, setUrl] = useState(
    "mailto:test@example.com?subject=subject&body=body"
  );
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { name, subject, email, message } = form;

  const handleInput = (e) => {
    setError(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Validate
    if (
      name.trim() === "" ||
      subject.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Send message
    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);

    // Restart form
    setForm({ name: "", subject: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          {error && (
            <p className="alerta-error">Todos los campos son obligatorios</p>
          )}

          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={name}
                  type="text"
                  size="35"
                  id="contactName"
                  name="name"
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="email"
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  value={subject}
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="subject"
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={handleInput}
                  cols="50"
                  rows="15"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div>
                <button type="submit" onClick={handleClick} className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data.name}
              <br />
              {data.address.street} <br />
              {data.address.city}, {data.address.state} {data.address.zip}
              <br />
              <span>{data.phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
