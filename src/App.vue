<template>
  <div id="app">

      <div v-if="lessonOne" >
      <app-lesson-one :lessonOne="lessonOne" @lessonChanged="lessonOne=!lessonOne; lessonTwo=!lessonTwo"></app-lesson-one>
      </div>

      <div v-else-if="lessonTwo">
      <app-lesson-two :lessonTwo="lessonTwo" @lessonChanged="lessonTwo=!lessonTwo; lessonThree=!lessonThree"></app-lesson-two>
      </div>

      <div v-else-if="lessonThree">
        <app-lesson-three :lessonThree="lessonThree" @lessonChanged="lessonThree=!lessonThree; lessonFour=!lessonFour"></app-lesson-three>
      </div>

      <div v-else-if="lessonFour">
        <app-lesson-four :lessonFour="lessonFour" :secretMessage="secretMessage" @lessonChanged="lessonFour=!lessonFour; lessonFive=!lessonFive"></app-lesson-four>
      </div>

      <div v-else-if="lessonFive">
        <app-lesson-five :lessonFive="lessonFive" @lessonChanged="lessonFive=!lessonFive; lessonSix=!lessonSix" ></app-lesson-five>
      </div>

      <div v-else-if="lessonSix">
        <app-lesson-six :lessonSix="lessonSix" @lessonChanged="lessonSix=!lessonSix; lessonSeven=!lessonSeven"></app-lesson-six>
      </div>

      <div v-else-if="lessonSeven">
        <app-lesson-seven :lessonSeven="lessonSeven" @lessonChanged="lessonSeven=!lessonSeven; lessonEight=!lessonEight"></app-lesson-seven>
      </div>

      <div v-else-if="lessonEight">
        <app-lesson-eight :lessonEight="lessonEight" @lessonChanged="lessonEight=!lessonEight; lessonNine=!lessonNine"></app-lesson-eight>
      </div>

      <div v-else-if="lessonNine">
        <app-lesson-nine :lessonNine="lessonNine" @lessonChanged="lessonNine=!lessonNine; lessonTen=!lessonTen"></app-lesson-nine>
      </div>

      <div v-else-if="lessonTen">
        <app-lesson-ten :lessonTen="lessonTen" @lessonChanged="lessonTen=!lessonTen; lessonEleven=!lessonEleven"></app-lesson-ten>
      </div>

      <div v-else-if="lessonEleven">
        <app-lesson-eleven :lessonEleven="lessonEleven" @lessonChanged="lessonEleven=!lessonEleven; lessonTwelve=!lessonTwelve"></app-lesson-eleven>
      </div>

      <div v-else-if="lessonTwelve">
        <app-lesson-twelve :lessonTwelve="lessonTwelve" @lessonChanged="lessonTwelve=!lessonTwelve; lessonThirteen=!lessonThirteen"></app-lesson-twelve>
      </div>

      <div v-else-if="lessonThirteen">
        <app-lesson-thirteen :lessonThirteen="lessonThirteen" @lessonChanged="lessonThirteen=!lessonThirteen; lessonFourteen=!lessonFourteen"></app-lesson-thirteen>
      </div>

      <div v-else-if="lessonFourteen">
        <app-lesson-fourteen :lessonFourteen="lessonFourteen" @lessonChanged="lessonFourteen=!lessonFourteen; lessonFifteen=!lessonFifteen "></app-lesson-fourteen>
      </div>

      <div v-else-if="lessonFifteen">
        <app-lesson-fifteen :lessonFifteen="lessonFifteen" @lessonChanged="lessonFifteen=!lessonFifteen; lessonSixteen=!lessonSixteen "></app-lesson-fifteen>
      </div>

      <div v-else-if="lessonSixteen">
        <app-lesson-sixteen :lessonFifteen="lessonSixteen" @lessonChanged="lessonSixteen=!lessonSixteen; lessonFifteen=!lessonFifteen "></app-lesson-sixteen>
      </div>
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
import LessonTen from './components/LessonTen/LessonTen'
import LessonEleven from './components/LessonEleven/LessonEleven'
import LessonTwelve from './components/LessonTwelve/LessonTwelve'
import LessonThirteen from './components/LessonThirteen/LessonThirteen'
import LessonFourteen from './components/LessonFourteen/LessonFourteen'
import LessonFifteen from './components/LessonFifteen/LessonFifteen'
import LessonSixteen from './components/LessonSixteen/LessonSixteen'
export default {
  data() {
    return {
      lessonOne: false,
      lessonTwo: false,
      lessonThree: false,
      lessonFour: false,
      lessonFive: false,
      lessonSix: false,
      lessonSeven: false,
      lessonEight: false,
      lessonNine: true,
      lessonTen: false,
      lessonEleven: false,
      lessonTwelve: false,
      lessonThirteen: false,
      lessonFourteen: false,
      lessonFifteen: false,
      lessonSixteen: false
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
    appLessonNine: LessonNine,
    appLessonTen: LessonTen,
    appLessonEleven: LessonEleven,
    appLessonTwelve: LessonTwelve,
    appLessonThirteen: LessonThirteen,
    appLessonFourteen: LessonFourteen,
    appLessonFifteen: LessonFifteen,
    appLessonSixteen: LessonSixteen
  },
  methods: {
    savePlace(a, b) {
      let place = window.localStorage.getItem(a)
      if(place === true) {

      }
    }
  },
  created() {
    window.localStorage.setItem('lessonOne', true)
    window.localStorage.setItem('lessonTwo', false)
    window.localStorage.setItem('lessonThree', false)
    window.localStorage.setItem('lessonFour', false)
    window.localStorage.setItem('lessonFive', false)
    window.localStorage.setItem('lessonSix', false)
    window.localStorage.setItem('lessonSeven', false)
    window.localStorage.setItem('lessonEight', false)
    window.localStorage.setItem('lessonNine', false)
    window.localStorage.setItem('lessonTen', false)
    window.localStorage.setItem('lessonEleven', false)
    window.localStorage.setItem('lessonTwelve', false)
    window.localStorage.setItem('lessonThirteen', false)
    window.localStorage.setItem('lessonFourteen', false)
    window.localStorage.setItem('lessonFifteen', false)
    window.localStorage.setItem('lessonSixteen', false)
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
    text-align: center;
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
    margin-top: 100px;
    width: 50%;
    float: right;
  }
</style>
