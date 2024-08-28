// Importing css
import { useValues } from "../../contactContext";
import style from "./Contacts.module.css";

// Contact Form Component
export default function AddContact() {
  // Fetching values from context
  const {
    name,
    email,
    phoneNumber,
    setName,
    setEmail,
    setPhoneNumber,
    addContact,
    contact,
    editContact,
    setContact,
    setShowForm,
    setShowContactList
  } = useValues();

  console.log("Contact Details", contact);
  // Handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (contact === "") {
      addContact(name, email, phoneNumber);
      // Clear the form fields after submission
      setName("");
      setEmail("");
      setPhoneNumber("");
      setShowContactList(true); //After successful submission of form show the Contact List component
      setShowForm(false);//After successful submission of form make the display as none for the Form component
    } else {
      editContact(contact.id, name, email, phoneNumber);
      // Clear the form fields after submission
      setName("");
      setEmail("");
      setPhoneNumber("");
      setContact("");
      setShowContactList(true); //After successful submission of form show the Contact List component
      setShowForm(false);//After successful submission of form make the display as none for the Form component
    }
  };

  return (
    <>
      <h1 className={style.head_primary}>Add New Contact</h1>
      {/* Contact Form */}
      <form className={style.contact_form} onSubmit={handleFormSubmission}>
        {/* Input field for name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* Input field for email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Input field for phone number */}
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        {/* Submit Button */}
        <button type="submit" className={style.submitBtn}>
          Submit
        </button>
      </form>
    </>
  );
}
