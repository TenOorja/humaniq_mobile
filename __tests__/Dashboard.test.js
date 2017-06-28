/**
 * Created by root on 6/28/17.
 */
import {shallow} from 'enzyme'
import React, { Component } from 'react';
import Dashboard from '../src/components/Dashboard/Dashboard'
import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore()


describe('<Dashboard />', () => {
    const store = mockStore({})
    it('should render correcly', () => {
        const wrapper = shallow(<Dashboard store={store}/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.length).toBe(1)
    })
})