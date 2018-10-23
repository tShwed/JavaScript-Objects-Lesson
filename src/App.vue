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
        <app-lesson-sixteen :lessonFifteen="lessonSixteen" @lessonChanged="lessonSixteen=!lessonSixteen; congrats=!congrats "></app-lesson-sixteen>
      </div>

      <div v-else-if="congrats">
        <app-congrats></app-congrats>
      </div>
    <b-btn variant="danger" @click="showHardReset">Reset</b-btn>
    <b-modal ref="hardResetRef" hide-footer title="Codemoji Objects">
      <div class="d-block text-center">
        <h4>WARNING: THIS WILL ERASE YOUR PROGRESS</h4>
      </div>
        <b-btn class="mt-3" variant="danger" block @click="hardReset">Yes, bring me back to lesson one!</b-btn>
        <b-btn class="mt-3" block variant="primary" @click="hideHardReset">No, I want to keep my progress!</b-btn>
    </b-modal>
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
import Congrats from './components/Congrats'
export default {
  data() {
    return {
      lessonOne: true,
      lessonTwo: false,
      lessonThree: false,
      lessonFour: false,
      lessonFive: false,
      lessonSix: false,
      lessonSeven: false,
      lessonEight: false,
      lessonNine: false,
      lessonTen: false,
      lessonEleven: false,
      lessonTwelve: false,
      lessonThirteen: false,
      lessonFourteen: false,
      lessonFifteen: false,
      lessonSixteen: false,
      congrats: false
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
    appLessonSixteen: LessonSixteen,
    appCongrats: Congrats
  },
  methods: {
    track () {
      this.$ga.page('/')
    },
    hardReset() {
      this.lessonOne = true;
      this.lessonTwo = false;
      this.lessonThree = false
      this.lessonFour = false
      this.lessonFive = false
      this.lessonSix = false
      this.lessonSeven = false
      this.lessonEight = false
      this.lessonNine = false
      this.lessonTen = false
      this.lessonEleven = false
      this.lessonTwelve = false
      this.lessonThirteen = false
      this.lessonFourteen = false
      this.lessonFifteen = false
      this.lessonSixteen= false
      this.congrats = false
    },
    showHardReset() {
      this.$refs.hardResetRef.show()
    },
    hideHardReset() {
      this.$refs.hardResetRef.hide()
    }
  },
  created() {
    //set boolean to a string. check for that string in an if statement. If it's a certain
    //string, then just set your data accordingly
  console.log(this)
  }
}
</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    color: white
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
