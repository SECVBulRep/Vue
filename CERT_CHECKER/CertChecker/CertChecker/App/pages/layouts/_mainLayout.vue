<template>
    <body>
        <div id="wrapper" class="toggled">
            <div>
                <side-bar></side-bar>
                <div id="page-content-wrapper">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    import sideBar from '../../components/sidebar.vue';
    export default {
        components: {
            sideBar
        }
    }
</script>

<style src="../../assets/css/mainLayout.css" scoped>   
</style>