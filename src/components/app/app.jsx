import React, {Component} from 'react';

import Header from '../header/header';
import AddItemForm from '../add-item-form/add-item-form';
import TodoList from '../todo-list/todo-list';
import Footer from '../footer/footer';

import './app.scss';

class App extends Component {

  state = {
    items: [
      {id: 1, label: 'drink coffee', done: false},
      {id: 2, label: 'code', done: false},
      {id: 3, label: 'studing', done: false},
      {id: 4, label: 'walking with dog', done: false}
    ],
    filter: 'all'
  }

  maxId = 4;

  createItem(label) {
    return {
      id: ++this.maxId,
      label,
      done: false
    };
  }

  onAddItem = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      return {items: [...state.items, item]};
    })
  }

  onToggleDone = (item) => {
      this.setState((state) => {
      const items = this.state.items;
      for( var i = 0; i < items.length; i++){
         if ( items[i].id === item.id) {
           item.done = true;
         }
      }

      return {items};
    })
  }

  onDeleteItem = (item) => {
    this.setState((state) => {
    const items = this.state.items;
    for( var i = 0; i < items.length; i++){
       if ( items[i].id === item.id) {
         items.splice(i, 1);
       }
    }

    return {items};
  })
  }

  onFilterChange = (label) => {
    this.setState({
      filter: label
    })
  }

  filterItems = (name) => {
    const items = this.state.items;
    switch(name) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => item.done === false);
      case 'completed':
        return items.filter((item) => item.done === true);
      default:
        return items;
    }
  }

  countItemLeft = (arr) => {
    const filteredArr = arr.filter((item) => item.done !== true);
    return filteredArr.length;
  }

  render() {
    const items = this.state.items.length;
    const itemsCount = this.countItemLeft(this.state.items);
    const visibleItems = this.filterItems(this.state.filter);

    return <div className='app'>
      <div className='app__container'>
        <Header />
        <AddItemForm onAddItem={this.onAddItem}/>
        <TodoList items={visibleItems} onToggleDone={this.onToggleDone} onDeleteItem={this.onDeleteItem}/>
        {items ? <Footer itemsCount={itemsCount} onFilterChange={this.onFilterChange} /> : ``}
      </div>
    </div>
  }
}

export default App;
