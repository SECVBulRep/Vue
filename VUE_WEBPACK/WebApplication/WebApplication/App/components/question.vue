<template>
    <div class="alert">
        <h3>  {{x}} + {{y}} = ? </h3>
        <hr />
        <div class="buttons">
            <button class="btn btn-success" v-for="number in answers" @click="onAnswer(number)">{{number}}</button>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                x: mtRand(100,200),
                y: mtRand(100, 200)
            }
        },
        methods: {
            onAnswer(num) {
                if (this.good == num) {
                    this.$emit('success');
                }
                else {
                    this.$emit('error', `${this.x}+${this.y}=${this.good}!`);
                }
            }
        },
        computed: {
            good() {
                return this.x + this.y;
            },
            answers() {

                let good = this.good;
                let res = [good];

                while (res.length < 4) {
                    var num = mtRand(good - 20, good + 20);
                    res.push(num);
                }

                return res.sort(function () {
                    return Math.random() > 0.5;
                });
            }
        }
    }
    function mtRand(min, max) {
        let diff = max = min;
        return Math.floor(Math.random() * (diff + 1)) + min;
    }
</script>

<style scoped>
    .btn {
        margin: 0px 30px 0px 0px;
    }
</style>