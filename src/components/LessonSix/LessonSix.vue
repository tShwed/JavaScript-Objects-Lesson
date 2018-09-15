<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center">Lesson 6 of 20</h3>
      <b-progress height="20px" :value="value" :max="max"></b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>

        <b-col class="col-md-3 d-flex align-items-stretch">

            <b-card header="Lesson 6"
                header-tag="header"
                title="Adding Numbers in Variables">
            <p class="card-text">Now that we’ve filled our pizza variable with a number, we can change it by using add (+), subtract (-), multiply(*), or divide (/).

              Let's start by adding two numbers together, like this;
              var add = 1+1;

              Add one more cheese pizza to the cheese pizza variable
            </p>
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
              <transition name="fade" mode="out-in">
                <img v-if="pizza" class="pizza" src="../../../pizza.jpg">
              </transition>
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
        <h3>Lesson 6: Adding Numbers in Variables</h3>
      </div>
    Now that we’ve filled our pizza variable with a number, we can change it by using add (+), subtract (-), multiply(*), or divide (/).

    Let's start by adding two numbers together, like this;
    var add = 1+1;

    Add one more cheese pizza to the cheese pizza variable

    <b-btn class="mt-3" variant="outline-primary" block @click="showLessonDetails=!showLessonDetails">Ok, got it!</b-btn>
    </b-modal>
    <b-modal ref="myModalRef" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h3>Great job! </h3>
      </div>
      <b-btn class="mt-3" variant="outline-primary" block @click="showPizza">Submit and show animation</b-btn>
    </b-modal>

    <b-modal ref="myErrorRef" hide-footer title="Codemoji Objects">
      <div class="d-block text-center">
        <h3>Hmm, that's not quite right</h3>
      </div>
      <p>{{ errorMessage }}</p>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideError">Let me try again!</b-btn>
    </b-modal>
<b-btn @click="changeLesson" variant="success">Next lesson</b-btn>
  <b-btn @click="resetCode" variant="error">Reset</b-btn>
  </div>

  </div>
</template>

<script>
import Editor from "./Editor";
import Output from "./Output";
export default {
  data() {
    return {
      code: `var cheesePizza = 1;`,
      showAlert: false,
      showOnloadModal: true,
      answer: `varcheesepizza=1+1;`,
      value: 30,
      max: 100,
      showLessonDetails: true,
      errorMessage: '',
      pizza: false
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
    resetCode () {
      this.code = 'var cheesePizza = 1;'
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

      if(myAnswer.length> 19) {
        this.errorMessage = "Looks like you missed a few things. Make sure your code looks like this: var cheesePizza = 1+1;"
      } else if (myAnswer[0]+myAnswer[1]+myAnswer[2] !== 'var') {
        this.errorMessage = "Looks like you either forgot to type 'var' or misspelled it, go back and try again!";
      } else if(myAnswer[3]+myAnswer[4]+myAnswer[5]+myAnswer[6]+myAnswer[7]+myAnswer[8] !== 'cheese') {
        this.errorMessage = "Looks like you forgot to type 'cheese' or misspelled it, go back and try again!";
      } else if(myAnswer[9]+myAnswer[10]+myAnswer[11]+myAnswer[12]+myAnswer[13] !== 'pizza') {
        this.errorMessage = "Looks like you forgot to type 'pizza' or misspelled it, go back and try again!";
      } else if (myAnswer[14]!=='=') {
        this.errorMessage = "Looks like you missed your equals sign after pizza. Place one there and try again!"
      } else if (myAnswer[15]+myAnswer[16]+myAnswer[17] !== "1+1") {
        this.errorMessage = "Looks like you either forgot to type 1+1 or mis-typed it. Try again!"
      } else if(myAnswer[18]!==';') {
        this.errorMessage = "Whoops, looks like you missed a semicolon (;), make sure to add one after the word 'pizza'!"
      } else if(myAnswer!== this.answer) {
        this.errorMessage = "Looks like you missed a few things. Make sure your code looks like this: var cheesePizza = 1+1;"
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
