<template>
    <div class="alert alert-warning" >
        <h3>Are u ready?</h3>
        <button class="btn btn-success" v-on:click="$emit('onStart')">Start</button>
    </div>

</template>

<script>
    export default {       
    }
</script>

<style scoped>
    .alert {
        text-align :center;
    }

    h3, btn {
        margin: 30px 0;
    }
</style>