// Importing necessary modules
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Creating context
const contactContext = createContext();

// Custom hook for easy access of context values
const useValues = () => {
  const value = useContext(contactContext);
  return value;
};

// Custom context provider function
function CustomContextProvider({ children }) {
  // State for theme management
  const [theme, setTheme] = useState("light");
  // State to store the data fetched from the api
  const [data, setData] = useState([]);
  // State to show loading while the data is being fetched
  const [isLoading, setIsLoading] = useState(true);
  // State to manage the add contact form
  const [showForm, setShowForm] = useState(false);
  // State to manage the contact list display
  const [showContactList, setShowContactList] = useState(true);
  // State to handle the deletion of a contact
  const [contact, setContact] = useState("");
  // State for contact name
  const [name, setName] = useState("");
  // State for contact email
  const [email, setEmail] = useState("");
  // State for contact phone number
  const [phoneNumber, setPhoneNumber] = useState("");

  // Fetching data from the api on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // Converting the response into json
        const res = await response.json();
        // Storing the data in the data array
        setData(res);
        // Set the loading state as false
        setIsLoading(false);
      } catch (error) {
        // Log error if something goes wrong
        console.log("Something went wrong");
      }
    };

    fetchData();
  }, []);


  // function that toggles the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Function to add new contact in the list
  const addContact = (name, email, phoneNumber) => {
    const newEntry = { id: data.length + 1, name, email, phone: phoneNumber };
    // Create a new array with the new contact added
    setData((prevData) => [...prevData, newEntry]);
    showToast("Contact created successfully 😃!!!", "success");
  };

  // Function to delete a contact
  const deleteContact = (id) => {
    const updatedData = data.filter((contact) => contact.id !== id);
    // Set the updated data
    setData(updatedData);
    // Display toast notification
    showToast("Contact deleted successfully 🤧", "success");
  };

  // Function to edit a contact
  const editContact = (id, name, email, phone) => {
    setData((prevData) => {
      const updatedData = prevData.map((contact) =>
        contact.id === id ? { ...contact, name, email, phone } : contact
      );
      return updatedData;
    });
    // Toast notification
    showToast("Contact Updated Successfully😁", "success");
  };

  // Helper function to display toast notifications
  const showToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
    });
  };

  return (
    <contactContext.Provider
      value={{
        data,
        isLoading,
        showForm,
        setShowForm,
        showContactList,
        setShowContactList,
        name,
        email,
        phoneNumber,
        setName,
        setEmail,
        setPhoneNumber,
        addContact,
        deleteContact,
        setContact,
        editContact,
        contact,
        theme,
        toggleTheme
      }}
    >
      {children}
    </contactContext.Provider>
  );
}

// Named export statement
export { useValues };

// Default export statement
export default CustomContextProvider;
