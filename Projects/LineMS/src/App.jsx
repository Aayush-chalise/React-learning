import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import MyProvider from "./context/MyContextState";

export default function CountdownApp() {
  // const [entries, setEntries] = useState([]);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [initialMinutes, setInitialMinutes] = useState("");
  // const [isTimeSet, setIsTimeSet] = useState(false);
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // const sendEmailNotification = (email) => {
  //   console.log(`Sending email to ${email}: Your turn is coming soon.`);
  //   // Here you would integrate an actual email API like SendGrid, Nodemailer, etc.
  // };

  // const handleFormSubmit = () => {
  //   if (!name || !email) return;
  //   setIsFormSubmitted(true);
  // };

  // const setTimer = () => {
  //   if (!initialMinutes) return;
  //   setEntries([{ name, email, time: 1 * parseInt(initialMinutes) * 60 }]);
  //   setName("");
  //   setEmail("");
  //   setIsTimeSet(true);
  // };

  // const addEntry = () => {
  //   if (!name || !email || !isTimeSet) return;
  //   const index = entries.length + 1;
  //   setEntries([
  //     ...entries,
  //     { name, email, time: index * parseInt(initialMinutes) * 60 },
  //   ]);
  //   setName("");
  //   setEmail("");
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setEntries((prevEntries) =>
  //       prevEntries.map((entry) => {
  //         if (entry.time === 120) {
  //           sendEmailNotification(entry.email);
  //         }
  //         return entry.time > 0 ? { ...entry, time: entry.time - 1 } : entry;
  //       })
  //     );
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <MyProvider>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-5">
        <Header />
        <Form />
        {/* {!isFormSubmitted ? (
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
      )} */}
        <Result />
      </div>
    </MyProvider>
  );
}
