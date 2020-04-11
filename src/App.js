import React, { Component } from 'react';
import store from './store'
import {observer} from 'mobx-react'
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import TodoFooter from './components/TodoFooter'

@observer
class App extends Component {

  render(){
    return(
      <section className="todoapp">
        <TodoEntry></TodoEntry>
<TodoItems></TodoItems>
<TodoFooter></TodoFooter>
      </section>
    );
  }
}


export default App;
