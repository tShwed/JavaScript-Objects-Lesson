<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center"><img src="https://codemoji.com/images/white-logo.png" class="codemoji-logo"> Lesson 16 of 20</h3>
      <b-progress height="20px" :value="value" :max="max"></b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>

        <b-col class="col-md-3 d-flex align-items-stretch">

            <b-card header="Lesson Instructions"
                header-tag="header" style="min-width: 100%">
              <b-form-textarea plaintext style="width: 100%; height: 515px;" value="Just like arrays, we can access the information that we store in our object.

For this, we use dot notation. Dot notation allows us to access data from our object as long as we know the name of the property.

For example, if we want to access the cheese property in our pizza variable, we would say pizza.cheese

Let’s access the meat property from our object using dot notation

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
                        Create a variable called pizzaType<br><br>
                        Access the cheese property from our pizzas object using dot notation
                      </b-list-group-item>
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-container>
              <md-card>
                <md-card-media>
                  <div class="codemirror">
                    <codemirror v-model="code" :options="cmOption"></codemirror>
                  </div>
                </md-card-media>
              </md-card>
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
        <h4>Lesson 16: Accessing data from Objects</h4>
      </div>
    Just like arrays, we can access the information that we store in our object.

    For this, we use dot notation. Dot notation allows us to access data from our object as long as we know the name of the property.

    For example, if we want to access the cheese property in our pizza variable, we would say pizza.cheese

    Let’s access the cheese property from our object using dot notation

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
      answer: 'varpizza={};',
      value: 80,
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

        if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you either forgot to type 'var' or misspelled it, go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7]+myAnswer[8]+myAnswer[9]+myAnswer[10]+myAnswer[11] !== 'pizzaType') {
        this.errorMessage = "Looks like you forgot to type 'pizzaType' or misspelled it, go back and try again!";
      } else if (myAnswer[12]!=='=') {
        this.errorMessage = "Looks like you missed your equals sign after your variable name. Place one there and try again!"
      } else if(myAnswer[13]+myAnswer[14]+myAnswer[15]+myAnswer[16]+myAnswer[17]+myAnswer[18]!== 'pizzas') {
          this.errorMessage = "Remember, you're accessing the pizzas object. Try again!"
      } else if (myAnswer[19] !== '.') {
          this.errorMessage = "Put a . between the object you're trying to access and the property"
        }
        else if (myAnswer[20]+myAnswer[21]+myAnswer[22]+myAnswer[23]+myAnswer[24]+myAnswer[25] !== 'cheese') {
          this.errorMessage = "Remember, you're accessing the cheese property. Try again!"
        }
        else if (myAnswer[26] !== ';') {
          this.errorMessage = "Don't forget the semi colon!"
        }

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
