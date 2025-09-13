import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = (props) => {
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    setBtnDisabled(true);
    if (tel !== "" && email !== "" && message !== "") {
      setBtnDisabled(false);
    }
    return () => {};
  }, [btnDisabled, tel, email, message]);

  const handleTel = (e) => {
    setTel(e.target.value.trim());
  };
  const handleEmail = (e) => {
    setEmail(e.target.value.trim());
  };
  const handleMessage = (e) => {
    setMessage(e.target.value.trim());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `tel:${tel} email:${email} message:${message}`;
    const options = {
      method: "POST",
      url: "https://telegram-message-ac639ebe7878.herokuapp.com/text",
      headers: {
        "Content-Type": "application/json",
      },
      data: { text: text },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    e.target.reset();
  };
  return (
    <section className="bg-blue-50">
      <div className="container m-auto  pt-10 pl-5 pr-5  pb-5">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="tel">tel</label>
          <input
            onInput={handleTel}
            className="border p-2 bg-white"
            type="number"
            name="tel"
            id="tel"
          />
          <label htmlFor="email">email</label>
          <input
            onInput={handleEmail}
            className="border p-2 bg-white"
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="message">Contact with me</label>
          <textarea
            onInput={handleMessage}
            className="border p-2 bg-white"
            id="message"
            name="message"
            rows="5"
            cols="40"
            placeholder="Write message..."></textarea>
          <button
            disabled={btnDisabled}
            type="submit"
            className={
              "uppercase border font-bold bg-blue-300 active:bg-blue-500 disabled:bg-gray-300 disabled:text-gray-600"
            }>
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
