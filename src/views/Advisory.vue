<template>

<div>
<TopBar class="topbar" />

<!-- main section -->
<div class="sec1">
    <!-- left section -->
    <div>
          <h1 class="sec1-text1">In need of advisory services?</h1>
    <div class="sec1-text2"> In need of advisory/ consultation services on real estate matters in Nigeria? 
        <span class="sec1-text2-2">At Arberta, we have a professional team that provides advisory and consultation services to clientele seeking to purchase real estate in Nigeria from the diaspora.</span>
    </div>
<div class="space">
    <br>
</div>
<br>
<router-link to="/advisory-form" class="button1">Begin</router-link>
    </div>

    <!-- right section -->
    <img src="../assets/case-icons/advisory.png" alt="" class="verify-icon">
  
</div>

<!-- second section -->
<div class="sec2">
    <div class="sec2-left"></div>
    <div class="sec2-right">
        <h1 class="sec2-right-text1">Prime services</h1>
        As part of our duties, we ensure that adequate information is given with respect to a property investment before, during and after a purchase to our clientele. Offering advisory in varied areas such as Investment, building consultation, documentation and more.
    </div>
</div>

<!-- second section for mobile -->
<div class="sec2-mob">
    <div class="sec2-mob-right">
          <h1 class="sec2-mob-right-text1">Prime services</h1>
          <div class="sec2-mob-right-text2"> As part of our duties, we ensure that adequate information is given with respect to a property investment before, during and after a purchase to our clientele. Offering advisory in varied areas such as Investment, building consultation, documentation and more.</div>
    </div>
</div>
<br><br>
<!-- third section -->
<div class="sec3">
    
    <div class="button2">
        <router-link to="/advisory-form" class="button2-text"> Request advisory </router-link>
    </div>
    <br><br>
</div>

<Footer />
</div>

</template>


<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    Footer
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap');

*{
    font-family: Roboto sans-serif;
}

.topbar{
    position:sticky;
    top: 0; /* required */
    background-color: white;
    opacity: 90%;
    z-index: 3;

}

.sec1{
    width: 100%;
    height: 400px;
    background-color: white;
    padding: 100px;
    display: flex;
    flex-direction: row;
    color: black;
}

.sec1-text1{
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
}

.sec1-text2{
    color: black;
    width: 40%;
    height: 100px;
     font-family: 'Josefin Sans', sans-serif;
}

.sec1-text2-2{
    color: black;
    width: 40%;
    height: 100px;
     font-family: 'Josefin Sans', sans-serif;
}

.button1{
    background-color: blue;
    color: white;
    width: 70px;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
}

.verify-icon{
 position: relative;
 right: 300px;
}

.sec2{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 400px;
}

.sec2-mob{
    display: none;
}

.sec2-left{
    background-image: url('../assets/case-images/advisory.jpg');
    background-size: 533px 439px;
    margin: 30px;
    border-radius: 20px;
}

.sec2-right{
    padding: 110px;
     font-family: 'Josefin Sans', sans-serif;
}

.sec2-right-text1{
     font-family: 'Josefin Sans', sans-serif;
}

.sec3-heading{
    text-align: center;
    padding: 10px;
    font-size: 30px;
}

.sec3-main{
    display: grid;
    grid-template-columns: 33% 33% 33%;
}

.sec3-sub{
    display: flex;
    flex-direction: column;
}

.sec3-sub-text{
    font-size: 20px;
    padding: 15px;
}

.sec3-sub-label{
    position: relative;
    left: 220px;
     font-size: 25px;
}

.sub-icon{
 position: relative;
 left: 180px;
  width: 100px;
height: 100px;
opacity: 60%;
}

.button2{
    background-color: white;
    color: black;
    border: 1px solid black;
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
}

.button2-text{
    color: black;
}

.space{
    display: none;
}


@media screen and (max-width: 600px) {
.verify-icon{
    right: 0px;
    width: 170px;
    height: 170px;
}

.sec1-text2{
    color: black;
    width: 100%;
    height: 100px;
}

.sec1{
    width: 100%;
    height: 400px;
    background-color: white;
    padding: 30px;
    display: flex;
    flex-direction: row;

}

.sec1-text2-2{
    display: none;
}

.button1{
    margin-top: 10px
}

.sec2{
    display: none;
}

.sec2-mob{
    display: inherit;
}

.sec2-mob-left{
    padding: 25px;
}

.sec2-mob-img{
    width: 200px;
    height: 200px;
    border-radius: 10px;
}

.sec2-mob-right{
    padding: 20px;
     font-family: 'Josefin Sans', sans-serif;
}

.sec2-mob-right-text1{
     font-family: 'Josefin Sans', sans-serif;
}

.sec2-mob-right-text2{
    font-family: 'Josefin Sans', sans-serif;
}

.sub-icon{
 position: relative;
 left: 0px;
 width: 50px;
height: 50px;
opacity: 50%;
}


.sec3-sub-label{
    position: relative;
    left: 30px;
    font-size: 18px;
}

.sec3-sub-text{
    font-size: 15px;
}


.button2{
    background-color: white;
    color: black;
    border: 1px solid black;
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
}

.space{
    display: inherit;
}

}


</style>