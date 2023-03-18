<!-- eslint-disable prettier/prettier -->

<template>
 <todo-app>

 </todo-app>
</template>


<script>
import TodoApp from "./components/NavComp.vue";
export default {
  name: "App",
  components: {
    TodoApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>
