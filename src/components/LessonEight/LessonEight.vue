<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center"><img src="https://codemoji.com/images/white-logo.png" class="codemoji-logo"> Lesson 8 of 17</h3>
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
            <p class="card-text">We've successfully added and subtracted two numbers in a variable! Now let's multiplying two numbers.

Let's start by multiplying two numbers, like this;
var multiply = 2*3;

Multiply your four pizzas by two
            </p>
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
                      <b-list-group-item> Multiply your pizza's by 2;</b-list-group-item>
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-container>
                  <div class="codemirror">
                    <codemirror v-model="code" :options="cmOption">{{code}}</codemirror>
                  </div>
              <button class="btn btn-success btn-block" @click="checkAnswer">Ok! Check my code!</button>
              <b-btn @click="showReset" block variant="danger">Reset</b-btn>
            </b-card>
          </b-col>

        <b-col class="col-md-4 d-flex align-items-stretch">
          <b-card header="Chef's Table"
                  header-tag="header"
                  style="min-width: 100%">
            <div class="text-center parent">
              <b-row style="display: flex; width: 90%">
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
              </b-row>
              <br>
              <br>
              <br>
              <br>
              <b-row style="display: flex; width: 90%" v-if="pizza">
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
                <transition name="fade" mode="out-in">
                  <b-col><img class="pizza" src="../../../pizza.jpg"></b-col>
                </transition>
              </b-row>
            </div>
            <div class="card-footer" style="margin-top: 350px">
              <b-btn v-if="pizza" @click="changeLesson" variant="success" class="btn-block pulse-button">Next lesson <i class="fas fa-arrow-right"></i></b-btn>
            </div>
          </b-card>
        </b-col>

      </b-row>
    </b-container>

    <br>

<div>
  <b-modal v-model ="showLessonDetails" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h4>Lesson 8: Multiply Numbers in Variables</h4>
      </div>
    We've successfully added and subtracted two numbers in a variable! Now let's multiplying two numbers.

    Let's start by multiplying two numbers, like this;
    var multiply = 2*3;

    Multiply your four pizzas by two

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
  import 'codemirror/mode/javascript/javascript.js'
  // require active-line.js
  import'codemirror/addon/selection/active-line.js'
  import'codemirror/mode/clike/clike.js'
  import'codemirror/addon/comment/comment.js'
  import Output from "./Output";
export default {
  data() {
    return {
      code: `var meatPizza = 4;`,
      showAlert: false,
      showOnloadModal: true,
      answer: `varmeatpizza=4*2;`,
      value: 48,
      max: 100,
      showLessonDetails: true,
      errorMessage: '',
      pizza: false,
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
      this.$ga.event('lessonChange', 'lessonChanged', 'finishLessonEight', 8)
      this.$emit('lessonChanged')
    },
    resetCode () {
      this.code = 'var meatPizza = 4;'
      this.errorMessage = ''
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

      if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you either forgot to type 'var' or misspelled it, go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6] !== 'meat') {
        this.errorMessage = "Looks like you forgot to type 'meat' or misspelled it, go back and try again!";
      } else if(myAnswer[7]+myAnswer[8]+myAnswer[9]+myAnswer[10]+myAnswer[11] !== 'Pizza') {
        this.errorMessage = "Looks like you forgot to type 'pizza' or misspelled it, go back and try again!";
      } else if (myAnswer[12]!=='=') {
        this.errorMessage = "Looks like you missed your equals sign after pizza. Place one there and try again!"
      } else if (myAnswer[13]+myAnswer[14]+myAnswer[15] !== "4*2") {
        this.errorMessage = "Looks like you either forgot to type 4*2 or mis-typed it. Try again!"
      } else if(myAnswer[16]!==';') {
        this.errorMessage = "Whoops, looks like you missed a semicolon (;), make sure to add one after the word 'pizza'!"
      }

      myAnswer= myAnswer.join('');
      if(this.errorMessage === '') {
        this.showModal();
      } else {
        this.showError();
        myAnswer=[]
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
  width: 80px;
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
</style>
