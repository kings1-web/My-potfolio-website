<template>
<div class="read">
<div><h1>
</h1></div>
<div>
<div class="heading">
<div class="class">
<div class="nice">
HELLO, my name is 
<hr>
</div>
<h1>
 kingsley<br> nwachukwu
</h1>
<h2>i am an experience, motivated and reliable freelancer.
 who is dedicated to
providing quality services to clients.
i have years of experience, in various field
and am capable of completing projects in tImely
 manner and to the highest standard
i take great pride in my work. and  am commited 
to meeting my clients needs. i have excellent
communication and problem-solving skills,
 and am confident and i can provide the best
services for any project.</h2>
<br><br>

<a href="https://whatsapp.com/dl/code=UDEHscKNIm">text me for price</a>
</div>
<div class="image2">
<img src="../assets/bg-13.jpg" alt="my profile image">
<h2>your priority is our business, <br>
get in touch, <br>
we are at your service.</h2>
</div>
</div>
</div>
<div class="contact">
<h2>join forces with us to start your next
 web development and s.e.o optimzation.</h2>

</div>

<div class="container">

<div class="project">
<div class="step">
<h2>step 1:</h2>
<h3>success in any project</h3>
<p>A strong foundation ensures stability and prevent problem from arising
in the future.it is important to take the time carefully plan and execute 
the foundation, taking into consideration factors such as the enviroment,
local regulation, and budget constraints.</p>
</div>
<img src="../assets/bg-16.jpg" alt="programmer">


</div>

<div class="cover">

<div class="faq-container">
<img src="../assets/bg-14.jpg" alt="programmer">
<div class="task">
<h2>step 2:</h2>
<h3>task</h3>
<p>this includes tasks such as defining the layout, selecting colors and font,
 and integrating viosual elements such as images and videos. it also involves
 creating a user-friendly interface that is easy to navigate and provide a positive
 user experience.</p>
</div>
</div>
</div>
</div>
<div class="specific">
<div class="face">
<h2 style="text-align:center">FAQ</h2>
<details>
<summary>what are the benenfit of using my web design and S.E.O 
services?<div class="icon"><i class="fa-solid fa-chevron-down"></i></div></summary>
<div class="content">
<p>using my web design and S.E.O service can benenfit your business in 
several ways, including increased visibility and credibility, improved user 
experience, and increased conversion rates.</p>
</div>
</details>
<details>
<summary>what kind of websites can you design and perform S.E.O service for?<div 
class="icon"><i class="fa-solid fa-chevron-down"></i></div></summary>
<div class="content">
<p>my web design and S.E.O service, i can design and perform S.E.O in various  web website,
including e-commerce site, blogs, portfolios, and landing pages.</p>
</div>
</details>
<details>
<summary>what is included in my web design and S.E.O  services?<div
class="icon"><i class="fa-solid fa-chevron-down"></i></div></summary>
<div class="content">
<p>my web design and S.E.O service includes custom design and development of
a website,integration of required funtionality and features, and creating
effective sales funels to maximize conversion rates.</p>
</div>
</details>
<details>
<summary>how long does it take to complete a web design and perform S.E.O 
on a project?<div class="icon"><i class="fa-solid fa-chevron-down"></i></div></summary>
<div class="content">
<p>the time required to complete a web design and perform S.E.O service on project can 
vary based on the complexity and scope of the projec. on average, most project can be completed within 4-6 days.</p>
</div>
</details>
<details>
<summary>can you work with an existing one, or do you only create a  new site
 from scracth?<div class="icon"><i class="fa-solid fa-chevron-down"></i>
 </div></summary>
<div class="content">
<p>i can work with an existing website to improve its design funtionality,
and experience, as well as build effective websites for it.however, 
in some cases, starting from scratch may be more cost-effective and provide
better results.</p>
</div>
</details>
<details>
<summary>how much does a web developing and S.E.O service cost?<div class="icon">
<i class="fa-solid fa-chevron-down"></i></div></summary>
<div class="content">
<p>the cost of web development and S.E.O service can vary based on the complexity and scope
 of the project. we offer competive pricing and will provide a detailed quote
  based on your specific needs and requirements.</p>
</div>
</details>
</diV>
<div class="special">
<img src="../assets/bg-15.jpg" alt="programmer">
</div>
</div>

<div class="coffe">


