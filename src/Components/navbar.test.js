import { Navbar } from './Navbar'
import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()})



describe('navbar component', () => {
    const props = {
        isLogin: false
    }

    let wrapper 
    beforeEach(() => {
        wrapper = shallow(<Navbar/>)
    })
    it('should render 3 <Link to ... /> if it\'s not logedin', () => {
       expect(wrapper.find('Link')).toHaveLength(3)
    })

    it('should render 2 <Link/> if it\'s  logedin', () => {
        wrapper.setProps({isLogin: true})
        expect(wrapper.find('Link')).toHaveLength(2)
     })

     it('should render 1 button logout if it\'s  logedin', () => {
        wrapper.setProps({isLogin: true})
        expect(wrapper.contains(' <button className="btn btn-info my-2 my-sm-0 ml-3" onClick={this.signOut}>Logout</button>'))
     })

    
})