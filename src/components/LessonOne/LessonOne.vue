<template>
  <div>

    <b-container fluid>
      <h3 class="text-center">Lesson 1 of 20</h3>
      <b-progress height="20px" :value="value" :max="max"></b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>

        <b-col class="col-md-3 d-flex align-items-stretch">
            <b-card header="Lesson 1"
                header-tag="header"
                title="What is a Variable?">
              You've found {{secretMessageCounter}}/3 letters for the secret message<br><br>
            <span class="card-text">Today we’re going to learn about how to store and use information <a @click="pushSecretMessageA" style="color: blue">i</a>n JavaScript! To teach you all about these concepts, you’re going to be a chef and create a pizza with the programming skills we teach you!<br>
<br>
First, we’ll start with a Variable. A variable is a <a @click="pushSecretMessageC" style="color: blue">c</a>ontainer used to store information in Javascript. You represent a variable with the keyword “Var”. Once we type the keyword “Var”, we can then name the container (or variable) anything we want! <br><br>

              Let’s start by creating a Pizza variable. In the code editor (or Pizza creation station), type: "var pizza;” without the quotation marks. Give it <a @click="pushSecretMessageI" style="color: blue">a</a> try!</span>
        </b-card>
          </b-col>

          <b-col class ="col-md-5 d-flex align-items-stretch">
            <b-card header="Pizza Creation Station"
                header-tag="header"
                title="Follow these insturctions and type your code in the editor below!">
            <app-editor :code="code" @codeWasChanged="code = $event"></app-editor>
            </b-card>
          </b-col>

          <b-col class="col-md-4 d-flex align-items-stretch">
            <b-card header="Chef's Table"
                header-tag="header"
                title="Your Pizza">
            <app-output></app-output>
            </b-card>
          </b-col>

      </b-row>
    </b-container>

    <br>

<div>
    <b-modal v-model ="showLessonDetails" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h3>Lesson 1: What is a variable? </h3>
      </div>
      <p>Today we’re going to learn about how to store and use information in JavaScript! To teach you all about these concepts, you’re going to be a chef and create a pizza with the programming skills we teach you!<br>
<br>
First, we’ll start with a Variable. A variable is a container used to store information in Javascript. You represent a variable with the keyword “Var”. Once we type the keyword “Var”, we can then name the container (or variable) anything we want! <br><br>

Let’s start by creating a Pizza variable. In the code editor (or Pizza creation station), type: "var pizza;” without the quotation marks. Give it a try!</p>
      <b-btn class="mt-3" variant="outline-primary" block @click="showLessonDetails=!showLessonDetails">Ok, got it!</b-btn>
    </b-modal>
    <b-modal ref="myModalRef" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h3>Great job! </h3>
      </div>
      <b-btn class="mt-3" variant="outline-primary" block @click="changeLesson">Submit and go to next lesson</b-btn>
    </b-modal>

    <b-modal ref="myErrorRef" hide-footer title="Codemoji Objects">
      <div class="d-block text-center">
        <h3>Hmm, that's not quite right</h3>
      </div>
      <p>{{ errorMessage }}</p>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideError">Let me try again!</b-btn>
    </b-modal>

  </div>

  </div>
</template>

<script>
import Editor from "./Editor";
import Output from "./Output";
export default {
  props: ['lessonOne'],
  data() {
    return {
      code: ``,
      showAlert: false,
      answer: `varpizza;`,
      value: 5,
      max: 100,
      showLessonDetails: true,
      errorMessage: '',
      infoHidden: false,
      secretMessage:[]
    }
  },
  components: {
    appEditor: Editor,
    appOutput: Output
  },
  methods: {
    changeLesson () {
      this.$refs.myModalRef.hide()
      this.$emit('lessonChanged')
    },
    pushSecretMessageA () {
      this.secretMessage.push('a')
      event.target.className += ' disabled'
    },
    pushSecretMessageC () {
      this.secretMessage.push('c')
      event.target.className += ' disabled'
    },
    pushSecretMessageI () {
      this.secretMessage.push('i')
      event.target.className += ' disabled'
    },
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    hideExplanation () {
      this.$refs.explanationRef.hide()
    },
    showError() {
      this.$refs.myErrorRef.show();
    },
    hideError() {
      this.$refs.myErrorRef.hide();
    },
    checkAnswer() {
      let myAnswer = this.code.toLowerCase().split('');
      //removes spaces from code so that students won't get errors for spacing
      for(let i = 0; i < myAnswer.length; i++) {
        if (myAnswer[i] == ' ') {
          myAnswer.splice(i, 1);
        }
      }

      if(myAnswer.length > 8) {
        this.errorMessage = "Looks like you missed a few things. Make sure your code looks like this: var pizza;"
      } else if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you misspelled 'var', go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7] !== 'pizza') {
        this.errorMessage = "Looks like you misspelled 'pizza', go back and try again!";
      } else if(myAnswer[8]!==';') {
        this.errorMessage = "Whoops, looks like you missed a semicolon (;), make sure to add one after the word 'pizza'!"
      }

      myAnswer= myAnswer.join('');

      if(myAnswer == this.answer) {
        this.showModal();
      } else if (myAnswer !== this.answer){
        this.showError();
      }
    }
  },
  computed:{
    secretMessageCounter() {
      return this.secretMessage.length
    }
  },
  watch: {
    code: function() {
      this.checkAnswer();
    }
  }

}
</script>

<style>
</style>



