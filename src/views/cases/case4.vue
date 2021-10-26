<template>
<div>
  <TopBar class="topbar" />
    <router-link to="/"> <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-icon" /></router-link>
    <!-- main section -->
    <h1 class="main-heading">
            <img src="../../assets/case-images/advisory.jpg" class="main-img"  alt=""> <br><br>
Need to get information/ advisory on the properties needed to purchase?</h1>
    <div class="main-text">
        <p>Knowledge is an important factor upon purchasing a property in Nigeria from overseas. Knowledge about the city, type of property, market data and others is very much important in order to make the best decisions for your property investment.</p>
        <p>Information can be gotten form various channels, e.g online, reports, news and consultancy services. In most cases, if not present in the country physically before purchase it is very important that a consultancy agency is gotten.</p>
        <p>Arberta provides advisory services to Nigerians at home and in the diaspora, aiding in making the best decisions for property investments.</p>
     <br>
     <router-link class="button1" to="/verify">Arberta advisory</router-link>
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