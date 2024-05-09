<template>

<button @click="open = true" class="animate__animated animate__rubberBand animate__infinite"><i class="fa-solid fa-arrow-up"></i></button>

<teleport to="#modals">
<div v-if="open" class="modal">
<div class="btn">
<button @click="open = false"><i class="fas fa-times"></i></button>
</div>
<h3>website development</h3>
<p>design and development of custom websites, including e-commerce sites,
potfolios, and personal blogs.</p>
<h3>funnel building</h3>
<p>creation of marketing funnels, including landing pages, optin-forms, and 
check out pages, to convert visitors into a loyal customers.</p>
<h3>website design</h3>
<p>design and improvement of existing websites, including layout, graphics, 
and overrall user experiences.</p>
<h3>website maintenanc</h3>
<p>ongoing maintenace and support of a websites, includings bugs fixings,
security updates, and performance of optimization.</P>
<h3>e-commerce development</h3>
<p>development of omline store, including product management, payment processing,
 and shipping integration.</p>
 <h3>website optimization</h3>
 <p>optimization of websites for search engines (SEO) and speed, to improve visibility
  and perform.</p>
  <h3>landing page design</h3>
  <p>design and development of high-converting landing pages for lead generation
   and sales.</p>
   <h3>conversion rate optimization</h3>
   <p>analysis and improvement of website metrics, such as conversion rate,
   to increase sales and revenue.</p>
   <h3>custom development</h3>
   <p>development of custom web applications, including online calculators,
   quizzes, and forms.</p>
</div>
</teleport>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "MyModal",
    data(){
        return{
            open:false
        }
    }
}
    

</script>

<style scoped>
.modal {
    position:fixed;
    border-radius:20px;
    border-top:10px solid gray;
    border-bottom:10px solid gray;
    top:auto;
    transform:translate(-px, -px);
    max-height:84%;
    max-width:100%;
    padding:32px;
    background:#1d3557;
    overflow-y:scroll;
    text-align:center;
    justify-content:center;
    font-size:1.5em;
    text-transform:capitalize;
    color:#f2f2f2f2
    
}
  .btn{
    text-align:right;


}
.btn i {
    color:#fff;
    border-radius:50%;
    opacity:1;
    cursor:pointer;

}
.btn button{
    border-radius:50%;
    border:none;
    font-size:1.5rem;
    background:black;
    
}
.animate__animated{
    cursor:pointer;
    font-size:1.7rem;
    border-radius:50%;
    border:none


}
</style scoped>