<template>
  <div id="app">

      <!--<nav class="navbar navbar-light bg-light">-->
        <!--<a class="navbar-brand" href="#">-->
          <!--<img src="https://img.etsystatic.com/il/eda0e0/1343218232/il_570xN.1343218232_ct1b.jpg?version=0" width="30" height="30" class="d-inline-block align-top" alt="">-->
          <!--Codemoji-->
        <!--</a>-->
      <!--</nav>-->

      <div v-if="lessonOne" >
      <app-lesson-one :lessonOne="lessonOne" :secretMessage="secretMessage" @lessonChanged="lessonOne=!lessonOne; lessonTwo=!lessonTwo"></app-lesson-one>
      </div>
      <div v-else-if="lessonTwo">
      <app-lesson-two :lessonTwo="lessonTwo" :secretMessage="secretMessage" @lessonChanged="lessonTwo=!lessonTwo; lessonThree=!lessonThree"></app-lesson-two>
      </div>

      <div v-else-if="lessonThree">
        <app-lesson-three :lessonThree="lessonThree" :secretMessage="secretMessage" @lessonChanged="lessonThree=!lessonThree; lessonFour=!lessonFour"></app-lesson-three>
      </div>

      <div v-else-if="lessonFour">
        <app-lesson-four :lessonFour="lessonFour" :secretMessage="secretMessage" @lessonChanged="lessonFour=!lessonFour; lessonFive=!lessonFive"></app-lesson-four>
      </div>

      <div v-else-if="lessonFive">
        <app-lesson-five :lessonFive="lessonFive" :secretMessage="secretMessage" @lessonChanged="lessonFive=!lessonFive; lessonSix=!lessonSix" ></app-lesson-five>
      </div>

      <div v-else-if="lessonSix">
        <app-lesson-six :lessonSix="lessonSix" :secretMessage="secretMessage" @lessonChanged="lessonSix=!lessonSix; lessonSeven=!lessonSeven"></app-lesson-six>
      </div>

      <div v-else-if="lessonSeven">
        <app-lesson-seven :lessonSeven="lessonSeven" :secretMessage="secretMessage" @lessonChanged="lessonSeven=!lessonSeven; lessonEight=!lessonEight"></app-lesson-seven>
      </div>

      <div v-else-if="lessonEight">
        <app-lesson-eight :lessonEight="lessonEight" :secretMessage="secretMessage" @lessonChanged="lessonEight=!lessonEight; lessonNine=!lessonNine"></app-lesson-eight>
      </div>

      <div v-else-if="lessonNine">
        <app-lesson-nine :lessonNine="lessonNine" :secretMessage="secretMessage" @lessonChanged="lessonNine=!lessonNine"></app-lesson-nine>
      </div>
      <!-- <button class="btn btn-primary" @click="lessonOne=!lessonOne">Next Lesson</button> -->
  </div>
</template>

<script>
import LessonOne from "./components/LessonOne/LessonOne";
import LessonTwo from "./components/LessonTwo/LessonTwo";
import LessonThree from './components/LessonThree/LessonThree'
import LessonFour from './components/LessonFour/LessonFour'
import LessonFive from './components/LessonFive/LessonFive'
import LessonSix from './components/LessonSix/LessonSix'
import LessonSeven from './components/LessonSeven/LessonSeven'
import LessonEight from './components/LessonEight/LessonEight'
import LessonNine from './components/LessonNine/LessonNine'
export default {
  data() {
    return {
      secretMessage: [],
      secretMessageAnswer: 'ICanMakePizzaWithJavaScript!',
      lessonOne: true,
      lessonTwo: false,
      lessonThree: false,
      lessonFour: false,
      lessonFive: false,
      lessonSix: false,
      lessonSeven: false,
      lessonEight: false,
      lessonNine: false
    }
  },
  components: {
    appLessonOne: LessonOne,
    appLessonTwo: LessonTwo,
    appLessonThree: LessonThree,
    appLessonFour: LessonFour,
    appLessonFive: LessonFive,
    appLessonSix: LessonSix,
    appLessonSeven: LessonSeven,
    appLessonEight: LessonEight,
    appLessonNine: LessonNine
  },
  methods: {
    nextLesson() {
      this.lessonOne = false
      console.log(this.lessonOne)
    }
  }

}
</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #2371c0;
  }
  h3 {
    color: white;
  }
  .primary {
    background-color: #29ad48;
  }
  .card-header {
    background-color: #29ad48;
    color: white;
  }
  .card {
    border: none;
    max-height: 600px
  }
  .modal-header {
    background-color: #29ad48;
    color: white
  }
  .codemoji-logo {
    width: 17%
  }
  .card-footer {
    background-color: white;
    border: none;
    padding: 1px;
  }
</style>
