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
    setBtnDisabled(true);
  };
  return (
    <section className="bg-blue-50">
      <div className="container m-auto  pt-10 pl-5 pr-5  pb-5  lg:flex lg:flex-col lg:items-center  ">
        <h3 className="mb-10 text-4xl font-extrabold">Contact with me</h3>
        <form
          className="flex flex-col gap-2 p-0 lg:items-center lg:w-fit lg:h-fit "
          onSubmit={handleSubmit}>
          <label className="self-start" htmlFor="tel">
            tel
          </label>
          <input
            onInput={handleTel}
            className=" border-2 border-black p-2 bg-white rounded-md
             appearance-none
             focus:outline-none focus:shadow-none focus:ring-0 focus:border-blue-900
             transition lg:w-full"
            type="tel"
            name="tel"
            id="tel"
          />
          <label className="self-start" htmlFor="email">
            email
          </label>
          <input
            onInput={handleEmail}
            className="border-2 border-black p-2 bg-white rounded-md
             appearance-none
             focus:outline-none focus:shadow-none focus:ring-0 focus:border-blue-900
             transition lg:w-full"
            type="email"
            name="email"
            id="email"
          />

          <label className="self-start" htmlFor="message">
            Contact with me
          </label>
          <textarea
            onInput={handleMessage}
            className="border-2 border-black p-2 bg-white rounded-md
             appearance-none
             focus:outline-none focus:shadow-none focus:ring-0 focus:border-blue-900
             transition lg:w-full resize-none"
            id="message"
            name="message"
            rows="5"
            cols="40"
            placeholder="Write message..."></textarea>
          <button
            disabled={btnDisabled}
            type="submit"
            className={
              "w-20 p-2 uppercase rounded-2xl font-bold bg-blue-400 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-600 transition duration-200"
            }>
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
