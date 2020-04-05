import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SearchUser from './components/SearchUser';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';

describe("App Component", () => {
    it('should render title', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toBe('Admin Management Tool (Powered by React.js )');
    });


    it('should render UserTable, SearchUser, AddUser, and DeleteUser', () => {
        const wrapper = shallow(<App />);
        const searchUser = wrapper.find(SearchUser);
        const userTable = wrapper.find(UserTable); 
        const addUser = wrapper.find(AddUser); 
        const deleteUser = wrapper.find(DeleteUser); 
        expect(searchUser.exists()).toBeTruthy();
        expect(userTable.exists()).toBeTruthy(); 
        expect(addUser.exists()).toBeTruthy();
        expect(deleteUser.exists()).toBeTruthy();
    });
});
