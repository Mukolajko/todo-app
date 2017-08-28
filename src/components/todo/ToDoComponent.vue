<template>
  <div>
    <div class="todos_form">
      <div class="text_right">
        <button v-on:click="showForm = !showForm">Add ToDO</button>
      </div>
      <div v-if="showForm" class="todo_form">
        <h3>Add To-Do</h3>
        <label for="newtodo">To-Do</label>
        <input type="text" id="newtodo" v-model="todoTitle"/>
        <button v-on:click="addTodo">Create</button>
        <button v-on:click="cancelTodo">Cancel</button>
      </div>
      <hr />
    </div>
    <div class="todos">
      <p>To Dos</p>
      <div v-for="(todo, index) in activetodos">
        <input type="checkbox" v-on:click="changeTodoStatus(todo.id, index, 'active', $event)">
        <span>{{todo.title}}</span>
      </div>
    </div>
    <div class="todos">
      <p>Completed</p>
      <div v-for="(todo, index) in completetodos">
        <input type="checkbox" checked="true" v-on:click="changeTodoStatus(todo.id, index, 'complete', $event)">
        <span>{{todo.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Todo",
    data () {
      return {
        user : "",
        activetodos : [],
        completetodos : [],
        showForm: false,
        todoTitle: ""
      }
    },
    methods: {
      changeTodoStatus(id, index, type, event) {
        event.preventDefault();
        //based on type get todo from correct array
        let todo = type == "active" ? this.activetodos.splice(index, 1).pop() : this.completetodos.splice(index, 1).pop();
        //change status;
        todo.completed = !todo.completed;
        //update in DB
        let todoURL = this.globals.url + this.globals.todosPath + id;
        this.http.Put(todoURL, todo)
          .then(response => {
            //if all ok push todo in correct data array
            if (response.status == 200) {
              type == "active" ? this.completetodos.push(todo) : this.activetodos.push(todo);
            }
            else {
              this.helpers.showErrorMessage("Error in save");
            }
          })
          .catch(err => {
            //this will be shown as API doesnt save new todos.
            this.helpers.showErrorMessage("Error in updating ToDo component");
          });
      },
      addTodo() {
        if (!this.todoTitle) {
          this.helpers.showErrorMessage("You must enter to-do title.");
          return;
        }
        let title = this.todoTitle;
        //reset input value
        this.todoTitle = '';
        //set up todo object and save
        let todo = {
          userId: this.user.id,
          title: title,
          completed: false
        };
        let todoURL = this.globals.url + this.globals.todosPath;
        this.http.Post(todoURL, todo)
          .then(response => {
            let newTodo = response.body;
            //if all ok push todo in array
            if (newTodo) {
              this.activetodos.push(newTodo);
            }
            else {
              this.helpers.showErrorMessage("API Error in creating todos");
            }
          })
          .catch(err => {
            this.helpers.showErrorMessage("Error in creating ToDo component");
          });
      },
      cancelTodo() {
        this.todoTitle = '';
        this.showForm = !this.showForm;
      }
    },
    beforeCreate() {
      if (!this.helpers.getSessionStorage("userName")) {
        //redirect to login
        window.location.href = "/";
      }
    },
    mounted() {
      this.user = this.helpers.parseJson(this.helpers.getSessionStorage("user")) || "";
      //after we get user we need to get his todos
      if (this.user) {
        let todoURL = this.globals.url + this.globals.todosPath + "?userId=" + this.user.id;
        this.http.Get(todoURL)
          .then(response => {
            let allTodos = response.body;
            //separate active and inactive todos
            this.activetodos = allTodos.filter(v => !v.completed);
            this.completetodos = allTodos.filter(v => v.completed);
          })
          .catch(err => {
            this.helpers.showErrorMessage("Error getting list of todos list");
          });
      }

    }
  }
</script>

<style scoped>
  @import "./ToDoComponent.css";
</style>
