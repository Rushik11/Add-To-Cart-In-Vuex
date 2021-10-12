<template>
<div>
   <div class="container">
        <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Id no.</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">title</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">{{user.id}}</th>
                <td>{{user.firstname}}</td>
                <td>{{user.lastname}}</td>
                <td>{{user.title}}</td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary back-btn" @click="homeBtn">Back</button>
   </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'fulldata',
    data() {
        return {
            user: {
                firstname: '',
                lastname: '',
                title: ''
            },

        };
    },
    async mounted() {
        let result = await axios.get("http://localhost:3000/user/" + this.$route.params.id);
        this.user = result.data
        console.log(this.user)

    },
    methods: {
          homeBtn(){
       this.$router.push({name:'Home'})
    }
    },
  
}
</script>

<style>
.container{
    position: relative;
}
    .back-btn{
        position: absolute;
        right: 11px;
    }
</style>
