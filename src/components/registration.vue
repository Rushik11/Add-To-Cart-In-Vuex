<template>
  <div>
    <div class="container">
      <div class="card w-50 m-auto">
        <h4>Register user</h4>
        <div class="card-body">
          <form @submit.prevent="">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <button @click="adddata()" class="btn btn-success form-control">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue'

export default {
  name: "registration",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async adddata() {
      if (this.name == "" || this.email == "" || this.password == "") {
         return  Vue.toasted.show('please enter field  !!');
      } else {
        let result = await axios.post("http://localhost:3000/logindata", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if (result.status == 201) {
        this.$router.push({ name: "login" });
        Vue.toasted.show('Register successfully  ');
      }
        
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("userinfo");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
.card {
  border: none !important;
}
</style>
