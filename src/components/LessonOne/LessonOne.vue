<template>
  <div>
    <b-container fluid>
      <h3 class="text-center"><img src="https://codemoji.com/images/white-logo.png" class="codemoji-logo"> Lesson 1 of 20</h3>
      <b-progress>
        <b-progress-bar height="25px" :value="value" :max="max" variant="success">{{value}}%</b-progress-bar>
      </b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>
        <b-col class="col-md-3 d-flex align-items-stretch">
            <b-card header="What is a Variable?"
                header-tag="header">
            <b-form-textarea plaintext style="width: 289px; height: 515px;" value="Today we’re going to learn about how to store and use information in JavaScript! To teach you all about these concepts, you’re going to be a chef and create a pizza with the programming skills we teach you!

First, we’ll start with a Variable. A variable is a container used to store information in Javascript. You represent a variable with the keyword “Var”. Once we type the keyword “Var”, we can then name the container (or variable) anything we want!

              Let’s start by creating a Pizza variable. In the code editor (or Pizza creation station), type: 'var pizza;' without the quotation marks. Give it a try!"></b-form-textarea>
        </b-card>
          </b-col>

          <b-col class ="col-md-5 d-flex align-items-stretch">
            <b-card header="Chef Leo is here to help! Follow his instructions below!"
                header-tag="header">
                <b-container>
                  <b-row>
                    <b-col class="col-md-3"><img class="chef" src="../../../cartoonchef.png"></b-col>
                    <b-col class="col-md-9">
                      <b-list-group>
                        <b-list-group-item style="border: none"> Create a variable and name it pizza.<br><br> Your code should look like this: var pizza;<br><br> Don't forget the semicolon!</b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                </b-container>
                    <div class="codemirror">
                      <codemirror :value ="code" v-model="code" :options="cmOption"></codemirror>
                    </div>
              <div class="card-footer">
                <button class="btn btn-success btn-block" @click="checkAnswer">Ok! Check my code!</button>
              </div>
            </b-card>
          </b-col>

          <b-col class="col-md-4 d-flex align-items-stretch">
            <b-card header="Chef's Table"
                header-tag="header">
            <app-output></app-output>
            </b-card>
          </b-col>

      </b-row>
    </b-container>

    <br>

<div>
    <b-modal v-model ="showLessonDetails" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Lesson 1: What is a variable? </h4>
      </div>
      <p>Today we’re going to learn about how to store and use information in JavaScript! To teach you all about these concepts, you’re going to be a chef and create a pizza with the programming skills we teach you!<br>
<br>
First, we’ll start with a Variable. A variable is a container used to store information in Javascript. You represent a variable with the keyword “Var”. Once we type the keyword “Var”, we can then name the container (or variable) anything we want! <br><br>

Let’s start by creating a Pizza variable. In the code editor (or Pizza creation station), type: "var pizza;” without the quotation marks. Give it a try!</p>
      <b-btn class="mt-3" variant="success" block @click="showLessonDetails=!showLessonDetails">Ok, got it!</b-btn>
    </b-modal>
    <b-modal ref="myModalRef" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Great job! </h4>
      </div>
      <b-btn class="mt-3" variant="success" block @click="changeLesson">Submit and go to next lesson</b-btn>
    </b-modal>

    <b-modal ref="myErrorRef" hide-footer title="Codemoji Objects">
      <div class="d-block text-center">
        <h4>Hmm, that's not quite right</h4>
      </div>
      <p>{{ errorMessage }}</p>
      <b-btn class="mt-3" variant="danger" block @click="hideError">Let me try again!</b-btn>
    </b-modal>

  </div>

  </div>
</template>

<script>
  // language
  import 'codemirror/mode/javascript/javascript.js'
  // require active-line.js
  import'codemirror/addon/selection/active-line.js'
  import'codemirror/mode/clike/clike.js'
  import'codemirror/addon/comment/comment.js'
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
      cmOption: {
        styleActiveLine: false,
        lineNumbers: true,
        line: true,
      }
    }
  },
  components: {
    appOutput: Output
  },
  methods: {
    changeLesson () {
      this.$refs.myModalRef.hide()
      this.$emit('lessonChanged')
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
  mounted() {
    setTimeout(() => {
      this.styleSelectedText =  true,
        this.cmOption.styleActiveLine = true
    }, 1800)
  },

}
</script>

<style>
  .CodeMirror-focused .cm-matchhighlight {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: repeat-x;
    color: white;
    background-color: #444;
  }
  .cm-matchhighlight {background-color: lightgreen}
  .CodeMirror-selection-highlight-scrollbar {background-color: green}
  .chef {
    width: 75%;
  }
</style>



