import React from 'react';
import { shallow } from 'enzyme'
import UserTable from '../UserTable'
import * as UserContext from '../UserContext';


describe('UserTable Component', () => {
    it('should mock the context', () => {
        const contextValues = { users: [], usersData: [], selectedRow: [] };
        jest.spyOn(UserContext, 'useUserContext').mockImplementation(() => contextValues);
        const wrapper = shallow(<UserTable />);
        const className = wrapper.find('.userTable-container');
        expect(className.length).toBe(1);
    })




})