<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center"><img src="https://codemoji.com/images/white-logo.png" class="codemoji-logo"> Lesson 12 of 20</h3>
      <b-progress height="20px" :value="value" :max="max"></b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>

        <b-col class="col-md-3 d-flex align-items-stretch">

            <b-card header="Lesson Instructions"
                header-tag="header" style="min-width: 100%">
              <b-form-textarea plaintext style="width: 100%; height: 515px;" value="We’ve made a ton of progress so far! We’ve learned how to manipulate different data types like strings and numbers.

Now we’re going to learn how to store lots of different types of information into one variable with something called an Array.

An array can store any number of strings or numbers. They are really useful for holding a lot of different data in one place. They are represented with square brackets, like this:

Var myArray = [];

You store multiple values in an array by separating them with commas, like this:

Var myArray = [“Hello”, 2, “You!”]

Let’s put the type of pizza we want and the number of pizza’s in an array.

Set a variable called myPizza and put a string called “pepperoni” and the number 1
"
></b-form-textarea>
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
                      <b-list-group-item>
                        1) Write a new variable called pizzaArray with an array<br>
                        2) Fill the array with a string called "pepperoni", the number 1, and set a boolean to true
                      </b-list-group-item>
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-container>
                  <div class="codemirror">
                    <codemirror v-model="code" :options="cmOption"></codemirror>
                  </div>
              <button class="btn btn-success btn-block" @click="checkAnswer">Ok! Check my code!</button>
              <b-btn @click="showReset" variant="danger" block>Reset</b-btn>
            </b-card>
          </b-col>

          <b-col class="col-md-4 d-flex align-items-stretch">
            <b-card header="Chef's Table"
                header-tag="header">
              <div class="text-center parent">
                <transition name="fade" mode="out-in">
                  <img v-if="pizza" class="pizza" src="../../../pizza.jpg">
                </transition>

                <img class="cuttingboard" src="../../../cuttingboard.png">
              </div>
              <div class="card-footer">
                <b-btn v-if="pizza" @click="changeLesson" variant="success" class="btn-block">Next lesson</b-btn>
              </div>
            </b-card>
          </b-col>

      </b-row>
    </b-container>


<div>
  <b-modal v-model ="showLessonDetails" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Lesson 12: Arrays</h4>
      </div>
    We’ve made a ton of progress so far! We’ve learned how to manipulate different data types like strings and numbers.

    Now we’re going to learn how to store lots of different types of information into one variable with something called an Array.

    An array can store any number of strings or numbers. They are really useful for holding a lot of different data in one place. They are represented with square brackets, like this:

    Var myArray = [];

    You store multiple values in an array by separating them with commas, like this:

    Var myArray = [“Hello”, 2, “You!”]

    Let’s put the type of pizza we want and the number of pizza’s in an array.

    Set a variable called pizzaArray and put a string called “pepperoni”, the second element as the number 1, and the third as a boolean set to true
    <b-btn class="mt-3" variant="success" block @click="showLessonDetails=!showLessonDetails">Ok, got it!</b-btn>
    </b-modal>
    <b-modal ref="myModalRef" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Great job! </h4>
      </div>
      <b-btn class="mt-3" variant="success" block @click="showPizza">Submit and show animation</b-btn>
    </b-modal>

    <b-modal ref="myErrorRef" hide-footer title="Codemoji Objects">
      <div class="d-block text-center">
        <h4>Hmm, that's not quite right</h4>
      </div>
      <p>{{ errorMessage }}</p>
      <b-btn class="mt-3" variant="danger" block @click="hideError">Let me try again!</b-btn>
    </b-modal>

  <b-modal ref="resetRef" hide-footer title="Codemoji Objects">
    <div class="d-block text-center">
      <h4>Are you sure you want to reset your code?</h4>
    </div>
    <b-row>
      <b-btn class="mt-3" variant="danger" block @click="resetCode"style="width: 50%">Yes, reset my code</b-btn>
      <b-btn class="mt-3" block variant="primary" style="width: 50%" @click="hideReset">No, let me keep trying!</b-btn>
    </b-row>
  </b-modal>
  </div>

  </div>
