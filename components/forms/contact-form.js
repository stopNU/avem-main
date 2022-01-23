import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // don't redirect the page

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        name: name,
        subject: "subject test",
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log("Done");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default ContactForm;
