import { mount } from '@vue/test-utils'
import PilotCard from '@/components/PilotCard.vue'

describe('PilotCard.vue', () => {
    let wrapper;
    let pilot = {
      id: 1,
      name: 'test'
    }
  
    beforeEach(() => {
      wrapper = mount(PilotCard, {
        data() {
          return {
            hover: false
          }
        },
        props: {
          pilot: pilot
        }
      });
    })

    it('renders a thumbnail', () => {
      expect(wrapper.find('.thumb-photo').exists()).toBe(true)
    });

    it('does not render a pilot card if mouse is not over the thumbnail', () => {
      expect(wrapper.find('.card').exists()).toBe(false)
    })

    it('renders a pilot card when mouse is over the thumbnail', () => {
      wrapper.find('.thumbnail').trigger('mouseover');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.card').exists()).toBe(true)
      })
    })

    it('renders pilot name in the card header', () => {
      wrapper.find('.thumbnail').trigger('mouseover');
      wrapper.vm.$nextTick(() => {
        const header = wrapper.find('h3')
        expect(header.text()).toContain('test')
      })
    })
  })