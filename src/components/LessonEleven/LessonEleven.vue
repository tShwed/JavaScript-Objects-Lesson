<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center"><img src="https://codemoji.com/images/white-logo.png" class="codemoji-logo"> Lesson 11 of 17</h3>
      <b-progress>
        <b-progress-bar height="25px" :value="value" :max="max" variant="success" animated>{{value}}%</b-progress-bar>
      </b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>

        <b-col class="col-md-3 d-flex align-items-stretch">

            <b-card header="Lesson Instructions"
                header-tag="header" style="min-width: 100%">
              <b-form-textarea plaintext style="width: 100%; height: 515px;" value="Now we know how to use strings, awesome! We’re one step closer to creating pizza’s.

Another cool thing we can do with our strings is combine them together.

Let’s say we have multiple variables, each with separate strings like this:

Var hawaiian = “Hawaiian ”
Var pizza = “pizza”

We can combine these two strings to make a string “Hawaiian Pizza”. Remeber when you’re combining two strings, add a space between the two variables so it wont say “Hawaiianpizza”
Write it like this:

Var hPizza = hawaiian + ‘ ‘ +pizza

There are 4 variables that exist in this program:

Var iLove= “I love”
Var pep = “pepperoni pizza”
Var haw = “ hawaiian pizza”
Var cheese = “cheese pizza”

Your job is to combine iLove with one of the pizza variables.

Let's give it a try
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
                      <b-list-group-item style="font-size: 15px;">
                        1) Write a new variable called favoritePizza<br>
                        2) Combine the variable iLove with the variable that has your favorite of the three pizza's in it
                        (Remember: pep = pepperoni pizza, haw = hawaiian pizza, cheese = cheese pizza!)
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
                <transition name="fade" mode="out-in">
                  <img v-if="haw" class="pizza" src="../../../hawaiian.png">
                </transition>
                <transition name="fade" mode="out-in">
                  <img v-if="cheese" class="pizza" src="../../../cheese.png">
                </transition>

                <img class="cuttingboard" src="../../../cuttingboard.png">
              </div>
              <div class="card-footer">
                <b-btn v-if="pizza||cheese||haw" @click="changeLesson" variant="success" class="btn-block pulse-button">Next lesson <i class="fas fa-arrow-right"></i></b-btn>
              </div>
            </b-card>
          </b-col>

      </b-row>
    </b-container>


