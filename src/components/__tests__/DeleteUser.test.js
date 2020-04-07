import React from 'react';
import { shallow } from 'enzyme'
import * as UserContext from '../UserContext';
import DeleteUser from '../DeleteUser';


describe('SearchUser Component', () => {
    it('should mock the context', () => {
        const contextValues = { users: [], usersData: [], selectedRow: [[]] };
        jest.spyOn(UserContext, 'useUserContext').mockImplementation(() => contextValues);
        const wrapper = shallow(<DeleteUser />);
        expect(wrapper.hasClass('deleteUser-container')).toBeTruthy();


    })
})