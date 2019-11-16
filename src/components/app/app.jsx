import React, {Component} from 'react';

import Header from '../header/header';
import AddItemForm from '../add-item-form/add-item-form';
import TodoList from '../todo-list/todo-list';
import Footer from '../footer/footer';

class App extends Component {

  state = {
    items: [
      {id: 1, label: 'drink coffee', done: false},
      {id: 2, label: 'code', done: false}
    ]
  }

  maxId = 2;

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

  render() {
    const {items} = this.state;
    const itemsCount = this.state.items.length;

    return <div className='app'>
      <Header />
      <AddItemForm onAddItem={this.onAddItem}/>
      <TodoList items={items} onToggleDone={this.onToggleDone} onDeleteItem={this.onDeleteItem}/>
      {itemsCount ? <Footer itemsCount={itemsCount} />: ``}
    </div>
  }
}

export default App;
