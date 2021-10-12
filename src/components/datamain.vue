<template>
  <div>
    <div class="container">
      <div class="add-btn d-flex justify-content-between mb-4">
        <button class="btn btn-warning" @click="adddata">Add Data</button>
        <input
          type="text"
          class="form-control w-25 border-success"
          placeholder="Serch"
          @keyup="serch($event.target.value)"
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="users.length === 0">
            <td class="text-center" colspan="3">No Data Found</td>
          </tr>
          <tr v-for="(user, index) in users" :key="user.id" v-else>
            <td>{{ index + 1 }}</td>
            <td>{{ user.title }}</td>
            <td>
              <router-link
                :to="'/updateData/' + user.id"
                class="text-light btn btn-success"
                >Edit</router-link
              >
              &nbsp;
              <button class="btn btn-secondary" @click="fullData(user.id)">
                Full Data</button
              >&nbsp;
              <button class="btn btn-danger" @click="deleteData(user.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "datamain",

  data() {
    return {
      users: [],
    };
  },
  methods: {
    adddata() {
      this.$router.push({
        name: "adddata",
      });
    },
    fullData(id) {
      this.$router.push(`/fullData/${id}`);
    },
    deleteData(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let result = await axios.delete("http://localhost:3000/user/" + id);
          if (result.status == 200) {
            this.loded();
          }
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    async loded() {
      let result = await axios.get("http://localhost:3000/user");
      this.users = result.data;
    },
    async serch(value) {
      let result = await axios.get("http://localhost:3000/user");
      this.users = result.data.filter((items) =>
        items.title.toLowerCase().includes(value)
      );
    },
  },

  mounted() {
    this.loded();
  },
};
</script>

<style>
</style>
