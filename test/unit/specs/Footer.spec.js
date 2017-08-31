import Vue from 'vue'
import Footer from '@/components/partials/Footer';

describe('Footer.vue', () => {
  const Constructor = Vue.extend(Footer);
  const vm = new Constructor().$mount();
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('p').textContent)
      .to.equal('This is footer. Copyright 2017');
  });
});
