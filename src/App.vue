<script lang="ts" setup>
// import NormalStyle from './views/normal'
// import HookStyle from './views/hooks'
// import HookComponentStyle from './views/hooks-return-component'
// import InstanceStyle from './views/instance'
import HookPromise from './views/hooks-return-promise'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <!--  <NormalStyle /> -->
  <!--  <HookStyle /> -->

  <!--  <HookComponentStyle /> -->
  <!--  <InstanceStyle /> -->

  <HookPromise />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
