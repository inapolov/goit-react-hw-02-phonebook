import React from "react";
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactList from "./ContactList";
import Filter from "./Filter";

class App extends React.Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:''
  };
  
  
  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id!==idContact),
    }))
  }

  // formSubmitHandler = data => {
    
  //   const contact = {
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   };  
    
  //   this.setState((prevState) => {      
  //     prevState.contacts.map(item => {
  //       if (contact.name === item.name) {
  //        return alert(`${item.name} is already in contacts.`);
          
  //       }          
  //     })      
    
  //     return {
  //       contacts: [contact, ...prevState.contacts],
  //     }
  //   });
  // }

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }; 

    for (const item of this.state.contacts) {
      if (item.name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${item.name} is already in contacts`);
        return;
      }
    }

    this.setState((prevState) => {     
      return {
        contacts: [contact, ...prevState.contacts],
      }
    });
  }

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
   };

  
  

  render() {

  const normalizedFilter = this.state.filter.toLocaleLowerCase();
  const filtredContacts = this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler}/>        
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact}/>
      </div>
    )
  };

};

export default App;