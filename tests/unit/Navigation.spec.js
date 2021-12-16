import { mount } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'
import Router from '@/router/index'

const router = Router;

let $store = {
  state: {
    isLoggedIn: false
  }
}

const mountOptions = {
  global: {
    mocks: {
      $store,
    },
    plugins: [router]
  }
}

describe('Navigation.vue', () => {
  let wrapper;

  it('renders a list item', () => {
    wrapper = mount(Navigation, mountOptions);

    expect(wrapper.find('li').exists()).toBe(true)
  });

  it("doesn't render a second list item if user is not logged in", () => {
    wrapper = mount(Navigation, mountOptions);

    expect(wrapper.findAll('li').length).toBe(1)
  });

  it("renders a second list item if user is logged in", () => {
    $store.state.isLoggedIn = true
    wrapper = mount(Navigation, mountOptions);

    expect(wrapper.findAll('li').length).toBe(2)
  });
})
