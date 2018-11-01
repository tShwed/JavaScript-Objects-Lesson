<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center"><img src="https://codemoji.com/images/white-logo.png" class="codemoji-logo"> Lesson 7 of 17</h3>
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
            <p class="card-text">We've successfully added two numbers in a variable! Now let's subtract two numbers.

Let's start by adding two numbers together, like this;
var subtract = 1-1;

Subtract three pepperoni pizza's from your pizza variable
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
                      <b-list-group-item> Subtract 3 pizzas from your variable;</b-list-group-item>
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-container>
                  <div class="codemirror">
                    <codemirror v-model="code" :options="cmOption">{{code}}</codemirror>
                  </div>
              <button class="btn btn-success btn-block" @click="checkAnswer">Ok! Check my code!</button>
              <b-btn @click="showReset" class="btn-block" variant="danger">Reset Code</b-btn>
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
              <b-row style="display: flex; width: 95%" v-if="!pizza">
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
        <h4>Lesson 7: Subtracting Numbers in Variables</h4>
      </div>
    We've successfully added two numbers in a variable! Now let's subtract two numbers.

    Let's start by adding two numbers together, like this;
    var subtract = 1-1;

    Subtract three pepperoni pizza's from your pizza variable

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
      code: `var pepperoniPizza = 7;`,
      showAlert: false,
      showOnloadModal: true,
      answer: `varpepperonipizza=7-3;`,
      value: 42,
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
      this.$ga.event({
        eventCategory: 'lessonChange',
        eventAction: 'action',
        eventLabel: 'nextLesson',
        eventValue: 8
      })
      this.$emit('lessonChanged')
    },
    resetCode () {
      this.code = 'var pepperoniPizza = 7;'
      this.errorMessage = ''
      this.$refs.resetRef.hide();
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
      this.$refs.resetRef.show();
    },
    hideReset() {
      this.$refs.resetRef.hide()
    },
    checkAnswer() {
      let potentialAnswer = this.code.toLowerCase().split('');
      let myAnswer =[]
      //removes spaces from code so that students won't get errors for spacing
      for(let i = 0; i < potentialAnswer.length; i++) {
        if (potentialAnswer[i] !== " "&& potentialAnswer[i] !== '\n') {
          myAnswer.push(potentialAnswer[i]);
        }
      }

      if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you either forgot to type 'var' or misspelled it, go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7]+myAnswer[8]+myAnswer[9]+myAnswer[10]+myAnswer[11] !== 'pepperoni') {
        this.errorMessage = "Looks like you forgot to type 'pepperoni' or misspelled it, go back and try again!";
      } else if(myAnswer[12]+myAnswer[13]+myAnswer[14]+myAnswer[15]+myAnswer[16] !== 'pizza') {
        this.errorMessage = "Looks like you forgot to type 'pizza' or misspelled it, go back and try again!";
      } else if (myAnswer[17]!=='=') {
        this.errorMessage = "Looks like you missed your equals sign after pizza. Place one there and try again!"
      } else if (myAnswer[18]+myAnswer[19]+myAnswer[20] !== "7-3") {
        this.errorMessage = "Looks like you either forgot to type 7-3 or mis-typed it. Try again!"
      } else if(myAnswer[21]!==';') {
        this.errorMessage = "Whoops, looks like you missed a semicolon (;), make sure to add one after the word 'pizza'!"
      }

      myAnswer= myAnswer.join('');
      if(this.errorMessage === '') {
        this.showModal();
      } else {
        this.showError();
        myAnswer = []
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
