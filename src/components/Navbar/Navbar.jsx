// Importing css
import { useValues } from "../../contactContext";
import style from "./Navbar.module.css";

// Navbar component
export default function Navbar(){
    // Fetching values from context
    const {setShowContactList,setShowForm,toggleTheme}=useValues();

    // Function to handle onclick event of add contact button
    const handleAddBtnClick=()=>{
        setShowContactList(false);
        setShowForm(true);
    }

    // Function to handle click event on home icon
    const handleHomeIconClick=()=>{
        setShowForm(false);
        setShowContactList(true);
    }

    return(
        <>
        {/* Navigation Bar */}
        <div className={style.navbar}>
            {/* Home icon */}
            <div className={style.iconContainer} onClick={handleHomeIconClick}>
            <h1 className={style.iconTitle}>My-Contact-List</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/2885/2885526.png" className={style.iconImage}/>
            </div>
            <div className={style.secondaryContainer}>
            {/* Add contact form button */}
            <button className={style.addContactBtn} onClick={handleAddBtnClick}>Add Contact</button>
            <img src="https://cdn-icons-png.flaticon.com/128/15414/15414401.png" alt="Theme Icon" className={style.nav_themeIcon} onClick={toggleTheme}/>
            </div>
        </div>
        </>
    );
}