<img class="demo_image" src="../assets/bg-17.jpg" alt="programmer">

<div class="contain">
<div>
<MyModal />
</div>
 
<h2>MY services</h2>
<ul>
<li>web development</li>
<li>funnel building</li>
<li>website design</li>
<li>website maintenanance</li>
<li>website optimization(s.e.o)</li>
<li>landing pages</li>
<li>off-page and 0n-page (s.e.o)</li>
<li>custom development</li>
<li>e-commerce development</li>
</ul>
</div>
</div>

<div class="quote">
<MyModal />

<h2>CUSTOM QUOTE FOR YOUR BUSINESS IS<br>
 WHAT YOU NEED.</h2>
 <p>with a personalized approach, you can ensure that every step of your business
 is optimized for maximum result, from attracting and engaging visitors to 
 converting them into loyal customers."</p>
 <h2>get in touch with me directly</h2>
<a href="https://whatsapp.com/dl/code=UDEHscKNIm" class="animate__animated animate__flas animate__infinite">chat me up</a>
</div>
</div>
</template>

<script>
import MyModal from '../components/MyModal.vue'
export default{
    name:"HomeView2",
    components:{MyModal},
    data() {
     return {
        open:false
     }
    },
};

</script>

<style scoped>
.image2{
max-width:100%;
text-align:center;
padding:2em;
}

h1{
    font-size:5rem;
}

.specific{
    background:gray;
     tex-align:center;
     justify-content:center;
     max-width:100%;
    margin:24px auto;
    font-family:"roboto", sans-serif;


}
.special{
    padding:2rem;
    text-align:center
}
.contact{
    font-size:2em;
    text-align:center
}
.nice {
    width:13rem;
    text-transform:uppercase;
    font-size:1rem;
    line-height:1.7em;
}
.contain, .quote{
    text-align:center;
    font-size:1.9rem;
    line-height:1.5em;
    padding-left:2em
}
.contain{
    position:relative;
    
}
.coffe{
    overflow:hidden;
    position:relative;


}
.demo_image{
    opacity:0.3;
    position:absolute;
    left:0;
    top:0;
    height:auto;
}


img{
    border-bottom:10px solid #1d3557;
    border-radius:5%;
    border-top:10px solid  #1d3557;
    margin-bottom:30px;
    text-align:center;
    height:25em
}
a{
    text-align:center;
   text-decoration:none;
   background:#1d3557;
   color:#fff;
   font-size:2em;
   overflow:hidden;
   padding:1rem
   
 
 }
.heading,.container,.specific {
    min-width:100%;
display:grid;
grid-auto-columns:minmax(10rem,auto);
grid-template-columns:repeat(auto-fill,minmax(30rem,1fr));
grid-gap:3rem
}
.read{
    min-width:100%;
    position:absolute;
    background:black;
    color:#f2f2f2f2;
    padding:4rem;
    text-transform:capitalize;
    word-spacing:rem;
    line-height:1.3;
    overflow:auto;
    box-sizing:border-box;
    



}
.heading{
    margin-top:10rem;
  

}
.project{
    text-align:center;
    margin-top:60px;
    color:#7ce8ff
}
.step,.task{
    border-bottom:10px solid #1d3557;
    border-radius:5%;
    border-top:10px solid  #1d3557;
    margin-bottom:30px;
    font-size:1.5rem;
    color:#f2f2f2f2;
    padding:3rem
 }
.heading .image2 img{
 height:30rem;
 border-radius:50%;
 text-align:center;
 justify-content:center;
 padding-left:30px
}
.faq-container{
    max-width:100%;
    margin:24px auto;
    font-family:"roboto", sans-serif;
}
details summary .icon i {
    height:24px;
    display:flex;
}
details .content{
    padding:16px;
    line-height:1.8;
    margin-top:-10px;
    color:black

}
details summary{
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    gap:16px;
    padding:16px 24px;
    background:#1d3557;
    color:#f2f2f2f2;
    user-select:none;
    transiton:all 120ms ease;
}
details {
    background:#edf2f4;
    border-radius:4px;
    overflow:hidden;
    margin-bottom:12px;
}
details[open] summary {
    background:#0c1728;
    margin-bottom:10px;
    transition: all 420ms ease-in-out;

}
details summary .icon {
    transition: all 120ms ease;
}
details[open] summary .icon {
    rotate:180deg;
}

</style>