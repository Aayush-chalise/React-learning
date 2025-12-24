import { useState } from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useEffect } from "react";
const Form = () => {
  const { entries, setEntries } = useContext(MyContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [initialMinutes, setInitialMinutes] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isTimeSet, setIsTimeSet] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const sendEmailNotification = (email) => {
    console.log(`Sending email to ${email}: Your turn is coming soon.`);
    // Here you would integrate an actual email API like SendGrid, Nodemailer, etc.
  };
  const handleFormSubmit = () => {
    if (!name || !email) return;
    setIsFormSubmitted(true);
  };

  const addEntry = () => {
    if (!name || !email || !isTimeSet) return;
    const index = entries.length + 1;
    setEntries([
      ...entries,
      { name, email, time: index * parseInt(initialMinutes) * 60 },
    ]);
    setName("");
    setEmail("");
  };
  const setTimer = () => {
    if (!initialMinutes) return;
    setEntries([{ name, email, time: 1 * parseInt(initialMinutes) * 60 }]);
    setName("");
    setEmail("");
    setIsTimeSet(true);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setEntries((prevEntries) =>
        prevEntries.map((entry) => {
          if (entry.time === 120) {
            sendEmailNotification(entry.email);
          }
          return entry.time > 0 ? { ...entry, time: entry.time - 1 } : entry;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const nameRegex = /^[A-Za-z\s]+$/;

  const emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFormSubmit();
    }
  };

  return !isFormSubmitted ? (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          const inputText = e.target.value;
          setName(inputText);
          setIsNameValid(nameRegex.test(inputText) || inputText === "");
        }}
        className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-600"
      />

      {!isNameValid && (
        <p className="text-red-500">
          Invalid Name Format(Can only use letters)
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          const inputEmail = e.target.value;
          setEmail(inputEmail);
          setIsEmailValid(emailRegex.test(inputEmail) || inputEmail === "");
        }}
        className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-600"
      />
      {!isEmailValid && <p className="text-red-500">Invalid Email Format.</p>}

      <button
        onClick={handleFormSubmit}
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Submit
      </button>
    </div>
  ) : !isTimeSet ? (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-md">
      <input
        type="number"
        placeholder="Initial Minutes"
        value={initialMinutes}
        onChange={(e) => setInitialMinutes(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-600"
      />
      <button
        onClick={setTimer}
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Set Timer
      </button>
    </div>
  ) : (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-600"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-600"
      />
      <button
        onClick={addEntry}
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Add Entry
      </button>
    </div>
  );
};

export default Form;
