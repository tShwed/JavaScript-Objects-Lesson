<template>
  <div id="app">
    <b-container fluid>
      <h3 class="text-center">Lesson 4 of 20</h3>
      <b-progress height="20px" :value="value" :max="max"></b-progress>
    </b-container>
    <br>

    <b-container fluid>
      <b-row>

        <b-col class="col-md-3 d-flex align-items-stretch">

            <b-card header="Lesson 4"
                header-tag="header"
                title="Comments in JavaScript Code">
            <p class="card-text">As our code gets more complicated, it becomes harder to understand. This is why JavaScript lets us leave notes in our code that is ignored by our computer when it runs our programs. These notes are called Comments.

              Comments are notes that can be left in JavaScript for the purpose of explaining the code we wrote to other programmers who may be working with our code, or ourselves in the future if we have to work with the code in the future. It’s easy to forget why we wrote our code and what our programs do!

              To write a comment, simply type two backslashes ( // ) and type whatever comment you want into the code.

              Write a comment in the editor that says “// My first comment!”

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
        <h3>Lesson 4: Comments in JavaScript code </h3>
      </div>
    As our code gets more complicated, it becomes harder to understand. This is why JavaScript lets us leave notes in our code that is ignored by our computer when it runs our programs. These notes are called Comments.

    Comments are notes that can be left in JavaScript for the purpose of explaining the code we wrote to other programmers who may be working with our code, or ourselves in the future if we have to work with the code in the future. It’s easy to forget why we wrote our code and what our programs do!

    To write a comment, simply type two backslashes ( // ) and type whatever comment you want into the code.

    Write a comment in the editor that says “// My first comment!”

    <b-btn class="mt-3" variant="outline-primary" block @click="showLessonDetails=!showLessonDetails">Ok, got it!</b-btn>
    </b-modal>
    <b-modal ref="myModalRef" hide-footer title="Codemoji JavaScript">
      <div class="d-block text-center">
        <h3>Great job! </h3>
      </div>
      <b-btn class="mt-3" variant="outline-primary" block @click="changeLesson">Submit and go to next lesson</b-btn>
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
      answer: ``,
      value: 20,
      max: 100,
      showLessonDetails: true,
      errorMessage: ''
    }
  },
  components: {
    appEditor: Editor,
    appOutput: Output
  },
  methods: {
    changeLesson() {
      this.$refs.myModalRef.hide()
      this.$emit('lessonChanged')
    },
    showModal() {
      this.$refs.myModalRef.show()
    },
    hideModal() {
      this.$refs.myModalRef.hide()
    },
    showError() {
      this.$refs.myErrorRef.show();
    },
    hideError() {
      this.$refs.myErrorRef.hide();
    },
    checkAnswer() {
      this.showModal();
    },
  },
    watch: {
      code: function () {
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
