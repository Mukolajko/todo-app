import Vue from 'vue'
import Login from '@/components/login/LoginComponent'
import helpers from '../../../src/assets/js/helpers';

describe('Login.vue', () => {
  it('sets the correct default data properties', () => {
    expect(typeof Login.data).to.equal('function');
    const defaultData = Login.data();
    expect(defaultData.username).to.equal('');
  });
  it('have all required methods', () => {
    expect(typeof Login.methods).to.equal('object');
    const methods = Login.methods;
    expect(typeof methods.login).to.equal('function');
  });

  Object.defineProperty(Vue.prototype, 'helpers', { value: helpers });
  const Constructor = Vue.extend(Login);
  const vm = new Constructor().$mount();
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.block-login h3').textContent)
      .to.equal('Login to view or add TO-DOS');
    expect(vm.$el.querySelector('.block-login label').textContent)
      .to.equal('UserName');

   expect(vm.$el.querySelector('.block-login button').textContent)
      .to.equal('Log in');
  });
  it('should set up userName property when user types in input', () => {
    // set input value
    let input = vm.$el.querySelector('.block-login input');
    input.value = "Mykola";
    input.dispatchEvent(new Event('input'));
    expect(vm.$el.querySelector('.block-login input').value)
      .to.equal('Mykola');
    expect(vm.username).to.equal('Mykola');
  })
});
