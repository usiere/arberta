<template>

<div>
  <TopBar class="topbar" />

<!-- grey section -->
<div class="grey-sec">

</div>
<!-- main page -->
    <!-- grid section -->
    <div class="main-grid">
        <div class="main-grid-left">
            <br><br> 
            <!-- will remove this soon -->
            <!-- text 1 -->
           <h3 class="main-text1"> Verify properties in Nigeria from the diaspora.</h3>
            <!-- text 2 -->
            <h6 class="main-text2">Providing access to the Nigerian property market from any where in the world. Enabling seamless verification, supervision and asset management services.</h6> <br>
             <!-- get started button -->
             <router-link to="/verify" class="main-btn">
                  <span class="btn-text">Get started </span>
             </router-link>

        </div>
        <div class="main-grid-right"></div>
</div>
<!-- 
main grid for mobile version -->
<div class="main-mobile">
    <div class="mobile-grid">
        <div class="mobile-grid-lef main-text1">Verify properties in Nigeria from the diaspora.</div>
        <div class="mobile-grid-right"><img src="../assets/family-mobile.jpg" class="main-img-mobile" alt=""></div>
    </div>
    <div class="main-mobile-layer2 main-text2">Providing access to the Nigerian property market from any where in the world. Enabling seamless verification, supervision and Asset management services.</div>
       <router-link to="/verify" class="main-btn">
                  <span class="btn-text">Get started </span>
             </router-link>

    <div></div>
</div>

<!-- grey section 2 -->
<div class="grey-sec2">
    <div class="sec2-text">
        <h1 class="sec2-text1">Enabling real estate investment across Nigeria.</h1>
    </div>
        <h1 class="sec2-text2">At Arberta, we enable Nigerians in the diaspora to invest in real estate through our services.</h1>
            <div class="sec2-btns">
         <router-link to="/verify" class="sec2-btn1">
                  <span class="btn-text">Verication </span>
         </router-link>
         <router-link to="/supervise" class="sec2-btn2">
                  <span class="btn-text">Supervision </span>
         </router-link>
         <router-link to="/invest" class="sec2-btn3">
                  <span class="btn-text">Management </span>
         </router-link>
        </div>
            <router-link to="/invest" class="sec2-btn3-mob">
                  <span class="btn-text">Management </span>
            </router-link>
</div>

<!-- section 3 -->
<div class="sec3">
    <div class="sec3-grid1">
        <div class="sec3-img"></div>
        
    </div>
    <div class="sec3-grid2">
         <h3 class="main-text1"> Be part of the Nigerian real estate market.</h3>
            <!-- text 2 -->
            <h6 class="main-text2">The Nigerian real estate sector is growing as alot of opportunities are available than ever before. At Arberta, we offer services to ease the process by which Nigerians in the diaspora participate in Nigerian real estate. </h6> <br>
    </div>

</div>

<!-- section-3 for mobile -->
<div class="sec3-mob">
<div class="sec3-mob-grid">
    <div class="sec3-mob-grid1">
        <img src="../assets/couple-mobile.jpg" class="sec3-img-mobile" alt="">
    </div>
    <div class="sec3-mob-grid2">
        <h1 class="sec3-mob-text1">Be part of the Nigerian real estate market.</h1>
    </div>
</div>
<div class="sec3-mob-text2">
        The Nigerian real estate sector is growing as alot of opportunities are available than ever before. At Arberta, we offer services to ease the process by which Nigerians in the diaspora participate in Nigerian real estate.
</div>
</div>

