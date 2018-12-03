import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Login from './Login'
import Store from '../Store/Store'

configure({adapter: new Adapter()})

describe('login page', () => {
    const wrapper = mount(<Login store={Store}/>)
    it('should render the form if not logedin', () => {
        expect(wrapper.find('input')).toHaveLength(2)
    })

    
})