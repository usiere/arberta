<template>
<div>
  <TopBar class="topbar" />
  <router-link to="/"> <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-icon" /></router-link>
    <!-- main section -->
    <h1 class="main-heading">
            <img src="../../assets/case-images/legal.jpg" class="main-img"  alt=""> <br><br>
Need assistance in the supervision of a property currently under development? </h1>
    <div class="main-text">
        <p>Nigerians living in the Diaspora face the challenge in Nigerian real estate development. The supervision of property developments in Nigeria while based abroad is a major challenge that diasporas face. Due to this, many are discouraged from embarking on any real estate development process in Nigeria. There are countless reasons why supervision of the property development process is needed, such as ensuring that the property development is up to plan.
Problems that might occur, if the property development process is not supervised well, such as security and ethical reasons.</p>
        <p>To avoid the,before embarking on any property supervision process, the individual must put in place a system in which he/ she will supervise the property development process. This can be done during or before the project commences. The system employed be it through an Agency or an individual must be able to give weekly valid reports of the property development process.</p>
        <p>Arberta is a trusted agency that offers property supervision services to clientele based in Nigeria and based in the diaspora. Through our equipped professional, we engage in Q/A and monitoring services in order to provide weekly reports to our clientele.</p>
     <br>
     <router-link class="button1" to="/verify">Request for supervision</router-link>
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