<!-- section 4  -->
<div class="sec4">
    <br>
    <h1 class="case-heading">User Cases</h1>
    <!-- grid container  -->
    <div class="grid-container">
        <div class="grid-row1">

               <div class="inner-box case1">
                <div class="inner-box-top2">
                </div>
                <div class="inner-box-bottom">Living overseas and finding it diffciult to purchase a property in Nigeria <br><br>
                    <router-link to="/case2" class="inner-box-button">More</router-link>
                </div>
                
            </div>

            <div class="inner-box case2">
                <div class="inner-box-top1">
                    <!-- <img src="../assets/images/cat1.svg" alt="" width="100px" height="100px">  -->
                </div>
                <div class="inner-box-bottom">Having issues related to legitimizing a property before purchase in Nigeria <br><br>
                    <router-link to="/case1" class="inner-box-button">More</router-link>
                </div>
                
            </div>

               <div class="inner-box case3">
                <div class="inner-box-top3">
                </div>
                <div class="inner-box-bottom">Experiencing difficulty in managing purchased properties from overseas? <br><br>
                    <router-link to="/case3" class="inner-box-button">More</router-link>
                </div>
                
            </div>

            <div class="inner-box case4">
                <div class="inner-box-top4">
                    <!-- <img src="../assets/images/cat1.svg" alt="" width="100px" height="100px">  -->
                </div>
                <div class="inner-box-bottom">
                    Need to get information/ advisory on the properties needed to purchase? <br><br>
                    <router-link to="/case4" class="inner-box-button">More</router-link>
                </div>
                
            </div>

               <div class="inner-box case5">
                <div class="inner-box-top5">
                </div>
                <div class="inner-box-bottom">Need assistance in the supervision of a property currently under development? <br><br>
                    <router-link to="/case5" class="inner-box-button">More</router-link>
                </div>
                
            </div>

               <div class="inner-box case6">
                <div class="inner-box-top6">
                </div>
                <div class="inner-box-bottom">Want to buy a property in Nigeria but having finance problems? <br><br>
                    <router-link to="/case6" class="inner-box-button">More</router-link>
                </div>
                
            </div>
        </div>
        <!-- <div class="grid-row2">
            <div class="inner-box">1</div>
            <div class="inner-box">1</div>
            <div class="inner-box">1</div>
        </div> -->
    </div>

</div>
 <!-- section 5 - for events -->
<h1 class="case-heading">Upcoming Events</h1>
<div class="event">
    <div class="event-left"></div>
    <div class="event-right">
        <h1 class="event-text1">Investing in Nigerian real estate as a diasporan</h1>
        <h3 class="event-text2">With panelists from top real estate firms in Nigeria, this event is tailored to instruct on the benefits, strategies and processes of investing in Nigerian real estate as a diasporan.</h3>
        <button class="event-button" v-b-modal.event-modal>Register</button>
    </div>
</div>

<hr>
<!-- Quote -->
<div class="quote">
    "We discovered an issue in the procedure for Nigerians at home and in the diaspora to manage property investments effectively. From the documentation/ verification process, the trust of supervision and down to securely managing real estate investments. In the end, the process involved ends up being unsuccessful because of the tedious conditions. The solution to these problems is the beauty of Arberta services." <br>
    <br>
    
    <h6 class="quote-person">Managing Partner, Arberta</h6>
</div>

<!-- Modal -->
<div>

  <b-modal id="event-modal" title="Event" hide-footer>
    <p class="my-4">Event details are not set</p>
  </b-modal>
</div>



<!-- section 6 - partners -->
<!-- <h1 class="case-heading">Partners</h1> -->

<!-- footer -->
<footer class="footer">All rights reserved. Arberta. © 2021.</footer>

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

/* keyframes */
@keyframes anim-text1 {
	0% {
        position: relative;
		bottom: 30px;
	}
	100% {
        position: relative;
		bottom: 0px;
	}
}

@keyframes anim-text2 {
	0% {
        position: relative;
		right: 30px;
	}
	100% {
        position: relative;
		right: 0px;
	}
}

@keyframes anim-button1 {
	0% {
        position: relative;
		right: 30px;
	}
	100% {
        position: relative;
		right: 0px;
	}
}

@keyframes anim-button21 {
	0% {
        position: relative;
		right: 50px;
	}
	100% {
        position: relative;
		right: 0px;
	}
}

@keyframes anim-button23 {
	0% {
        position: relative;
		left: 50px;
	}
	100% {
        position: relative;
		right: 0px;
	}
}

/* animations on a scroll */

@keyframes wipe-enter {
	0% {
		transform: scale(0, .025);
	}
	50% {
		transform: scale(1, .025);
	}
}

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

.grey-sec{
    width: 100%;
    height: 16px;
    background-color: #C4C4C4;
    position: relative;
}

.main-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    height: 550px;

}

.main-grid-left{
    padding: 80px;
}

.main-text1{
    font-size: 48px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    animation: anim-text1 1s ease-in;

}

.main-text2{
    color: #877C7C;
    font-size: 21px;
    font-family: 'Josefin Sans', sans-serif;
    animation: anim-text2 1s ease-in;

}

.main-grid-right{
    background-image: url('../assets/family.jpg');
      background-size: 800px 572px;
}


