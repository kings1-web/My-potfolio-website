<template>
<div class="surface">
<h1>
MY LATTEST GALLERY
</h1>
<hr>
</div>

</template>

<script>
export default {
    name:"Surface",
};

</script>

<style lang='scss' scoped>
.surface {
    position:absolute;
    top:5%;
    left:10%;
     z-index:1;
    color:#1d3557;
    text-align:left;
    font-size:1em;
    text-shadow:6px 4px 3px #1d3557;
}
hr {
    width:50%;
    height:10px;
    background:#1d3557;
    border-radius:30px;
    border:none
}


</style>