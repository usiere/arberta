<template>
<div>
  <TopBar class="topbar" />
  <router-link to="/"> <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-icon" /></router-link>
    <!-- main section -->
    <h1 class="main-heading">
            <img src="../../assets/case-images/manage.jpg" class="main-img"  alt=""> <br><br>
Experiencing difficulty in managing purchased properties from overseas?</h1>
    <div class="main-text">
        <p>Its one thing to acquire a real estate asset, it is another thing to manage that acquired real estate asset. There are counteless cases where properties are bought in Nigeria but
 Because of poor maintenance, these properties become dilapidated to a great extent and in turn lose its value. Senariso like these have created a lot of wastage in asset value which should never be the case.</p>
        <p>It is wise, that as an asset is acquired either for investment purposes or for personal purposes, there should be a provision for the maintenance of that property. Thus can involve an agency or a private contractor equipped with the necessary building know how</p>
        <p>The Arberta Property Management program, assists individuals at home and in the diaspora with property maninteanace services. </p>
    <br>
     <router-link class="button1" to="/verify">Request management services</router-link>
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