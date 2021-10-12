<template>
  <div>
    <div class="container">
      <h2 class="text-bold">ADD Data</h2>
      <form @submit.prevent="addData" class="w-50 m-auto">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
            v-model="firstName"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="lastName"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary form-control">add data</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "adddata",
  data() {
    return {
      firstName: "",
      lastName: "",
      title: "",
    };
  },
  methods: {
    async addData() {
      if (this.firstName == "" || this.lastName == "" || this.title == "") {
        return Vue.toasted.show("please enter field  !!");
      } else {
        let result = await axios.post("http://localhost:3000/user", {
          firstname: this.firstName,
          lastname: this.lastName,
          title: this.title,
        });
        Vue.toasted.show("Data successfully add !!");
        console.log(result.data);
      }
      (this.firstName = ""),
        (this.lastName = ""),
        (this.title = ""),
        this.$router.push("datamain");
    },
  },
};
</script>

<style>
</style>
