<template>
<div>
    <div class="container">
        <h2 class="text-bold">Update Data</h2>
        <form @submit.prevent="update" class="w-50 m-auto">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter Name" v-model="updateData.firstname" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Last Name" v-model="updateData.lastname" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="title" v-model="updateData.title" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary form-control">Update data</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from "axios";
import Vue from 'vue'


export default {
    name: "adddata",
    data() {
        return {
            updateData: {
                firstname: "",
                lastname: "",
                title: "",
            }
        };
    },
    methods: {
        async update() {
            let result = await axios.put("http://localhost:3000/user/" + this.$route.params.id  , {
                firstname:this.updateData.firstname,
                lastname:this.updateData.lastname,
                title:this.updateData.title,

            });
            if (result.status === 200) {
                this.$router.push({name:'Home'})
                Vue.toasted.show('Data successfully updated  !!');
            }

        }
    },
    async mounted() {
        let result = await axios.get("http://localhost:3000/user/" + this.$route.params.id);
        this.updateData = result.data
        console.log(result.data)
    },
};
</script>

<style>
</style>
