
<template>
<div class="home">
<Surface />
<Carousel 
:navigator="true" 
:pagination="true"
:startAutoPlay="true"
:timeout="5000" 
class="Carousel" v-slot="{currentSlide}">
<Slide v-for="(img, index) in carouselSlides" :key="index">
<div v-show="currentSlide === index + 1" class="slide-info">
<img :src="getImageURL(img)"/>
</div>
</Slide>
</Carousel>
</div>
</template>

<script>
import {ref} from 'vue';
import Surface from '../components/Surface.vue'
import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'

export default {
  name: "ProjectView",
  components: {Carousel, Slide,Surface },
  setup() {
    const carouselSlides = ref(["bg-1","bg-2","bg-3","bg-4","bg-5","bg-6","bg-10","bg-3", "bg-8","bg-7","bg-9","bg-11","bg-12"]);

    function getImageURL(name) {
      return new URL(`../assets/${name}.jpg`,import.meta.url).href
    };

    return {
getImageURL, carouselSlides
    };

  },
 
}
</script>



<style lang="scss" scope>
.carousel {
  position:relative;
   max-height: 100vh;
   height: 100vh;
  
}
 .slide-info {
position:absolute;
top:0;
left:0;
width:100%;
}
img {
  min-width:100%;
  height:100vh;
  width:100%;
  object-fit:cover;
  
}
.home{
  overflow:hidden
}





</style>