<div>
  <b-modal v-model ="showLessonDetails" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Lesson 11: Combining Strings</h4>
      </div>
    Now we know how to use strings, awesome! We’re one step closer to creating pizza’s.

    Another cool thing we can do with our strings is combine them together.

    Let’s say we have multiple variables, each with separate strings like this:

    Var hawaiian = “Hawaiian ”
    Var pizza = “pizza”

    We can combine these two strings to make a string “Hawaiian Pizza”. Remeber when you’re combining two strings, add a space between the two variables so it wont say “Hawaiianpizza”
    Write it like this:

    Var hPizza = hawaiian + ‘ ‘ +pizza

    There are 4 variables that exist in this program:

    Var iLove= “I love”
    Var pep = “pepperoni pizza”
    Var haw = “ hawaiian pizza”
    Var che = “cheese pizza”

    Your job is to combine iLove with one of the pizza variables.

    Let's give it a try

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
  <p style="color: white" v-if="showAnswer">Answer: var favouritePizza = iLove + ' ' +pep; OR che; OR haw;</p>
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
      answer: '',
      answer1: `varfavoritepizza=ilove+''+pep;`,
      answer2: `varfavoritepizza=ilove+''+che;`,
      answer3: `varfavoritepizza=ilove+''+haw;`,
      value: 67,
      max: 100,
      counter: 0,
      showLessonDetails: true,
      errorMessage: '',
      showAnswer: false,
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
      this.$ga.event('lessonChange', 'lessonChanged', 'finishLessonEleven', 11)
      this.$emit('lessonChanged')
    },
    resetCode () {
      this.code = ``
      this.errorMessage = ''
      this.$refs.resetRef.hide()
    },
    showPizza () {
      if (this.answer === this.answer1){
        this.pizza = true;
      } else if (this.answer === this.answer2) {
        this.cheese = true
      } else if (this.answer === this.answer3) {
        this.haw = true
      }
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
    },
    showReset() {
      this.$refs.resetRef.show()
    },
    hideReset() {
      this.$refs.resetRef.hide()
    },
    checkAnswer() {
      let myAnswer = this.code.toLowerCase().split('');
      //removes spaces from code so that students won't get errors for spacing
      for(let i = 0; i < myAnswer.length; i++) {
        if (myAnswer[i] === ' ') {
          console.log(myAnswer)
          myAnswer.splice(i, 1);
        }
      }

      let answerLength = myAnswer.length

        if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you either forgot to type 'var' or misspelled it, go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7]+myAnswer[8]+myAnswer[9]+myAnswer[10]+myAnswer[11]+myAnswer[12]+myAnswer[13]+myAnswer[14]+myAnswer[15] !== 'favoritepizza') {
        this.errorMessage = "Looks like you forgot to type 'favoritePizza' or misspelled it, go back and try again!";
      } else if (myAnswer[16]!=='=') {
        this.errorMessage = "Looks like you missed your equals sign after your variable name. Place one there and try again!"
      } else if(myAnswer[17]+myAnswer[18]+myAnswer[19]+myAnswer[20]+myAnswer[21] !== 'ilove') {
          this.errorMessage = "Dont forget the iLove variable!"
      } else if (myAnswer[22] !== '+') {
        this.errorMessage = "Looks like the first plus symbol. Add it and try again"
      } else if(myAnswer[23]+myAnswer[24]!== "''" && myAnswer[23]+myAnswer[24] !== '""') {
        this.errorMessage = "Don't forget to add a space between two quotation marks to separate your strings!"
      } else if(myAnswer[25] !== '+') {
        this.errorMessage = "Looks like you missed your second plus symbol. Add it and try again!"
      } else if(myAnswer[26]+ myAnswer[27]+myAnswer[28] !== 'pep' && myAnswer[26]+ myAnswer[27]+myAnswer[28] !== 'haw' &&  myAnswer[26]+ myAnswer[27]+myAnswer[28] !== 'che') {
        this.errorMessage = "Looks like you misspelled which pizza you'd like to say is your favorite, or forgot to add it. Try again!"
      } else if (myAnswer[29] !== ';') {
        this.errorMessage = "Don't forget the semicolon!"
      }

      if(myAnswer[26]+ myAnswer[27]+myAnswer[28] === 'pep') {
        this.answer = this.answer1
      } else if (myAnswer[26]+ myAnswer[27]+myAnswer[28] === 'che') {
        this.answer = this.answer2
      } else if (myAnswer[26]+ myAnswer[27]+myAnswer[28] === 'haw') {
        this.answer = this.answer3
      }
      myAnswer= myAnswer.join('');
      if(myAnswer === this.answer) {
        this.showModal();
      } else if (myAnswer !== this.answer){
        this.showError();
        this.counter++
        myAnswer=[]
      }
    }
  },
  watch: {
    counter() {
      if (this.counter === 7) {
        this.showAnswer = true
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
.pulse-button {
  position: relative;
  border: none;
  box-shadow: 0 0 0 0 green;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-animation: pulse 2s infinite cubic-bezier(0.3, 0, 0, 1);
  -moz-animation: pulse 2s infinite cubic-bezier(0.3, 0, 0, 1);
  -ms-animation: pulse 2s infinite cubic-bezier(0.3, 0, 0, 1);
  animation: pulse 2s infinite cubic-bezier(0.3, 0, 0, 1);
}
.pulse-button:hover {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  animation: none;
}

@-webkit-keyframes pulse {
  to {
    box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);
  }
}
@-moz-keyframes pulse {
  to {
    box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);
  }
}
@-ms-keyframes pulse {
  to {
    box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);
  }
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
