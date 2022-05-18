<template>
<div>
   <div class="container">
       <h1 class="text-left mb-3">Admin</h1>
        <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">No.</th>
                <th scope="col">User Name</th>
                <th scope="col">User Email</th>   
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <th scope="row">{{user.id}}</th>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>  
                <p>hiii</p>
            </tr>
        </tbody>
    </table>
   </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'admindata',
    data() {
        return {
            users:[]
        }
    },
   async mounted() {
        let result = await axios.get("http://localhost:3000/logindata");
        this.users=result.data
    },
}
</script>

<style>

</style>
