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

            <b-card header="Lesson 3"
                header-tag="header"
                title="Naming variables using camel case">
            <b-form-textarea id="textarea3" plaintext :value="lessonDetails"></b-form-textarea>
        </b-card>
          </b-col>

          <b-col class ="col-md-5 d-flex align-items-stretch">
            <b-card header="Pizza Creation Station"
                header-tag="header"
                title="Let's make a pizza!">
            <app-editor :code="code" @codeWasChanged="code = $event"></app-editor>
            </b-card>
          </b-col>

          <b-col class="col-md-4 d-flex align-items-stretch">
            <b-card header="Chef's Table"
                header-tag="header"
                title="Your Pizza">
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
        <h3>Lesson 3: Naming variables using camel case </h3>
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
      <b-btn class="mt-3" variant="outline-primary" block @click="showLessonDetails=!showLessonDetails">Ok, got it!</b-btn>
    </b-modal>
    <b-modal ref="myModalRef" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h3>Great job! </h3>
      </div>
      <b-btn class="mt-3" variant="outline-primary" block @click="changeLesson">Submit and show animation</b-btn>
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
  data() {
    return {
      code: ``,
      showAlert: false,
      showOnloadModal: true,
      answer: `varpepperoniPizza;`,
      value: 15,
      max: 100,
      showLessonDetails: true,
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
    appEditor: Editor,
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
  },
  watch: {
    code: function() {
      this.checkAnswer();
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
