import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {
  const inputName = useRef();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      alert(`inputName is: ${inputName.current.value}`);
    }
  };
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [minutes, seconds, isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(1);
    setSeconds(0);
  };

  return (
    <section className="flex xl:flex-row flex-col items-center justify-evenly min-h-screen bg-gray-100 border-2 border-red-500 ">
      {/* first section */}
      <div className="border-2 border-black my-24">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl ">
          <h2 className="text-2xl font-semibold mb-4">User Form</h2>
          {submitted ? (
            <p className="text-green-600">Form submitted successfully!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  ref={inputName}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="border-2 border-black">
        <div className="flex  justify-center min-h-screen shadow-md  bg-white">
          <div className=" p-6 rounded-lg  w-96 text-center  ">
            {/* <p>{inputName.current.value}</p> */}
            {/* <h2 className="text-2xl font-semibold mb-4">Countdown Timer</h2>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              min="1"
            />
            <p className="text-3xl font-bold">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <button
              onClick={handleStart}
              className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Start
            </button>
            <button
              onClick={handleReset}
              className="w-full mt-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Reset
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
