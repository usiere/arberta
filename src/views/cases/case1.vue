<template>
<div>
  <TopBar class="topbar" />
  <router-link to="/"> <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-icon" /></router-link>
    <!-- main section -->
    <h1 class="main-heading">
            <img src="../../assets/case-images/legal.jpg" class="main-img"  alt=""> <br><br>
Having issues related to legitimizing a property before purchase in Nigeria?</h1>
    <div class="main-text">
         <p>When udergoing the validation process before purchasing a property in Nigeria from the diaspora, do ypu experience difficulty? The validation process when palnning to purchase a property in Nigeria doesn't seem hassle free especially when it is done form overseas. </p>
        <!-- <p>In various cases, it has been seen that legitimizing a property before purchase can be a real concern in Nigeria especially when planning to purchase from overseas. Legitimizing a property before purchase can be tasking and involves alot of processes. </p> -->
       <p>At Arberta, we assist our clientele in the verfication process of properties before purchase. Our system ensures a smooth and semaless verification. Our aim is to eliminate any form of barrier that may occur during the verification process. Encourgaing more Nigerians in the diapsora to invest in Nigerian real estate.</p>
        <p>At Arberta, we assist Diasporans at the pre purchase stages in the documentation process making sure that he/ she has the right papers before proceeding to purchase. </p>
     <router-link class="button1" to="/verify">Verify a property</router-link>
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
   
}

.topbar{
    position:sticky;
    top: 0; /* required */

}

.main-heading{
    text-align: center;
    padding: 30px;
    font-weight: 600;
    font-size: 35px;
     font-family: 'Josefin Sans', sans-serif;
}

.main-img{
   width: 450px;
   height: 300px;
   margin-left: auto;
   margin-right: auto;
   border-radius: 5%;
}

.main-text{
    padding-left: 140px;
    padding-right: 140px;
    font-size: 18px;
     font-family: 'Josefin Sans', sans-serif;
}

.button1{
    background-color: blue;
    text-decoration: none;
    color: white;
    height: 35px;
    padding: 15px;
    border-radius: 3px;
    margin: auto;
    cursor: pointer;
    position: relative;
    left: 450px;
}


.button1:hover{
    background-color:navy;
    color: white;
    height: 35px;
    padding: 5px;
    border-radius: 3px;
    margin: 5px;
}
.back-icon{
  font-size: 40px;
  position: relative;
  left: 40px;
  margin: 30px;
  outline: none;
  color: black;
}
@media screen and (max-width: 600px) {
  .main-text{
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18px;
     font-family: 'Josefin Sans', sans-serif;
}

  .button1{
    position: relative;
    left: 80px;
}

.back-icon{
  font-size: 25px;
  position: relative;
  left: 40px;
  margin: 10px;
  outline: none;
}

}

</style>