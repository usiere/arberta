<template>
  <div>
    <TopBar class="topbar" />

<!-- Information before the form -->
<div class="form-info" v-if="showForm">
  <h1 class="form-info-top">Verification request:</h1>
    <h6 class="form-info-bottom"> Fill in your details below, an Arberta representative will be in touch with you shortly.</h6>

</div>

<!-- End of the information -->
    <div class="inner1" v-if="showForm" >
          <b-form-group
        id="fieldset-1"
        description=""
        label="Full name"
        label-for="input-1"
        valid-feedback="Thank you!"
        
      >
        <b-form-input
          id="input-1"
          v-model="name"
          trim
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-1"
        description=""
        label="Email address"
        label-for="input-1"
        valid-feedback="Thank you!"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          trim
        ></b-form-input>
      </b-form-group>
      <div class="grid1">
        <b-form-group
          id="fieldset-1"
          description=""
          label="Phone number"
          label-for="input-1"
          valid-feedback="Thank you!"
        >
          <b-form-input
            id="input-1"
            v-model="phone"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          description=""
          label="Con. of residence"
          label-for="input-1"
          valid-feedback="Thank you!"
        >
          <b-form-input
            id="input-1"
            v-model="country"
            trim
          ></b-form-input>
        </b-form-group>
      </div>

   <b-form-textarea
      id="textarea"
      v-model="message"
      placeholder="Brief description of the property intended to verify"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <br>
     <div class="submit-button" @click="submit()">Send request</div>
   
    </div>

    <!-- success section -->
    <div class="sec-success" v-if="showSuccess">
             <font-awesome-icon :icon="['fas', 'check-circle']"  v-b-toggle.sidebar-1 class="success-icon"/> 
    </div>
    <div class="success-text" v-if="showSuccess">
               Your request has been sent, we will get in touch with you shortly.
             </div>
      <router-link to="/" class="home-button" v-if="showSuccess" >Home page</router-link>
  </div>
</template>


<style scoped>

.topbar{
    position:sticky;
    top: 0; /* required */
    background-color: white;
    opacity: 90%;
    z-index: 3;
}

.form_heading{
  font-size: 20px;
  font-weight: bold;
  color: grey;
  position: relative;
}

.form-info{
  padding-top: 70px;
  padding-left: 180px;
    font-family: 'Josefin Sans', sans-serif;
}

.form-info-top{

}

.form-info-bottom{

}

.inner1 {
  padding: 30px;
  height: 660px;
  width: 1000px;
  border-radius: 50px;
  /* border: 1px solid black; */
  display: inherit;
  position: relative;
  left: 150px;
   font-family: 'Josefin Sans', sans-serif;
}

.logo_con {
  padding: 10px;
}

.grid1 {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 50% 50%;
}

.user_icon{
  margin-left: 850px;
}

.submit-button{
    background-color: blue;
    text-decoration: none;
    color: white;
    width: 120px;
    height: 35px;
    padding: 7px;
    border-radius: 3px;
    margin: 5px;
    cursor: pointer;
    border-radius: 10px;
}


.submit-button:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
}

.sec-success{
  position: flex;
  justify-content: center;
  margin-left: 600px;
  margin-top: 200px;
}

.success-icon{
  color: green;
  font-size: 300px;
}

.success-text{
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  padding: 30px;
   margin-left: 300px;
    font-size: 30px;
}

.home-button{
  position: relative;
  left: 700px;
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;
}

.home-button:hover{
  background-color: green;
  color: white;
}

@media screen and (max-width: 600px) {
  .form-info{
  padding-top: 30px;
  padding-left: 20px;
    font-family: 'Josefin Sans', sans-serif;
}

  .inner1{
      width: 350px;
      position: relative;
      left: 10px;
  }

  .form-info-bottom{
    padding-left: 20px;
    padding-right: 20px;
  }

  .sec-success{
    padding: 60px;
    margin-top: 80px;
    margin-left: 80px;
  }

  .success-text{
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    padding-top: 20px;
    font-size: 30px;
     margin-left: 0px;

  }

  .success-icon{
  color: green;
  font-size: 100px;
}

.home-button{
  position: relative;
  left: 150px;
}

 
}



</style>


<script>
import axios from "axios"
import TopBar from "@/components/TopBar.vue";

export default {
	page: {
		title: 'Investment',
	},
   components: {
    TopBar,
  },

  data: function() {
    return {
      name: '',
      email: '',
      phone: '',
      country: '',
      message: '',
      showForm: true,
      showSuccess: false
            }
        },
       
   methods: {
      submit(){
        const client = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          country: this.country,
          message: this.message
        }

        // using axios to send data
        axios({
          method: 'post',
          url: 'http://localhost:3000/api/verify',
          data:  client
        }).then(
            this.showSuccess = true,
            this.showForm = false,
           console.log('i can see it')
        )

        console.log('this is the client'+ client)
      },

  }

}
</script>




// Email.js Credentials:
// Service ID: service_fkqj725
// tEMPLATE id : template_71zptoa
// User ID: user_EdHeqQ191ZxNgVX6y9Xuz