</template>

<script>
import Output from "./Output";
export default {
  data() {
    return {
      code: ``,
      showAlert: false,
      showOnloadModal: true,
      answer: 'varpizzaarray=["pepperoni",1,true];',
      value: 60,
      max: 100,
      showLessonDetails: true,
      errorMessage: '',
      pizza: false,
      cheese: false,
      haw: false,
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
    resetCode () {
      this.code = ``
      this.$refs.resetRef.hide()
    },
    showPizza () {
      this.pizza = true;
      this.$refs.myModalRef.hide();
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
      this.errorMessage = ''
    },
    showReset() {
      this.$refs.resetRef.show()
    },
    hideReset() {
      this.$refs.resetRef.hide()
    },
    checkAnswer() {
      let potentialAnswer = this.code.split('');
      let myAnswer =[]
      //removes spaces from code so that students won't get errors for spacing
      for(let i = 0; i < potentialAnswer.length; i++) {
        if (potentialAnswer[i] !== " "&& potentialAnswer[i] !== '\n') {
          myAnswer.push(potentialAnswer[i]);
        }
      }

      let answerLength = myAnswer.length

        if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you either forgot to type 'var' or misspelled it, go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7]+myAnswer[8]+myAnswer[9]+myAnswer[10]+myAnswer[11]+myAnswer[12] !== 'pizzaArray') {
        this.errorMessage = "Looks like you forgot to type 'pizzaArray' or misspelled it, go back and try again!";
      } else if (myAnswer[13]!=='=') {
        this.errorMessage = "Looks like you missed your equals sign after your variable name. Place one there and try again!"
      } else if(myAnswer[14]!== '[') {
          this.errorMessage = "Looks like you forgot your first square bracket. Go back and add one! (Remember, this is a square bracket: ["
      } else if (myAnswer[15]+myAnswer[16]+myAnswer[17]+myAnswer[18]+myAnswer[19]+myAnswer[20]+myAnswer[21]+myAnswer[22]+myAnswer[23]+myAnswer[24]+myAnswer[25] !== '"pepperoni"'&& myAnswer[15]+myAnswer[16]+myAnswer[17]+myAnswer[18]+myAnswer[19]+myAnswer[20]+myAnswer[21]+myAnswer[22]+myAnswer[23]+myAnswer[24]+myAnswer[25] !== "'pepperoni'") {
        this.errorMessage = "Looks like you misspelled pepperoni, or forgot to make it a string. Surround the word pepperoni with either single or double quotation marks! "
      } else if(myAnswer[26]!== ",") {
        this.errorMessage = "Elements in an array are separated by comma's. Looks like you forgot the first one. Add it and try again! "
      } else if(myAnswer[27] !== '1') {
        this.errorMessage = "Remember to set the second element to the number 1!"
      } else if(myAnswer[28] !== ',') {
        this.errorMessage = "Looks like you forgot your second comma between 1 and true, try again!"
      } else if (myAnswer[29]+myAnswer[30]+myAnswer[31]+myAnswer[32] !== 'true') {
        this.errorMessage = "Don't forget to set the third element in the array to true. Try again!"
      } else if (myAnswer[33] !== ']') {
          this.errorMessage = "Looks like you forgot your closing square bracket, try again! Remember, a closing square bracket looks like this: ]"
        }
        else if(myAnswer[34] !== ';') {
          this.errorMessage = "Don't forget your semi colon!"
        }
      console.log(myAnswer)
      myAnswer= myAnswer.join('');
      if(this.errorMessage === '') {
        this.showModal();
      } else {
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
.CodeMirror {
  height: 250px
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
.chef {
  width: 75%;
}
</style>
