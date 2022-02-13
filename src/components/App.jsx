import React from "react";
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactList from "./ContactList";

class App extends React.Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Semen', number: '444-555' },
      { id: 'id-2', name: 'Petro', number: '444-555-222' }
    ],
    
  };
  
  contactId = nanoid();

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id!==idContact),
    }))
  }

  formSubmitHandler = data => {
    console.log(data);
 } 

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler}/>        
        
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>
      </div>
    )
  };

};

export default App;