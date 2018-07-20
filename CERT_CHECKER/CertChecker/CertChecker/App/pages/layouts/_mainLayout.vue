<template>
    <div>
        <side-bar></side-bar>
        <div id="page-content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import sideBar from '../../components/sidebar.vue';
    export default {
        components: {
            sideBar
        }
    }
</script>

<style scoped>  
</style>