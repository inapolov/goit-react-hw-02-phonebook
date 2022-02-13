import React from "react";

class Form extends React.Component{
    state = {
        name: '',
        number: ''
    }

    changeInput = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

    formSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);

        this.reset();
    };
    
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    };
    
    render() {
        return (
            <form onSubmit={this.formSubmit}>
          <label>
            Name
              <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name}
                  onChange={this.changeInput}
              />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.changeInput}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        );
    }
}

export default Form;