<template>
<div class="carousel">
<slot :currentSlide="currentSlide"/>

<!-- navigator button -->
<div v-if="navEnable" class="navigator">
<div class="toggle-page left">
<i @click="prevSlide" class="fas fa-chevron-left"></i>
</div>
<div class="toggle-page right">
<i @click="nextSlide" class="fas fa-chevron-right"></i>
</div>
</div>

<!-- pagination -->
<div v-if="paginationEnabled" class="pagination">
<span
@click="goToSlide(index)"
 v-for="(slide, index) in getSlideCount" 
:key="index" 
:class="{active : index + 1 === currentSlide}">
</span>
</div>
</div>
</template>

<script>
import {ref ,onMounted } from 'vue';
export default {
    props:["startAutoPlay", "timeout", "navigator", "pagination"],
    setup(props) {
        const currentSlide = ref(1);
        const getSlideCount =  ref(null);
        const autoPlayEnabled = ref(
            props.startAutoPlay === undefined ? true : props.startAutoPlay)
        const timeoutDuration = ref(
            props.timeout === undefined ? 5000 : props.timeout)
        const paginationEnabled = ref(
            props.pagination === undefined ? true : props.pagination)
            const navEnable = ref(
            props.navigator === undefined ? true : props.navigator)
        // next slide
        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value += 1;
        };

        //prev slide
        const prevSlide = () => {
            if (currentSlide.value === 1) {
                currentSlide.value =1;
                return;
            }
            currentSlide.value -= 1;
        };

        const goToSlide = (index) => {
            currentSlide.value = index + 1;
        };
        // auto autoPlay

        const autoPlay = () => {
            setInterval(() => {
                nextSlide()
            },timeoutDuration.value);
        };
        if(autoPlayEnabled.value) {
            autoPlay();
        }

        onMounted(() => {
            getSlideCount.value = document.querySelectorAll(".slide").length;
        });

        return { 
            currentSlide,
             nextSlide, prevSlide,
              getSlideCount,
              goToSlide,
               paginationEnabled,
               navEnable };

    },
};
</script>

<style lang=scss>
.navigator {
    padding: 0 16px;
    height:100%;
    width:100%;
    position:absolute;
    display:flex;
    justify-content: center;
    align-items:center;

.toggle-page  {
    display:flex;
    flex:1 ;


}
.right {
    justify-content:flex-end;
}
  i  {
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    width:40px;
    height:40px;
    background-Color:#1d3557;
    color:#fff;
}

}
.pagination{
    position:absolute;
    bottom: 24px;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
span {
    cursor:pointer;
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.6);
}
.active{
    background-color:#1d3557;

}

</style>