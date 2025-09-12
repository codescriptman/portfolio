import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = (props) => {
  const [text, setText] = useState();
  const [submit, setSubmit] = useState();

  //   useEffect(() => {
  //     const options = {
  //       method: "POST",
  //       url: "https://telegram-message-ac639ebe7878.herokuapp.com/text",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: { text: text },
  //     };
  //     axios
  //       .request(options)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, [submit]);

  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <section>
      <div className="container m-auto  pt-10 pl-5 pr-5  pb-5">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="message">Ваше сообщение:</label>
          <textarea
            onInput={handleInput}
            className="border"
            id="message"
            name="message"
            rows="5"
            cols="40"
            placeholder="Введите текст..."></textarea>
          <button type="submit" className="uppercase border">
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
