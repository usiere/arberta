<template>

<div>
<TopBar class="topbar" />

<!-- main section -->
<div class="sec1">
    <!-- left section -->
    <div>
          <h1 class="sec1-text1">Investment management</h1>
    <div class="sec1-text2"> It is should be of topmost priority to ensure that acquired real estate is properly managed. If not managed properly, can result to dilapitation leading to loss of value in the asset. At arberta, we have developed a system to manage property assets for Nigerians in thr diaspora.</div>
<!-- spacing only for mobile -->
<div class="space1"><br><br><br><br></div>
<br><br>
 <router-link to="/manage-form" class="button1">Begin</router-link>
    </div>

    <!-- right section -->
    <img src="../assets/case-icons/manage.png" alt="" class="verify-icon">
  
</div>

<!-- second section -->
<div class="sec2">
    <div class="sec2-left"></div>
    <div class="sec2-right">
        <h1>A trusted system</h1>
        With the expertise of our technical team, we work to ensure that an asset is managed effectively. In addition to physical management, we also assist our clientele in income generating ventures such as leasing and related services.
    </div>
</div>

<!-- second section for mobile -->
<div class="sec2-mob">
    <div class="sec2-mob-left">
        <img src="../assets/manage2.jpg" alt="" class="sec2-mob-img">
    </div>
    <div class="sec2-mob-right">
          <h1>A trusted system</h1>
          <div> With the expertise of our technical team, we work to ensure that an asset is managed effectively. In addition to physical management, we also assist our clientele in income generating ventures such as leasing and related services.</div>
    </div>
</div>
<br><br>
<!-- third section -->
<div class="sec3">
    <div class="button2">
        <router-link to="/invest-form" class="button2-text"> Reqest for management services </router-link>
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

.space1{
    display: none;
}

.button1{
    background-color: #048474;
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
    background-image: url('../assets/manage2.jpg');
    background-size: 533px 439px;
    margin: 30px;
    border-radius: 20px;
}

.sec2-right{
    padding: 110px;
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
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
    cursor: pointer;
    text-decoration: none;
}

.button2-text{
    color: black;
    text-decoration: none;
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
    font-family: 'Josefin Sans', sans-serif;
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
    display: grid;
    grid-template-columns: 50% 50%;
}

.sec2-mob-left{
    padding: 20px;
}

.sec2-mob-img{
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-top: 30px;
}

.sec2-mob-right{
    padding: 30px;
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
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
}


.space1{
    display: inherit;
}

}


</style>