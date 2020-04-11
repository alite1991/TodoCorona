import React,{ Component } from "react";
import TodoItem from './TodoItem'
import TodoStore from '../stores/TodoStore'
import {observer} from 'mobx-react'

@observer
class TodoItems extends Component{
    handleClick(filterText){
        
       TodoStore.showByFilter(filterText)
      
    }
render(){
   
    return (
        <footer class="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span class="todo-count"><strong>{TodoStore.todos.filter(x=>!x.completed).length}</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul class="filters">
            <li>
                <a class="selected" href="#/" onClick={()=>this.handleClick(-1)}>All</a>
            </li>
            <li>
                <a href="#/" onClick={()=>this.handleClick(false)}>Active</a>
            </li>
            <li>
                <a href="#/" onClick={()=>this.handleClick(true)}>Completed</a>
            </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ? --> */}
        <button class="clear-completed" onClick={()=>TodoStore.clearCompleted()}>Clear completed</button>
    </footer>




    )
}
}

export default TodoItems