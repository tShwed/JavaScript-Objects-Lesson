<template>
<div>
  <b-container>
    <b-row>
    <b-col class="col-md-3"><img class="chef" src="../../../cartoonchef.png"></b-col>
    <b-col class="col-md-9">
              <b-list-group>
              <b-list-group-item> 1: Give your variable the name 'pepperoni pizza' using camel case;</b-list-group-item>
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
  <button class="btn btn-success btn-block" @click="updateCode">Ok! Check my code!</button>
</div>
</template>

<script>
  // language
  import 'codemirror/mode/javascript/javascript.js'
  // require active-line.js
  import'codemirror/addon/selection/active-line.js'
  import'codemirror/mode/clike/clike.js'
  import'codemirror/addon/comment/comment.js'

  export default {
    data() {
      return {
        props: ['code'],
        cmOption: {
          styleActiveLine: false,
          lineNumbers: true,
          line: true,
        },
      }
    },
    mounted() {
      setTimeout(() => {
        this.styleSelectedText =  true,
        this.cmOption.styleActiveLine = true
      }, 1800)
    },
    methods: {
      updateCode() {
        this.$emit('codeWasChanged', this.code);
      }
    }
  }
</script>

<style>
  .CodeMirror-focused .cm-matchhighlight {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: repeat-x;
  }
  .cm-matchhighlight {background-color: lightgreen}
  .CodeMirror-selection-highlight-scrollbar {background-color: green}
  .chef {
    width: 75%;
  }
</style>
