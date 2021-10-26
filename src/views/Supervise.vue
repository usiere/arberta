<template>

<div>
<TopBar class="topbar" />

<!-- main section -->
<div class="sec1">
    <!-- left section -->
    <div>
          <h1 class="sec1-text1">Development supervision</h1>
    <div class="sec1-text2">At Arberta, we assist individuals and organizations on the supervision of the property development process. 
       <span class="sec1-text2-2">In situations where the individual or organization is based outside of Nigeria, supervision of the property development process can appear difficult.</span>
        </div>
<br> <br> <br> 
<router-link to="/supervise-form" class="button1">Supervise</router-link>
    </div>

    <!-- right section -->
    <img src="../assets/illus/super-icon1.png" alt="" class="verify-icon">
  
</div>

<!-- second section -->
<div class="sec2">
    <div class="sec2-left"></div>
    <div class="sec2-right">
        <h1>Supervise remotely</h1>
        Experienced personnel that are up to the task to deliver detailed reports of property developments for our clientele. Our system enables diasporans to efficiently oversee the property developemnts remotely.
    </div>
</div>

<!-- second section for mobile -->
<div class="sec2-mob">
    <div class="sec2-mob-left">
        <img src="../assets/engineers.jpg" alt="" class="sec2-mob-img">
    </div>
    <div class="sec2-mob-right">
          <h1>Supervise remotely</h1>
          <div> Experienced personnel that are up to the task to deliver detailed reports of property developments for our clientele. Our system enables diasporans to efficiently oversee the property developemnts remotely.</div>
    </div>
</div>
<br><br>
<!-- third section -->
<div class="sec3">
    <h1 class="sec3-heading">Our process:</h1>
    <div class="sec3-main">
        <div class="sec3-sub">
            <h1 class="sec3-sub-label">1.</h1>
             <img src="../assets/illus/verify-icon1.png" alt="" class="sub-icon" >
            <h1 class="sec3-sub-text"> Collect relevant information about the property development from the client.</h1>
        </div>
        <div class="sec3-sub">
             <h1 class="sec3-sub-label">2.</h1>
             <img src="../assets/illus/verify-icon2.png" alt="" class="sub-icon">
             <h1 class="sec3-sub-text">A survey is carried out by our technical team on the property development and the stake holders involved.</h1>
            </div>
         <div class="sec3-sub">
              <h1 class="sec3-sub-label">3.</h1>
             <img src="../assets/illus/shield.png" alt="" class="sub-icon">
             <h1 class="sec3-sub-text">A schedule is drawn to organise reports for the daily activities to the clientele</h1>
           </div>
    </div>
<br><br>

    
    <div class="button2">
        <router-link to="/supervise-form" class="button2-text"> Request for supervision</router-link>
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
    background-color: darkblue;
    padding: 100px;
    display: flex;
    flex-direction: row;
}

.sec1-text1{
    color: white;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
   
}

.sec1-text2{
    color: white;
    width: 40%;
    height: 100px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1rem;
}

.button1{
    background-color: white;
    color: black;
    width: 60px;
    padding: 5px;
    border-radius: 5px;
    font-weight: 500;
    text-decoration: none;
}

.verify-icon{
 position: relative;
 width: 300px;
 height: 300px;

 right: 300px;
}

.sec2{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 450px;
}

.sec2-mob{
    display: none;
}

.sec2-left{
    background-image: url('../assets/engineers.jpg');
    background-size: 659px 439px;
    margin: 30px;
    border-radius: 20px;
}

.sec1-text2-2{
       color: white;
    width: 40%;
    height: 100px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1rem;

}

.sec2-right{
    padding: 110px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1rem;
   
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
    background-color: darkblue;
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
    height: 133px;
    border-radius: 10px;
    background-size: 659px 439px;
    margin-top: 120px;

}

.sec2-mob-right{
    padding: 30px;
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

/* .button1{
    display: none;
} */

}

@keyframes scroll1 {
	0% {
		transform: scale(0, .025);
	}
	50% {
		transform: scale(1, .025);
	}
}

</style>