import {createStore} from "vuex";

export default createStore({
    state: {
        users: [
            {
                'id': 1, 
                'name':'Marvin',
                'phone':'0792859370',
                'email':'Marvinhavoc@gmail.com'
            }
        ]
    },

    mutations: {
        removeUser(state, id) {
            let users = state.users;

            let index = users.findIndex((user) => user.id === id);
            
            if(index !== -1) {
                users.splice(index, 1)

                state.users = users;    
            }
        },

        addUser(state, user) {
            state.users.push(user)
        },

        //implement updating user by id and change the email
    }

})