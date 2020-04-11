import { observable, action } from "mobx";
import TodoModel from './TodoModel'

class TodoStore{
    constructor() {
        // Don't call this.setState() here!
       console.log('constructor')
       this.myList.forEach(element => 
        this.todos.push(new TodoModel(this,element.title,element.completed,element.id))
        );

       this.result=this.todos
      }
   @observable todos=[];

   myList=[
       {
           title:"شستن دست ها",
           id:100,
           completed:true
       },
       {
        title:"ماسک زدن",
        id:101,
        completed:false
    },
    {
        title:"در خانه ماندن #StayAtHome",
        id:102,
        completed:true
    }
    ,
    {
        title:"حفظ فاصله اجتماعی",
        id:103,
        completed:true
    }
   ]
 
    lastID=104
@observable result
   @action
   addTodo(title){
       this.todos.push(new TodoModel(this,title,false,this.lastID++))
   }

   @action
   showByFilter(filterText){
       this.result= this.todos.filter(t=>filterText==-1 || t.completed==filterText)
   }

   @action
   deleteByID(id){
       this.todos= this.todos.filter(t=>t.id!=id)
       this.result=this.todos
   }

   @action
   clearCompleted(){
       this.todos= this.todos.filter(t=>t.completed==false)
       this.result=this.todos
   }
   
}


const store=new TodoStore()
export default store