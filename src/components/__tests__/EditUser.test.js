import React from 'react';
import { shallow } from 'enzyme'
import * as UserContext from '../UserContext';
import EditUser from '../EditUser';


describe('SearchUser Component', () => {
    it('should mock the context', () => {
        const contextValues = { users: [], usersData: [] };
        jest.spyOn(UserContext, 'useUserContext').mockImplementation(() => contextValues);
        const wrapper = shallow(<EditUser />);
        expect(wrapper.find('.editUser-container').length).toBe(1);


    })
})