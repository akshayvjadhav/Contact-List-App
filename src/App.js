// Importing necessary modules
import { ToastContainer } from "react-toastify";
import AddContact from "./components/Contact/AddContact_Form";
import ContactList from "./components/Contact/ContactList";
import Navbar from "./components/Navbar/Navbar";
import { useValues } from "./contactContext";

function App() {
  // Fetching the context values
  const{showForm,showContactList,theme}=useValues();

  return (
    <div className={theme==='light'?"light":"dark"}>
        <Navbar />
        <ToastContainer/>
        {showContactList&&<ContactList />}
        {showForm&&<AddContact />}
    </div>
  );
}

export default App;
