<template>
<div>
  <TopBar class="topbar" />
  <router-link to="/"> <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-icon" /></router-link>

    <!-- main section -->
    <h1 class="main-heading">
            <img src="../../assets/case-images/overseas.jpg" class="main-img"  alt=""> <br><br>
Living overseas and finding it diffciult to purchase a property in Nigeria?</h1>
    <div class="main-text">
        <p>Are you a Nigerian living overseas with a plan of purchasing properties in Nigeria? As a Nigerian living in the diaspora, you have the same rights to own a property to purchase a property in Nigeria as with a citizen based in the country.</p>
        <p>There are countless cases of diasporans that show intent in purchasing a property in Nigeria,  but due to reasons such as lack of information, lack of trust and unavailability, the plan to purchase a property is then forgotten. Of the major causes, lack of information is seen to have the greater effect. An example, seeking to purchase a proeprty in Nigeria but not having adequate information on the neighborhood. To avoid situations like these, it is advised to carry our preliminary researchwhich may be from publications,online blogs or from other sources.</p>
        <p>Only when a preliminary reaserch carried out should a trusted agency then be involved to follow up the process.  Engaging a trusted agency comes with so many perks such as legal documentation assistance, supervision, monitoring, control and experience.</p>
        <p>At Arberta, we assist Diasporans at the pre purchase stages in the documentation process making sure that he/ she has what is needed before proceeding to purchase. </p>
     <br>
     <router-link class="button1" to="/verify">Begin with Arberta</router-link>
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