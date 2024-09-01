import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "47de9fea-aa64-4060-aa63-24a2a25c767e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Form Submitted Successfully", result);
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("Something is wrong, Retry !", result);
    }
  };
  return (
    <>
      <div className="flex flex-col font-inter font-bold gap-5">
        <h1 className="text-xl lg:text-2xl font-poppins font-bold dark:text-darkTheme-textColor">
          Contact Me
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            className="py-2 px-4 border-4 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            className="py-2 px-4 border-4 rounded-lg"
          />
          <textarea
            name="message"
            required
            placeholder="Enter your message to sd535682@gmail.com"
            className="py-2 px-4 border-4 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-gray-200 p-4 rounded-lg text-sm font-bold"
          >
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
}
