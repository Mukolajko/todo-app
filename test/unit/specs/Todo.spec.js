import Vue from 'vue'
import Todo from '@/components/todo/ToDoComponent'
import helpers from '../../../src/assets/js/helpers';

describe('ToDO.vue', () => {
  it('sets the correct default data properties', () => {
    expect(typeof Todo.data).to.equal('function');
    const defaultData = Todo.data();
    expect(defaultData.user).to.equal('');
    expect(defaultData.activetodos.length).to.equal(0);
    expect(defaultData.completetodos.length).to.equal(0);
    expect(defaultData.showForm).to.equal(false);
    expect(defaultData.todoTitle).to.equal('');
  });
  it('have all required methods', () => {
    expect(typeof Todo.methods).to.equal('object');
    const methods = Todo.methods;
    expect(typeof methods.changeTodoStatus).to.equal('function');
    expect(typeof methods.addTodo).to.equal('function');
    expect(typeof methods.cancelTodo).to.equal('function');
  });

  //Object.defineProperty(Vue.prototype, 'helpers', { value: helpers });
  //const Constructor = Vue.extend(Todo);
  //const vm = new Constructor().$mount();
  /*it('should render correct contents', () => {
    expect(vm.$el.querySelectorAll('.todos_form div').length).to.equal(3);
    expect(vm.$el.querySelectorAll('.todos_form .todos').length).to.equal(2);
  });*/
});
