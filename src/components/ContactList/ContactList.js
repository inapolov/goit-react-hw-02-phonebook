import React from "react";

const ContactList = ({ contacts,onDeleteContact }) => (
    <ul>
        {contacts.map(contact => (
            <li key={contact.id}>
                <p>{contact.name}: {contact.number}</p>
                <button onClick={()=>onDeleteContact(contact.id)}>Delete</button>
                </li>
        ))}
        </ul>
);
    

export default ContactList;