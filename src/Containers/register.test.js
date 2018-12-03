import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Register from './Register'
import Store from '../Store/Store'

configure({adapter: new Adapter()})

describe('login page', () => {
    const wrapper = mount(<Register store={Store}/>)
    it('should render form register', () => {
        expect(wrapper.find('input')).toHaveLength(3)
    })

    
})