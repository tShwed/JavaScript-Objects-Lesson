<template>
  <div class="text-center parent">
    <img class="cuttingboard" src="../../../cuttingboard.png">
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.parent {
  position: relative;
  top: 0;
  left: 0;
}

img {
  width: 93%;
}

.cuttingboard {
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
</style>
