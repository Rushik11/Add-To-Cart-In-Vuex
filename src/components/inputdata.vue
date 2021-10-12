<template>
  <div>
    <div class="container w-7">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="title"
          v-model="title"

        />
      </div>
      <button class="btn btn-primary" @click="xyz(user.id)">Update</button>
      <!-- <div class="input-group mb-3 " >
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="enter email">
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "inputdata",
  data() {
    return {
      id: "",
      title: '',
    };
  },
  mounted() {
      this.title=this.user.title
      console.log(this.title)
  },
  methods: {
    xyz(id) {
      console.log(id);
    },
  },
  watch: {},

  props: {
    user: Object,
    users: Array,
  },
};
</script>

<style>
</style>
