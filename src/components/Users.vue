<template>
    <div>
        <!-- {{users}} -->
    </div>

    <table border="1px">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>

        <tr v-for="user in users">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            <td>
                <button @click="deleteUser(user.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
    import {computed} from "vue";
    import {useStore} from "vuex";


    export default {
        name: 'Users',

        setup () {
            const store = useStore()

            let users = computed(function () {
                return store.state.users
            })

            function deleteUser (id) {
                store.commit('removeUser', id)
            }

            return {
                users,
                deleteUser
            }
            
        }
    }

</script>