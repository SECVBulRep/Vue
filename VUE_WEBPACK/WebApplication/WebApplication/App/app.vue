<template>
    <div class="training">
        <h1>Math training</h1>
        <hr />
        <div class="box">
            <transition name="flip">

                <app-start v-if="state=='start'"
                           @onStart="onStart"></app-start>
                <app-question v-else-if="state=='question'"
                              @success="onQuestionSuccess"
                              @error="onQuestionError"></app-question>
                <app-message v-else-if="state=='message'"
                             :type="messages.type"
                             :text="messages.text"
                             @onNext="onNext">

                </app-message>
                <app-result-screen v-else-if="state=='result'"></app-result-screen>

                <div v-else> unknown state</div>
            </transition>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                state: 'start',
                messages: {
                    type: '',
                    text: ''
                },
                stats: {
                    success: 0,
                    error: 0
                }
            }
        },
        computed: {
            questDone() {
                return this.stats.success + this.stats.error;
            }
        },
        methods: {
            onStart() {
                this.state = 'question';
            },
            onQuestionSuccess() {
                this.state = 'message';
                this.messages.text = 'good job';
                this.messages.type = 'success';

            },
            onQuestionError(msg) {
                this.state = 'message';
                this.messages.text = msg;
                this.messages.type = 'warning';
            },
            onNext() {
                this.state = 'question';
            }
        }
    }

</script>

<style scoped>
    .training {
        max-width: 700px;
        margin: 20px auto;
    }

    .flip-enter {
    }

    .flip-enter-active {

    }
</style>