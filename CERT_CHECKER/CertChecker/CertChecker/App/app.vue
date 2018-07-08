<template>
    <div>
        <div v-if="$route.meta.layout == '_authLayout'">
            <auth-layout></auth-layout>
        </div>
        <div v-else-if="$route.meta.layout == '_mainLayout'">
            <main-layout></main-layout>
        </div>
        <div v-else>
            <main-layout></main-layout>
        </div>
    </div>
</template>
<script>   
    import { router } from './app';
    import mainLayout from '../App/pages/layouts/_mainLayout'
    import authLayout from '../App/pages/layouts/_authLayout';
    
    export default {
        data() {
            return {
                currentRoute: router.currentRoute.path,              
            }
        },
        components: {
            mainLayout,
            authLayout
        }
        , watch: {
            '$route'(to, from) {
                console.log('to.path = ', to.path);
                console.log('from.path = ', from.path);            
                this.currentRoute = to.path
            }
        }
    };
</script>
<style scoped>
</style>