.main-btn{
    background-color: white;
    width: 150px;
    color: black;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 16px;
    border: 1px solid black;
    text-decoration: none;
    animation: anim-button1 1s ease-in;
}

.main-btn:hover{
    color: white;
    background-color: #6CB0BF;
    border: none;
}

 .main-mobile{
        display: none;
    }


.btn-text{
    font-size: 18px;
}

.grey-sec2{
    background-color: #EFECEC;
    width: 100%;
    height: 180px;
    padding: 30px;
    border-top: 1px solid #C4C4C4;

}

.sec2-text{
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;

}

.sec2-text1{
    color: #633939;
    font-size: 30px;
    margin-left: 30px;
    font-family: 'Josefin Sans', sans-serif;
}

.sec2-text2{
    color: #8a6868;
    font-size: 20px;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
}

.sec2-btns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 230px;
    margin-right: 230px;
}

.sec2-btn1{
      background-color: #E0D7D7;
    width: 150px;
    color: white;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 16px;
    border: none;
    text-decoration: none;
    animation: anim-button21 1s ease-in;
}

.sec2-btn1:hover{
    background-color: grey;
}

.sec2-btn2{
      background-color: #E27575;
    width: 150px;
    color: white;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 16px;
    border: none;
    text-decoration: none;
}

.sec2-btn2:hover{
    background-color: red;
}

.sec2-btn3{
     background-color: #D2E3CA;
    width: 150px;
    color: white;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 16px;
    border: none;
    text-decoration: none;
    animation: anim-button23 1s ease-in;
}

.sec2-btn3:hover{
    background-color: green;
}

 .sec2-btn3-mob{
    display: none;
       background-color: #D2E3CA;
    width: 150px;
    color: white;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 16px;
    border: none;
    text-decoration: none;
}

.sec3{
    width: 100%;
    height: 450px;
    display: grid;
    grid-template-columns: 50% 50%;
}

.sec3-mob{
    display: none;
}


.sec3-grid1{
    margin-top: 10px;
    margin-left: 150px;
    margin-right: 150px;
}

.sec3-grid2{
    padding: 80px;
}

.sec3-img{
    margin-top: 30px;
    height: 400px;
    background-image: url('../assets/couple-mobile.jpg');
    background-size: 420px 400px;
    border-radius: 10px;
}

.sec4{
    width: 100%;
    height: 800px;
    border-radius: 10px;
    margin: 40px auto;
    background-color: whitesmoke;
}

.case-heading{
    /* margin: 20px auto;
    position: relative;
    left: 500px; */
    text-align: center;
    padding: 10px;
    font-family: 'Josefin Sans', sans-serif;
}


.case4-1{
    display: none;
}



.grid-row1{
    width: 100%;
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
 
}

.grid-row2{
    display: grid;
    grid-template-columns: 33% 33% 33%;
}

.inner-box{
    height: 300px;
    width: 260px;
    /* margin-left: 90px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: white;
}

.inner-box-n{
    height: 300px;
    width: 230px;
    /* margin-left: 90px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    border-radius: 15px;
    display: none;
    flex-direction: column;
    background-color: white;
}

.inner-box:hover{
   background-image: none;
   opacity: 80%
}

.inner-box-top1, .inner-box-top2, .inner-box-top3, .inner-box-top4, .inner-box-top5, .inner-box-top6{
    width: 230px;
    height: 180px;
    margin: auto;
}

.inner-box-top1{
    /* background-image: url('../assets/overseas.jpg'); */
     background-image: url('../assets/case-icons/verify.png');
    background-size: 200px 133px;
}

.inner-box-top2{
   background-image: url('../assets/case-icons/overseas.png');
    background-size: 200px 133px;
}

.inner-box-top3{
    /* background-image: url('../assets/drawing.jpg'); */
    background-image: url('../assets/case-icons/manage.png');
    background-size: 200px 133px;
}

.inner-box-top4{
    /* background-image: url('../assets/overseas.jpg'); */
     background-image: url('../assets/case-icons/advisory.png');
    background-size: 200px 133px;
}

.inner-box-top5{
   background-image: url('../assets/case-icons/supervise.png');
    background-size: 200px 133px;
}

.inner-box-top6{
    /* background-image: url('../assets/drawing.jpg'); */
    background-image: url('../assets/case-icons/finance.png');
    background-size: 200px 133px;
}

