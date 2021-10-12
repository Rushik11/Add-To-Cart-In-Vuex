<template>
<div class="w-100 bg-dark">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ">
                        <router-link to="/login" class="navbar-brand" v-if="!user">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/registration" class="navbar-brand" v-if="!user">Registration</router-link>
                    </li>
                    <li class="nav-item" style="cursor: pointer;">
                        <a @click=" logout()" class="navbar-brand"  v-if="user">LogOut</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            user: localStorage.userinfo
        }
    },
    mounted() {
       

    },
    methods: {
        logout() {
            localStorage.removeItem("userinfo");
            this.$router.push("/login");
            window.location.reload();

        },
    },

}
</script>

<style>
nav a {
    color: white !important;
    
}
#nav{
    padding:0px 0px 25px 0px  !important;
}
</style>
