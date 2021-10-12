<template>
  <div class="home">
   
   <datamain />
  </div>
</template>

<script>
import Datamain from '../components/datamain.vue';



export default {
  name: 'Home',
  data() {
    return {
      x:''
    }
  },
  components: {
    Datamain

  },
  mounted() {
     if (localStorage.userinfo== null) {
             this.$router.push("/login");
        }    
  },
}
</script>
