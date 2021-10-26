<template>

<div>
<TopBar class="topbar" />

<!-- main section -->
<div class="sec1">
    <!-- left section -->
    <div>
          <h1 class="sec1-text1">Property verification</h1>
    <div class="sec1-text2">The legimacy of properties before purchase can pose as a threat when purchasing from overseas. <span class="sec1-text2-2">As part of our core services, we assist in the verification process for individuals seeking to purchase properties from overseas.</span></div>
<br><br>
 <router-link to="/verify-form" class="button1">Verify</router-link>
    </div>

    <!-- right section -->
    <img src="../assets/illus/verify.png" alt="" class="verify-icon">
  
</div>

<!-- second section -->
<div class="sec2">
    <div class="sec2-left"></div>
    <div class="sec2-right">
        <h1 class="sec2-right-text1">Goodbye to tedious processes.</h1>
        <div class="sec2-right-text2">At Arberta, we enable individuals to have a seamless verification process. Eliminating the usual hassle of the system. Through our government and private partners, we ensure that our gets the best of services with no stress attached.</div>
    </div>
</div>

<!-- second section for mobile -->
<div class="sec2-mob">
    <div class="sec2-mob-left">
        <!-- <img src="../assets/issues1.jpg" alt="" class="sec2-mob-img"> -->
    </div>
    <div class="sec2-mob-right">
          <h1 class="sec2-right-text1">Goodbye to tedious processes</h1>
    </div>
</div>
 <div class="sec2-right-text2 mob">At Arberta, we enable individuals to have a seamless verification process. Eliminating the usual hassle of the system. Through our government and private partners, we ensure that our gets the best of services with no stress attached.</div>
<br><br>
<!-- third section -->
<div class="sec3">
    <h1 class="sec3-heading">Our process</h1>
    <div class="sec3-main">
        <div class="sec3-sub">
            <h1 class="sec3-sub-label">1.</h1>
             <img src="../assets/illus/verify-icon1.png" alt="" class="sub-icon" >
            <h1 class="sec3-sub-text move-text-1"> We get relevant information</h1>
        </div>
        <div class="sec3-sub">
             <h1 class="sec3-sub-label">2.</h1>
             <img src="../assets/illus/verify-icon2.png" alt="" class="sub-icon">
             <h1 class="sec3-sub-text">Begin the verification of the property in-house and with partner agencies</h1>
            </div>
         <div class="sec3-sub">
              <h1 class="sec3-sub-label">3.</h1>
             <img src="../assets/illus/shield.png" alt="" class="sub-icon">
             <h1 class="sec3-sub-text">Verification status with supporting documents are sent to the client</h1>
           </div>
    </div>
<br><br>

    <div class="button2">
        <router-link to="/verify-form" class="button2-text"> Verify a property </router-link>
    </div>
    <br><br>
</div>

</div>

</template>


<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar.vue";

export default {
  name: "Home",
  components: {
    TopBar,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

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
    background-color: rgb(0,0,0, 0.8);
    padding: 100px;
    display: flex;
    flex-direction: row;
    font-family: 'Josefin Sans', sans-serif;
}

.sec1-text1{
    color: white;
    font-family: Roboto;
    font-weight: bold;
     font-family: 'Josefin Sans', sans-serif;
}

.sec1-text2{
    color: white;
    width: 40%;
    height: 100px;
    font-size: 17px;
     font-family: 'Josefin Sans', sans-serif;
}

.sec1-text2-2{
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
    background-image: url('../assets/issues1.jpg');
    background-size: 800px 533px;
    margin: 30px;
    border-radius: 20px;
}

.sec2-right{
    padding: 110px;
    font-family: 'Josefin Sans', sans-serif;  
}


.sec2-right-text2{
    font-family: 'Josefin Sans', sans-serif;  
    font-size: 1.1rem;
    font-weight: 600;
}

.sec3-heading{
    text-align: center;
    padding: 10px;
    font-size: 30px;
}

.sec3-main{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    font-family: 'Josefin Sans', sans-serif;
}

.sec3-sub{
    display: flex;
    flex-direction: column;
}

.sec3-sub-text{
    font-size: 20px;
    padding: 15px;
    font-family: 'Josefin Sans', sans-serif;
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
    text-decoration: none
}

.button2:hover{
    background-color: black;
    color: white;
}

.button2-text{
    color: black;
    text-decoration: none;
}

.button2-text:hover{
    color: white;
}

.move-text-1{
    position: relative;
    left: 70px;
}

.mob{
    display: none;
}



@media screen and (max-width: 600px) {
.verify-icon{
    right: 0px;
    width: 170px;
    height: 170px;
}

.sec1-text2{
    color: white;
    width: 100%;
    height: 100px;
}

.sec1{
    width: 100%;
    height: 400px;
    background-color: rgb(0,0,0, 0.8);
    padding: 30px;
    display: flex;
    flex-direction: row;

}

.sec1-text2-2{
    display: none;
    font-family: 'Josefin Sans', sans-serif;
    
}

.button1{
    margin-top: 10px
}

.sec2{
    display: none;
}

.sec2-right-text1{
    font-size: 25px;
     font-family: 'Josefin Sans', sans-serif;  
     font-weight: 900;
     margin-top: 60px;
}


.sec2-right-text2{
    font-family: 'Josefin Sans', sans-serif;  
    padding-left: 10px;
    padding-right: 10px
}

.sec2-mob{
    display: grid;
    grid-template-columns: 20% 80%;
}

.sec2-mob-left{
    padding: 65px;
}

.sec2-mob-img{
    width: 150px;
    height: 150px;
    border-radius: 10px;
}

.sec2-mob-right{
    padding: 30px;
     font-family: 'Josefin Sans', sans-serif;
}

.sub-icon{
 position: relative;
 left: 20px;
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

.move-text-1{
    position: relative;
    left: 0px;
}

.mob{
    display: inherit;
}


}


</style>