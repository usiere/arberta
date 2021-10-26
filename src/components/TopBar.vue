<template>
    <div>
         <div class="topbar">
        <router-link class="main-logo" to="/">Arberta</router-link>
        <div>
                  <font-awesome-icon :icon="['fas', 'bars']" class="menu-icon" v-b-toggle.sidebar-1 />
        </div>
        <!-- displaying the navigation -->
        <div class="nav">
            <!-- <router-link class="nav-item" to="/">Home</router-link> -->
             <router-link class="nav-item" to="/verify">Verify</router-link>
             <router-link class="nav-item" to="/supervise">Supervise</router-link>
             <router-link class="nav-item" to="/invest">Manage</router-link>
             <router-link class="nav-item" to="/advisory">Advisory</router-link>
             <router-link class="nav-item-contact" to="/contact-form">Contact</router-link>
        </div>      
         </div>

          <!-- side bar -->
            <b-sidebar id="sidebar-1" title="" right shadow>
      <div class="px-3 py-2 nav-flex">
          <router-link  to="/" class="nav-item">Home 
           <!-- <font-awesome-icon :icon="['fas', 'bars']" class="menu-icon" v-b-toggle.sidebar-1 /> -->
          </router-link>
          <router-link  to="/verify" class="nav-item">Verify</router-link>
          <router-link  to="/supervise" class="nav-item">Supervise</router-link>
          <router-link  to="/invest" class="nav-item">Manage</router-link>
          <router-link  to="/advisory" class="nav-item">Advisory</router-link>
          <router-link to="/contact-form" class="nav-item-contact-mobile">Contact</router-link>

            <br><br><br>
          <div>
              
              <strong>All rights reserved. Arberta. © 2021.</strong>
          </div>
          
      </div>
    </b-sidebar>

    </div>
</template>

<script>
export default {
      name: "TopBar"
    
}
</script>

<style scoped>


.topbar{
    width: 100%;
    height: 46px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 0.1px solid grey;
    /* box-shadow: 3px 4px 6px 5px rgba(7,7,7,0.47) */
    position:sticky;
    top: 0; /* required */
    background-color: white;
    opacity: 90%;
    z-index: 3;

}

.main-logo{
    font-size: 33px;
    padding-left: 15px;
    padding-bottom: 15px;
    text-decoration: none;
    color: black;
}

  .menu-icon{
        display: none;
    }

.nav{
    display: flex;
    flex-direction: row;
    /* position: relative;
    left: 650px; */
    justify-content: space-between;
    font-weight: 100;
    color: #877C7C;
    margin-right: 20px;
    text-decoration: none;
    }

.nav-flex{
    display: flex;
    flex-direction: column;
}

.nav-item{
    font-size: 15px;
    margin-right: 70px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    color: #877C7C;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    flex-direction: row;
}


.nav-item:hover{
    color: black;
}

.nav-item-contact{
    background-color: blue;
    text-decoration: none;
    color: white;
    height: 35px;
    padding: 5px;
    border-radius: 3px;
    margin: 5px;
    cursor: pointer;
}

.nav-item-contact-mobile{
    background-color: blue;
    text-decoration: none;
    color: white;
    height: 35px;
    padding: 5px;
    border-radius: 3px;
    margin: 5px;
    cursor: pointer;
    width: 70px;
    position: relative;
    left: 20px;
    border-radius: 10px;
}

.nav-item-contact:hover{
    background-color:navy;
    color: white;
    height: 35px;
    padding: 5px;
    border-radius: 3px;
    margin: 5px;
}

 .router-link-exact-active {
color: black;
 }

@media screen and (max-width: 600px) {
    .nav{
        display: none;
    }

    .menu-icon{
        font-size: 25px;
        margin: 15px;
        cursor: pointer;
        outline: none;
        display: inherit;
    }

    .menu-icon:hover{
        color: black;

    }

    .nav-item{
        padding: 20px;
        color: black;
    }

    .nav-item:hover{
        color: grey;
    }

}



</style>