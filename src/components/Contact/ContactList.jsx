// Importing css
import style from "./Contacts.module.css";
import { useValues } from "../../contactContext";
import { Bars } from "react-loader-spinner";

// Contact List Component
export default function ContactList() {
  // Fetching context values
  const { data, isLoading ,deleteContact,setShowForm,setName,setEmail,setPhoneNumber,setShowContactList,editContact,setContact} = useValues();
  console.log("Inside Contact list");
  console.log(data);


  // Function to handle delete button onclick event
  const handleDeletion=(e,id)=>{
    e.preventDefault();//Prevent the page from refreshing
    deleteContact(id);
  }

  // Function to handle edit button onclick event
  const handleEdit=(e,contact)=>{
    setShowContactList(false);
    setShowForm(true); //Display the form on click of edit button
    e.preventDefault(); //Preventing the default action 
    setName(contact.name); //Setting the value for name field
    setEmail(contact.email); //Setting the value for email field
    setPhoneNumber(contact.phone); //Setting the value for phone number field
    setContact(contact);
  }

  return (
    <>
      <h1 className={style.head_primary}>My Contacts List</h1>
      <div className={style.parentContainer}>
        {/* Display the loading bar while the data is being fetched */}
        {isLoading ? (
          <div className={style.loadingState}>
            <Bars
              height="100"
              width="100"
              radius="10"
              color="blue"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
            // Table to display the contact list
          <table>
            {/* Table Heading */}
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
                {/* List of contacts */}
              {data.map((d, index) => (
                <tr key={index}>
                    {/* Contact Id */}
                  <td>{d.id}</td>
                  {/* Contact Name */}
                  <td>{d.name}</td>
                  {/* Contact Email */}
                  <td>{d.email}</td>
                  {/* Contact's Phone Number */}
                  <td>{d.phone}</td>
                  <td>
                    {/* Edit Button */}
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/8862/8862336.png"
                      alt="edit"
                      className={style.editBtn} onClick={(e)=>handleEdit(e,d)}
                    />
                  </td>
                  <td>
                    {/* Delete Button */}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6932/6932392.png"
                      alt="delete"
                      className={style.deleteBtn} onClick={(e)=>handleDeletion(e,d.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
