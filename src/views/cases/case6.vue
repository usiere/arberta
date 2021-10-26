<template>
<div>
  <TopBar class="topbar" />
  <router-link to="/"> <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-icon" /></router-link>
    <!-- main section -->
    <h1 class="main-heading">
            <img src="../../assets/case-images/legal.jpg" class="main-img"  alt=""> <br><br>
Want to buy a property in Nigeria but having finance problems?</h1>
    <div class="main-text">
        <p>Finace is a Mojor determiner when purchasing a property. Usually because of insufficient information available on financing opportunities in the country, most Nigerians in diaspora that don not have access to sufficient capital to buy properties forgo the intention of purchasing. 
</p>
        <p> There are countless options available in the country to purchase a property. For example, there are housing schemes and Mortgage banks with various offers on select terms willing to aid you in the purchase of a property.</p>
        <p>Arberta advisory gives individuals sufficient information about the property market and housing finance schemes in Nigeria to our cleintele.</p>
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