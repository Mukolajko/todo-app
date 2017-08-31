import Vue from 'vue';
import helpers from '../../../src/assets/js/helpers';
import Header from '@/components/partials/Header';

describe('Header.vue', () => {
  Object.defineProperty(Vue.prototype, 'helpers', { value: helpers });
  const Constructor = Vue.extend(Header);
  const vm = new Constructor().$mount();

  it('sets the correct default data properties', () => {
    expect(typeof Header.data).to.equal('function');
  });

  it('have all required methods', () => {
    expect(typeof Header.methods).to.equal('object');
    const methods = Header.methods;
    expect(typeof methods.logout).to.equal('function');
  });

  it('should run logout', () => {
    expect(vm.logout()).to.equal(undefined);
  });

  it('should render correct contents', () => {
    expect(vm.$el.querySelectorAll('.header_container div').length).to.equal(2);
    expect(vm.$el.querySelectorAll('.header_container .left').length).to.equal(1);
    expect(vm.$el.querySelectorAll('.header_container .right').length).to.equal(1);
    expect(vm.$el.querySelector('.header_container .left img').src).to.equal('http://www.mpia.de/imprs-hd/pictures/Students/smiley.jpg');
    expect(vm.$el.querySelector('.header_container .right span').textContent).to.equal('');
    expect(vm.$el.querySelector('.header_container .right button').textContent).to.equal('Log Out');
  });
});
