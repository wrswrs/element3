import Avatar from '../Avatar.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
export const IMAGE_SUCCESS =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFmklEQVR4Xu2ba2wUVRTH/2cWtlaooFQwKpr4CkESTQBNUAkodGeaKFGD2u6WGPyAmmAEEZmpj1VhBghE/KKGBIztDIXAByWBnQ1oQREfARNiDDHiF1+ooBiksVt295hFiqSdxx3KdmcH5uv+z+3//O65c19TwgX+0AWePy4CuFgBISCQ3J6+DFLuVQKmg2k4gK3xuvwr6+9e+Xe57YViCCRttY1ALX2S/asIPLRB1jvLCSEUAFK2egKgYf0T5a6TxdhtmxqXfl8uCBUHMHfP4rqeE0OOeyS4w5T1hsgCmLNTvaWYp299EpxoyvpX5YBQ8QpotlvvkMBfeCbHvMpUjOejCSCjPSYROrySY/B+SzYmRRJA0tZWEfCcJwBGz81yvDZN6eL5hlDxIZCyta8BTPBLjIv5sVbjyp/8dEF/ryiAlL3kJkD6TsQ0STS5vWHZPhFtEE1FAYiUf28yBaZ7OpRle4IkJ6KtGIDZexfU1hyv/QXASBGjBeYpHYrxmYg2iKZiAFIZdSGIVouaLVJx0obE8v2ielFdRQA83pkemc/lDgE0StRopF6CSVuzCGgWTb6ku7T+aHztpLUng8SIaAe9ApJ265MEflvE3P8a/t2UjTHBYsTUgwqgKauOk4p0gAhxMXunVcwfmYpxX6AYQfGgAWjqTNdL3bndRDRe0NsZGYPXWLKxIGiciH5QAJye8r4UWfE5mWbCE1ZCXy+SUFBN2QEo2+fXjKK6zSDcH9Rcr55i0vj2mUsPnmu8V1xZAZxKXhq+G6A7z9U8Mx+zFOOKc433iysbgNKYj3XnNoHoXj8T3r/z+6ZsPDiwNtyjHQE07dTGSAU8QkX4LlSY6Ndh9UfWnT1Ht2QXjeZifC8INw7UOAMfE2MgB6NdhaFo65ih/+bkxRFAMqPuIaK7xM3zu6ZszO3Vt2S1CcwobXPD8TAfoZjU6LSb7AdgWmd6yLW5nqArrm5T1mtDC+A/Y3tNWe/XqY4VkLK1fwBcItp9DGZLNqQwA2DmgiUbQ0Hgs/NyBpBRD4PoqigBKOWSGxuv2XxruscXQNJWDxJoXJQAMPCnJev9XuouQ0D9PMjcXQ1DAIx9pqJP7tupLrOAZhMhEaUKAGOjqehNYgBsdSOBHo0UAOBlU9ZfFwOQUd8honmRAsA8y1SMrWIAbHUFgRZHCUCe6LqNiWU/igHIaCoR9KgAYMZRS9GvFF4Kp7LqU2B6KzoAeKulGLOEASRtrZkAK0IAVEsxlgsDaM6ojRLRtqgAIImntTcYu4UBpLKtU8D8aRQAMJD/uSZeu2t6Oi8MILldHU8SfRMFAG67wN7cHFeCcz5svaZ4koWvosO9FGbdlI1Wt850BNCSXTSMOX4iEhVAaDAT+o5AAEriVEYrgHBmj+8FI7QVwJzLjei+fPOUN0rnG46P66FoMqMdIUK9SBWEGIDvjZIrgFRGOyR6qBlWAMzQLEU3vDrRvQJsdR+BJlZzBYh8VuM1BHYSQehCMpwVwF1mwqjrewYotBk69RK0tS0AHq7eChC7UPEYAto6As6c9VfdLED8tJkwfL9DcH8J2upqgBZWbwXgalPWD/v59wCgvQTgNb8GSr+H7x3AB0zZuF3EuyuA5oz6jET0pkgjYQPAzEstxSh1oO/jVQFzALzn20IIK0CKFa5vm7niBxHvHgsh9QEQfSDSSP8KWDSaOe54GyvS3sA0vMuUjemibbgPgWzrVInZ8RChb+N9AQSdRkXNiul4qikbn4hp4f5/g7N3vDAiXpCOEcj/IwpG0VT02Nl/9NSOshjvGMinMaJJ9OqYeYulGLODxHkml7TVZ8GYT0Q3uDfKXQxaY8n6i06aZnvJDGKaB8JMAo0IYk5UW7r5BbAtNhRz22YYf4jGlXT+vRuktSrUXgRQhZ12Xi1f8BXwL38cy1+mrtJNAAAAAElFTkSuQmCC'

export const IMAGE_FAIL = 'data:image/png;base64,fail'

describe('Avatar.props', () => {
  describe('icon', () => {
    it('should render props.icon', () => {
      const wrapper = mount(Avatar, {
        props: {
          icon: 'el-icon-eleme'
        }
      })

      expect(wrapper.find('i').classes()).toContain('el-icon-eleme')
    })
  })

  describe('size', () => {
    it('size is number', () => {
      const wrapper = mount(Avatar, {
        props: {
          size: 100
        }
      })

      expect(wrapper.find('span').element.style.width).toBe('100px')
      expect(wrapper.find('span').element.style.height).toBe('100px')
      expect(wrapper.find('span').element.style.lineHeight).toBe('100px')
    })

    it('size is string', () => {
      const wrapper = mount(Avatar, {
        props: {
          size: 'large'
        }
      })
      expect(wrapper.find('.el-avatar--large').exists()).toBe(true)
    })
  })
  describe('shape', () => {
    it('should render shape by props.shape', () => {
      const wrapper = mount(Avatar, {
        props: {
          shape: 'circle'
        }
      })
      expect(wrapper.find('.el-avatar--circle').exists()).toBe(true)
    })
  })

  describe('src', () => {
    it('should render image props.src', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: IMAGE_SUCCESS
        }
      })
      expect(wrapper.find('img').attributes('src')).toEqual(IMAGE_SUCCESS)
    })
  })
  describe('altSet', () => {
    it('should render  props.srcSet', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: IMAGE_SUCCESS,
          alt: 'girl',
          srcSet: 'big.jpg 1440w,middle.jpg 800w'
        }
      })
      expect(wrapper.find('img').attributes('srcset')).toEqual(
        'big.jpg 1440w,middle.jpg 800w'
      )
    })
  })
  describe('alt', () => {
    it('should render  props.alt', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: IMAGE_SUCCESS,
          alt: 'girl'
        }
      })
      expect(wrapper.find('img').attributes('alt')).toEqual('girl')
    })
  })

  describe('fit', () => {
    it('should render  props.fit', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: IMAGE_SUCCESS,
          fit: 'contain'
        }
      })
      expect(wrapper.find('img').attributes('style')).toContain(
        `object-fit: contain`
      )
    })
  })

  describe('error', () => {
    it.skip('image load faild should render solt', async () => {
      const wrapper = mount(Avatar, {
        props: {
          src: ''
        },
        slots: {
          default: () => {
            return `failed`
          }
        }
      })
      wrapper.find('img').trigger('error')
      await nextTick()
      expect(wrapper.find('span').text()).toEqual(`failed`)
    })
  })
  describe('solt', () => {
    it('should render  props.solt', () => {
      const wrapper = mount(Avatar, {
        slots: {
          default: () => {
            return '<span>default slot</span>'
          }
        }
      })
      expect(wrapper.find('span').text()).toEqual(`<span>default slot</span>`)
    })
  })
})
