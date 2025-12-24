import { useContext } from "react";
import MyContext from "../context/MyContext";
const Result = () => {
  const { entries } = useContext(MyContext);
  return (
    <div className="mt-5 w-full max-w-md">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="bg-gray-800 p-3 rounded-lg shadow-lg mb-3 flex justify-between items-center"
        >
          <div>
            <h2 className="font-semibold">
              {index + 1}. {entry.name}
            </h2>
            <p className="text-sm text-gray-400">{entry.email}</p>
          </div>
          <div className="text-xl font-bold">
            {Math.floor(entry.time / 60)}:
            {(entry.time % 60).toString().padStart(2, "0")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
