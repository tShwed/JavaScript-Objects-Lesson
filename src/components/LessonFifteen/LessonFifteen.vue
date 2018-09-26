<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center"><img src="https://codemoji.com/images/white-logo.png" class="codemoji-logo"> Lesson 15 of 20</h3>
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
              <b-form-textarea plaintext style="width: 100%; height: 515px;" value="Now that we’ve created our pizza object, we need to fill it with properties!

You can name properties whatever you like, and can assign a string, number, boolean or array to the property, but usually the names are related to whatever the purpose of the object is. Since we’re making pizza, we’re going to focus on creating a cheese and toppings property.

Properties INSIDE of an object look like this:

pizzaType: ‘deluxe’

We have the name of the property, a colon, then the data. If there is more than one property in an object, we must separate them with a comma like this:

pizzaType: ‘deluxe’,
Sauce: ‘tomato’

Now that we understand how to fill our pizza object with properties, let’s give our object a cheese and toppings property.

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
                        Create a variable called pizza as an object.<br>
                        Create a cheese property with a string 'mozzerella'<br>
                        Create a toppings property, set it to an array with a 'pepperoni' string inside
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
        <h4>Lesson 15: Properties in Objects</h4>
      </div>
    Now that we’ve created our pizza object, we need to fill it with properties!

    You can name properties whatever you like, and can assign a string, number, boolean or array to the property, but usually the names are related to whatever the purpose of the object is. Since we’re making pizza, we’re going to focus on creating a cheese and toppings property.

    Properties INSIDE of an object look like this:

    pizzaType: ‘deluxe’

    We have the name of the property, a colon, then the data. If there is more than one property in an object, we must separate them with a comma like this:

    pizzaType: ‘deluxe’,
    Sauce: ‘tomato’

    Now that we understand how to fill our pizza object with properties, let’s give our object a cheese and toppings property.

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
      answer: "varpizza={cheese:'mozzerella',toppings:['pepperoni']};",
      value: 75,
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
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7] !== 'pizza') {
        this.errorMessage = "Looks like you forgot to type 'pizza' or misspelled it, go back and try again!";
      } else if (myAnswer[8]!=='=') {
        this.errorMessage = "Looks like you missed your equals sign after your variable name. Place one there and try again!"
      } else if(myAnswer[9]!== '{') {
          this.errorMessage = "Looks like you missed your first curly brace, add it and try again!"
      } else if (myAnswer[10]+myAnswer[11]+myAnswer[12]+myAnswer[13]+myAnswer[14]+myAnswer[15] !== 'cheese') {
          this.errorMessage = "Looks like you misspelled the first property name: cheese. Go back and try again!"
        }
        else if(myAnswer[16] !== ':') {
          this.errorMessage = 'You forgot a colon after your cheese property, go back and try again!'
        }
        else if (myAnswer[17]+myAnswer[18]+myAnswer[19]+myAnswer[20]+myAnswer[21]+myAnswer[22]+myAnswer[23]+myAnswer[24]+myAnswer[25]+myAnswer[26]+myAnswer[27]+myAnswer[28] !== '"mozzerella"'&& myAnswer[17]+myAnswer[18]+myAnswer[19]+myAnswer[20]+myAnswer[21]+myAnswer[22]+myAnswer[23]+myAnswer[24]+myAnswer[25]+myAnswer[26]+myAnswer[27]+myAnswer[28] !== "'mozzerella'") {
          this.errorMessage = "Looks like you misspelled mozzerella, or forgot to make it a string. Surround the word mozzerella with either single or double quotation marks! "
        }
        else if(myAnswer[29] !== ',') {
          this.errorMessage = "Don't forget to put a comma after mozzerella to separate your properties!"
        }
        else if(myAnswer[30]+myAnswer[31]+myAnswer[32]+myAnswer[33]+myAnswer[34]+myAnswer[35]+myAnswer[36]+myAnswer[37] !== "toppings") {
          this.errorMessage = "Make sure you name your second property 'toppings' without the quotation marks"
        }
        else if(myAnswer[38] !== ':') {
          this.errorMessage = "Looks like you forgot the colon after your toppings property, go back and try again!"
        }
        else if(myAnswer[39]+myAnswer[40]+myAnswer[41]+myAnswer[42]+myAnswer[43]+myAnswer[44]+myAnswer[45]+myAnswer[46]+myAnswer[47]+myAnswer[48]+myAnswer[49]+myAnswer[50]+myAnswer[51] !== "['pepperoni']" && myAnswer[39]+myAnswer[40]+myAnswer[41]+myAnswer[42]+myAnswer[43]+myAnswer[44]+myAnswer[45]+myAnswer[46]+myAnswer[47]+myAnswer[48]+myAnswer[49]+myAnswer[50]+myAnswer[51] !== '["pepperoni"]') {
          this.errorMessage = "Make sure your toppings array has a string called pepperoni in it!"
        }
        else if(myAnswer[52] !== '}') {
          this.errorMessage = "Don't forget your closing curly brace!"
        }
        else if(myAnswer[53] !== ';') {
          this.errorMessage = "Don't forget your semi colon!"
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
