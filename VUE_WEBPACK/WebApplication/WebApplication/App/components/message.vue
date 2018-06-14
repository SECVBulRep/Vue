<template>
    <div class="alert" :class="'alert-'+ type">
        <h2>{{ text }}</h2>
        <hr />
        <button class="btn btn-primary">
            Next
        </button> 
    </div>

</template>

<script>
    export default {
        props: ['type','text']
    }
</script>

<style scoped>
    .alert {
        text-align: center;
    }

    h3, btn {
        margin: 30px 0;
    }
</style>