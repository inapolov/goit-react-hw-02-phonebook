import React from "react";
import styles from './ContactList.module.css';

const ContactList = ({ contacts,onDeleteContact }) => (
    <ul>
        {contacts.map(contact => (
            <li key={contact.id} className={styles.item}>
                <p className={styles.contact}>{contact.name}: {contact.number}</p>
                <button onClick={()=>onDeleteContact(contact.id)} className={styles.button}>Delete</button>
                </li>
        ))}
        </ul>
);
    

export default ContactList;