.inner-box-bottom{
    width: 230px;
    height: 180px;
    padding-left: 30px;
    padding-right: 3px;
    padding-bottom: 20px;
    font-family: 'Josefin Sans', sans-serif;

}

.inner-box-button{
   background-color: white;
    width: 70px;
    height: 25px;
    color: black;
    padding: 7px;
    margin-left: 75px;
    border-radius: 10px;
    border: 1px solid black;
    text-decoration: none;
}


.inner-box-button:hover{
     background-color: #C4C4C4;
   color: white;
     border: none;
    text-decoration: none;
}

.event{
    height: 400px;
    width: 100%;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
      font-family: 'Josefin Sans', sans-serif;
}

.event-left{
    width: 200px;
    height: 133px;
    background-image: url('../assets/event1.jpg');
    background-size: 200px 133px;
    border-radius: 10px;
}

.event-right{
    width: 600px;
    height: 220px;
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
}

.event-text1{
    font-size: 30px;
    font-family: 'Josefin Sans', sans-serif;
}

.event-text2{
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
}

.event-button{
    background-color: turquoise;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 20px;
}

.event-button:hover{
    background-color: green;
    color: white;
}

.quote{
    padding-left: 400px;
    padding-right: 400px;
    margin-bottom: 30px;
    margin-top: 20px;
    font-style: italic;
    color: grey;
}

.quote-person{
    color: black;
    font-style: normal;
}


/* media query for mobile version */

@media screen and (max-width: 600px) {
    .main-grid{
        display: none;
    }

    .main-mobile{
        height: 520px;
        display: inherit;
    }

    .mobile-grid{
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .mobile-grid-right{
       padding-top: 80px;
    }

    .grid-row1{
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

}

    .grid-row2{
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

}

.main-text1{
    font-size:35px;
    padding: 15px;
}

.main-text2{
    color: #877C7C;
    font-size: 19px;
    padding: 25px;

}

.main-img-mobile{
    padding: 10px;
    width: 160px;
    height: 160px;
    border-radius: 20px;

}

.main-btn{
    margin-left: 120px;

}

.sec2-btns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 0px;
    margin-right: 0px;
}

.sec2-btn1{
  margin: 5px;
}

.sec2-btn2{
  margin: 5px;
}

.sec2-btn3{
  margin: 5px;
  display: none;
}

.sec2-btn3-mob{
    display: inherit;
    margin: auto;
}

.grey-sec2{
    background-color: #EFECEC;
    width: 100%;
    height: 320px;
    padding: 30px;
    border-top: 1px solid #C4C4C4;
    

}

.sec3{
    display: none;
}

.sec3-mob{
    display: inherit;
    width: 100%;
    height: 280px;
    padding: 20px;
}

.sec3-mob-grid{
    display: grid;
    grid-template-columns: 50% 50%;
}


.sec3-mob-text1{
    margin-top: 10px;
    font-size: 30px;
    padding: 5px;
     font-family: 'Josefin Sans', sans-serif;
}

.sec3-mob-text2{
    padding: 10px;
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
}

.sec3-img-mobile{
    padding: 10px;
    width: 160px;
    height: 161px;
    border-radius: 20px;

}

.sec4{
    width: 100%;
    height: 1150px;
}

.case4{
    display: none;
}

.inner-box-n{
    display: flex;
}

.event{
    height: 600px;
    width: 100%;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.event-left{
    width: 320px;
    height: 213px;
    background-image: url('../assets/event1.jpg');
    background-size: 320px 213px;
}

.event-right{
    width: 320px;
    height: 320px;
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
}

.inner-box{
    height: 300px;
    width: 190px;
    /* margin-left: 90px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: white;
}

.inner-box-button{
    margin-left: 45px;
   
}

.inner-box-bottom{
    width: 230px;
    height: 180px;
    padding-left: 10px;
    padding-right: 3px;
    padding-bottom: 20px;
    font-size: 15px;

}


.sec2-text2{
    color: #877C7C;
    font-size: 15px;
    text-align: center;
}


.sec2-btn1{
      background-color: #E0D7D7;
    width: 130px;
    color: white;
    padding-left: 27px;
    padding-right: 27px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 16px;
    border: none;
}

.quote{
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
    margin-top: 20px;
    font-style: italic;
    color: grey;
}

    
}


.footer{
    width: 100%;
    color: white;
    padding: 10px;
    background-color: black;
    position: sticky;
}
  
  


</style>