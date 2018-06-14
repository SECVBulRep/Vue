<template>
    <div class="training">
        <h1>Math training</h1>
        <hr />
        <app-start v-if="state=='start'" 
                   @onStart="onStart"></app-start>
        <app-question v-else-if="state=='question'" 
                      @success="onQuestionSuccess"
                      @error="onQuestionError"></app-question>
        <app-message v-else-if="state=='message'"
                     :type="messages.type"
                     :text="messages.text"
                     >
            
        </app-message>
        <app-result-screen v-else-if="state=='result'"></app-result-screen>
        <div v-else> unknown state</div>
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
                }
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
            }
        }
    }

</script> 

<style scoped>
    .training {
        max-width: 700px;
        margin: 20px auto;
    }
</style>