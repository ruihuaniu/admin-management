import React from 'react';
import {shallow} from 'enzyme'
import SearchUser from './SearchUser'
import * as UserContext  from './UserContext';



describe('SearchUser Component',()=>{
    it('should mock the context', ()=>{
        const contextValues ={ users:[{name:'Barton'}],usersData:[]};
        jest.spyOn(UserContext,'useUserContext').mockImplementation(()=>contextValues);
        const wrapper=shallow(<SearchUser/>);  
        const className = wrapper.find('.searchUser-container'); 
        expect(className.length).toBe(1);

        
    })
})