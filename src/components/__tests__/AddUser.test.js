import React from 'react';
import { shallow } from 'enzyme'
import * as UserContext from '../UserContext';
import AddUser from '../AddUser';



describe('SearchUser Component', () => {
    it('should mock the context and find the class name', () => {
        const contextValues = { users: [], usersData: [] };
        jest.spyOn(UserContext, 'useUserContext').mockImplementation(() => contextValues);
        const wrapper = shallow(<AddUser />);
        expect(wrapper.is('.addUser-container')).toBeTruthy();


    })
})