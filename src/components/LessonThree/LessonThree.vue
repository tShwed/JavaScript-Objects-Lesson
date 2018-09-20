<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center">Lesson 3 of 20</h3>
      <b-progress height="20px" :value="value" :max="max"></b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>

        <b-col class="col-md-3 d-flex align-items-stretch">

            <b-card header="Naming variables using camel case"
                header-tag="header">
            <b-form-textarea style="width: 289px; height: 515px;" plaintext :value="lessonDetails"></b-form-textarea>
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
                      <b-list-group-item> 1: Give your variable the name 'pepperoni pizza' using camel case;</b-list-group-item>
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-container>
                  <div class="codemirror">
                    <codemirror v-model="code" :options="cmOption"></codemirror>
                  </div>
              <button class="btn btn-success btn-block" @click="checkAnswer">Ok! Check my code!</button>
            </b-card>
          </b-col>

          <b-col class="col-md-4 d-flex align-items-stretch">
            <b-card header="Chef's Table"
                header-tag="header">
            <div class="text-center parent">
              <img class="pizza" src="../../../pizza.jpg">
              <img class="cuttingboard" src="../../../cuttingboard.png">
              </div>
            </b-card>
          </b-col>

      </b-row>
    </b-container>

    <br>

<div>
  <b-modal v-model ="showLessonDetails" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Lesson 3: Naming variables using camel case </h4>
      </div>
    You’ve filled your variable with some data, awesome! Before we continue with filling our variables with other types of data, we should touch on how to properly name our variables.

    There are 4 things to remember when choosing names for our variables:

    You must give your variable a unique name. Two variables cannot have the same name in your program
    Variables are case sensitive. If I named one variable “PIZZA” and another variable “pizza”, these would be considered two different variables. You would never want to differentiate two variables only by upper and lower case, as this would make your program very confusing.
    There cannot be any spaces in your variables.
    You cannot make your variable a number. You can put numbers in your variable names, but they must be combined with letters. It is recommended not to use numbers in your variable names

    With these four rules in mind, we can properly name our variables.

    If we want to use more than two words to name our variables, we use a practice called camel case. Camel case is when you make your variable all one word and use uppercase letters when a new word begins. It is called camel case because it makes your variable names look like it has humps, like a camel. You always start your variable name with a lowercase letter Ex. Pepperoni pizza in camel case is pepperoniPizza

    We use camel case to make our variable names very clear for what they’re being used for and easy to read.

    Let’s fix the following variable names and write them in camel case
      <b-btn class="mt-3" variant="success" block @click="showLessonDetails=!showLessonDetails">Ok, got it!</b-btn>
    </b-modal>
    <b-modal ref="myModalRef" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Great job! </h4>
      </div>
      <b-btn class="mt-3" variant="success" block @click="changeLesson">Submit and show animation</b-btn>
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
  data() {
    return {
      code: ``,
      showAlert: false,
      showOnloadModal: true,
      answer: `varpepperoniPizza;`,
      value: 15,
      max: 100,
      showLessonDetails: true,
      cmOption: {
        styleActiveLine: false,
        lineNumbers: true,
        line: true,
      },
      errorMessage: '',
      lessonDetails: 'You’ve filled your variable with some data, awesome! Before we continue with filling our variables with other types of data, we should touch on how to properly name our variables.\n' +
        '\n' +
        '              There are 4 things to remember when choosing names for our variables:\n' +
        '\n' +
        '              You must give your variable a unique name. Two variables cannot have the same name in your program\n' +
        '              Variables are case sensitive. If I named one variable “PIZZA” and another variable “pizza”, these would be considered two different variables. You would never want to differentiate two variables only by upper and lower case, as this would make your program very confusing.\n' +
        '              There cannot be any spaces in your variables.\n' +
        '              You cannot make your variable a number. You can put numbers in your variable names, but they must be combined with letters. It is recommended not to use numbers in your variable names\n' +
        '\n' +
        '              With these four rules in mind, we can properly name our variables.\n' +
        '\n' +
        '              If we want to use more than two words to name our variables, we use a practice called camel case. Camel case is when you make your variable all one word and use uppercase letters when a new word begins. It is called camel case because it makes your variable names look like it has humps, like a camel. You always start your variable name with a lowercase letter Ex. Pepperoni pizza in camel case is pepperoniPizza\n' +
        '\n' +
        '              We use camel case to make our variable names very clear for what they’re being used for and easy to read.\n' +
        '\n' +
        '              Let’s fix the following variable names and write them in camel case\n' +
        '            '
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
    showError() {
      this.$refs.myErrorRef.show();
    },
    hideError() {
      this.$refs.myErrorRef.hide();
    },
    checkAnswer() {
      let myAnswer = this.code.split('');
      //removes spaces from code so that students won't get errors for spacing
      for(let i = 0; i < myAnswer.length; i++) {
        if (myAnswer[i] === ' ') {
          console.log(myAnswer)
          myAnswer.splice(i, 1);
        }
      }

      if(myAnswer.length > 17) {
        this.errorMessage = "Looks like you missed a few things. Make sure your code looks like this: var pepperoniPizza;"
      } else if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you either forgot to type 'var' or misspelled it, go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7]+myAnswer[8]+myAnswer[9]+myAnswer[10]+myAnswer[11] !== 'pepperoni') {
        this.errorMessage = "Looks like you forgot to type 'pepperoni' or misspelled it, go back and try again!";
      } else if (myAnswer[12]+myAnswer[13]+myAnswer[14]+myAnswer[15]+myAnswer[16] !== 'pizza') {
        this.errorMessage = "Looks like you forgot to type 'Pizza', misspelled it, or forgot to write pizza with a capital P, go back and try again!";
      } else if(myAnswer[17]!==';') {
        this.errorMessage = "Whoops, looks like you missed a semicolon (;), make sure to add one after the word 'pizza'!"
      } else if(myAnswer!== this.answer) {
        this.errorMessage = "Looks like you missed a few things. Make sure your code looks like this: var pepperoniPizza;"
      }

      myAnswer= myAnswer.join('');
      if(myAnswer == this.answer) {
        this.showModal();
      } else if (myAnswer !== this.answer){
        this.showError();
      }
    }
  }

}
</script>

<style>

.parent {
  position: relative;
  top: 0;
  left: 0;
}


.cuttingboard {
  width: 93%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
}

.pizza {
  position: absolute;
  margin-top: 70px;
  margin-left: 60px;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 0.5s;
    }
    .fade-leave-active {
        transition: opactiy 0.5s;
        opacity: 0;
    }
</style>
