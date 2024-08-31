import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";

const Contact = ({ contact }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <FaUser className={css.icon} />
        <p className={css.contactName}>{contact.name}</p>
      </div>
      <div className={css.contactNumber}>
        <FaPhone className={css.icon} />
        <p>{contact.number}</p>
      </div>
    </div>
  );
};

export default Contact;
