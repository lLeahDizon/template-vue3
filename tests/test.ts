import { mount } from '@vue/test-utils';
import Hello from '../src/components/HelloWorld.vue';

describe('helloWord test', () => {
  test('props test', () => {
    const msg = '测试';
    const wrapper = mount(Hello, {
      props: {
        msg,
      },
    });
    expect(wrapper.html()).toContain(`<h1>${msg}</h1>`);
  });
});
