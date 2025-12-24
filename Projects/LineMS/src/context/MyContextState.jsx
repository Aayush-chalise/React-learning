import MyContext from "./MyContext";
import { useState } from "react";
const MyProvider = ({ children }) => {
  // const sendEmailNotification = (email) => {
  //   console.log(`Sending email to ${email}: Your turn is coming soon.`);
  //   // Here you would integrate an actual email API like SendGrid, Nodemailer, etc.
  // };
  const [entries, setEntries] = useState([]);

  return (
    <MyContext.Provider
      value={{
        entries,
        setEntries,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
