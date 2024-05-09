<template>
<div class="all">
<div class="about">
<h1>MY BIOGRAPHY</h1>
<hr>
</div>
<div class="low">
<h3>i'm kingsley nwachukwu a web developer,front-end developer, S.E.O(SEARCH ENGINE 
OPTIMIZATION),a dedicated freelancer,with four years of exprience.i take passion 
in my work and dedicated in any project.working with different people gives me the pleasure
of satisfaction and desire to do more.</h3>
<h3>i usualy complete any giving task or project in a timely manner and dead line.</h3>
<h2>skill & interest</h2>
<button>web development</button>
<button>front-end developer</button>
<button>search engine optimization(s.e.o)</button>
<p>
<button>cascading style sheet(c.s.s)</button>
<button>markup language(html)</button>
<button>javascript(js)</button>
</p>
</div>

<div class="education">
<h1>education</h1>
<hr>
<h3>awor ezimuzor community grammer school</h3>
<p>school of science|2009-2012</p>
<h3>bachelor degree</h3>
<p>federal university of technology akure|2014-2019</p>
<div class="image">
<h2> qualification </h2>
<img src="../assets/bg-8.jpg">
<img src="../assets/bg-9.jpg">
<img src="../assets/bg-10.jpg">
</div>
</div>
</div>
</template>

<script>
export default{
    name:"AboutView",
}
</script>\
<style lang="scss" scoped>
   .about {
    text-align:center;
    font-size:24px;
    color:#1d3557;
    position:relative;
    top:60px
   }
   .low {
    margin-top:100px;
    text-align:center;
    font-size:16px;
    color:#f2f2f2f2
   }
   .image {
    text-align:center;
    background:maroon;
    overflow:hidden;
    padding:16px
   }
    img{
    height:100%;
    margin-top:30px;
    min-width:100%;
    justify-content:center;

    }
    
   h2{
    font-size:2em;
    justify-content:center;
    margin-bottom:0px;
    color:#f2f2f2f2
   }
   button{
    margin:16px;
    padding:16px;
    font-size:20px
   }
   hr{
    width:30%;
    height:10px;
    background:#1d3557;
    border-radius:30px
   }
   
   .all{
    max-width:100%;
    max-height:100em;
    text-transform:capitalize;
    word-spacing:4px;
    letter-spacing:3px;
    line-height:40px;
    background-image:url('../assets/bg-7.jpg');
    background-repeat:no-repeat;
    background-size:contain;
    opacity:0.8;
    text-shadow:3px 2px 10px lightgray;
    overflow: auto
    


   }
   h2,h1,h3{
    color:#1d3557
   }
   .education{
    text-align:center;
    justify-comtent:center;
    font-size:24px;
    background:lightgray;
   }
   

</style>