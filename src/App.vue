
<template>
<div id="nav">
<div>
<div></div>
<router-link to="/project">Gallery</router-link>
<router-link to="/about">About</router-link>
<router-link to="/">Home</router-link>
</div>
<h1><|kings1-web|></h1>
</div>
  <Router-view v-slot="{ Component }">
  <transition name="scale-slide">
  <component :is="Component" />
  </transition>
  </Router-view>
</template>

<script>
export default{
  name:"App",
}
</script>

<style lang="css" scoped>
 #nav {
  background-color:#3333;
  overflow:hidden;
  z-index:1;
  position:fixed;
  min-width:100%;
  float:right;

  


  
 }
 #nav a{
  float:right;
  text-align:center;
  justify-content:center;
  color:#fff;
  padding-top:1rem;
  text-align:center;
  font-size:1em;
  text-decoration:none;
  margin-right:2em;
 }
 #nav a:hover{
  background:#fff;
  color:#333;
 }
 h1 {
  display:flex;
  COLOR:#fff;
  font-size:1rem;
  margin-left:2em;
 }
 .scale-slide-enter-active,
 .scale-slide-leave-active {
  position:absolute;
  transition: all 0.85s ease;
 }
 
 .scale-slide-enter-from {
  left: -100%;
 }

 .scale-slide-enter-to {
  left:0%;

 }
 .scale-slide-leave-from{
  transform: scale(1);
 }
 .scale-slide-leave-to {
  transform: scale(0.8);
 }

 
 
</style>
