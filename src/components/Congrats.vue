<template>
    <div class="text-center">
      <br>
      <h1>Congratulations! You're a coding chef!</h1>
      <br>
      <b-row>
        <b-col><img class="chef" src="../../cartoonchef.png"></b-col>
        <b-col><img class="pizza" src="../../pizza.jpg"></b-col>
      </b-row>
      <br>
      <br>
      <h5>You've successfully completed the JavaScript Objects course. You now know how to create basic objects in JavaScript!<br>
        You're well on your way to becoming a JavaScript Master!<br>
      </h5>
      <footer style="margin-top:200px"><p>Want to learn more coding? Check out <a style="color: white" href="www.codemoji.com">www.codemoji.com</a><br>Restart this <a style="color: white" href="food.codemoji.com">lesson</a>
      </p></footer>
    </div>
</template>

<script>
    export default {
        name: "Congrats.vue"
    }
</script>

<style scoped>
  h1,h5,p{
    color: white
  }
  .chef {
    width: 20%;
    float: right;
  }
  .pizza {
    width: 20%;
    float: left;
    margin-top: 40px
  }
</style>
