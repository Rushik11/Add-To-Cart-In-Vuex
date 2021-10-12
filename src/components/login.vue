<template>
  <div>
    <div class="container">
      <div class="card w-50 m-auto">
        <h4>Login user</h4>
        <div class="card-body">
          <form @submit.prevent="">
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
              <button @click="logindata()" class="btn btn-success form-control">
                Login
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
import Vue from "vue";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logindata() {
      if (this.email == "" || this.password == "") {
        return Vue.toasted.show("please enter field  !!");
      }

      let result = await axios.get(
        `http://localhost:3000/logindata?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        if (
          result.data[0].email == "A@g.com" &&
          result.data[0].password == "1234"
        ) {
          localStorage.setItem("userinfo", JSON.stringify(result.data[0]));
          this.$router.push({
            name: "adminData",
          });
          window.location.reload();
        } else {
          localStorage.setItem("userinfo", JSON.stringify(result.data[0]));
          this.$router.push({
            name: "Home",
          });
          Vue.toasted.show("Login successfully  ");
          window.location.reload();
        }
      } else {
        return Vue.toasted.show("please enter a valid details  !!");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("userinfo");
    if (user) {
      this.$router.push({
        name: "Home",
      });
    }
  },
};
</script>

<style></style>
