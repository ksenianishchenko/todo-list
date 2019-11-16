import React, {Component} from 'react';

import './add-item-form.scss';

class AddItemForm extends Component {

  state = {
    label: ''
  }

  onLabelChanged = (event) => {
    const label = event.target.value;
    this.setState({label});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({label: ``});
  }

  render() {
    return <form className='add-item-form' onSubmit={this.onSubmit}>
    <input
      id='formInput'
      className='add-item-form__input'
      type='text'
      placeholder='...what needs to be done?'
      onChange={this.onLabelChanged}
      value={this.state.label}/>

    <button
      type="submit"
      className="add-item-form__btn">Add</button>
  </form>}
};

export default AddItemForm;
