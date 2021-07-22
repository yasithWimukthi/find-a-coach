<template>
    <div>
        <base-dialog :show="!!error" title="Sign up is failed" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <base-dialog fixed :show="isLoading" title="authenticating">
            <base-spinner></base-spinner>
        </base-dialog>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email" >E-mail</label>
                <input type="email" id="email" v-model.trim="email"/>
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password"/>
            </div>
            <p v-if="!isFormValid">Please enter a valid email and password. </p>
            <base-button>{{submitButtonCaption}}</base-button>
            <base-button type="button" mode="flat" @click="switchAuthMode">{{switchModeButtonCaption}}</base-button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'UserAuth',
    data(){
      return{
        email:'',
        password:'',
        isFormValid:true,
        mode:'login',
        error:null,
        isLoading:false
      }
    },
    methods:{
      async submitForm(){
        this.isFormValid = true;
        if (
          this.email === '' ||
          !this.email.includes('@') ||
          this.password.length < 6
        ){
            this.isFormValid = false;
            return;
        }

        this.isLoading = true;

        try{
          if(this.mode === 'login'){
            await this.$store.dispatch('login',{
              email: this.email,
              password: this.password
            });
          }else{
            await this.$store.dispatch('signUp',{
              email: this.email,
              password: this.password
            });
          }
          const redirectUrl = `/${this.$route.query.redirect || 'coaches'}`;
          await this.$router.replace(redirectUrl);
        }catch(error){
          this.error = error.message || 'Sign up was failed.';
        }

        this.isLoading = false;

      },
      switchAuthMode(){
        if (this.mode === 'login'){
          this.mode = 'signup';
        }else{
          this.mode = 'login';
        }
      },
      handleError(){
        this.error = null;
      }
    },
    computed:{
      submitButtonCaption(){
        if (this.mode === 'login'){
         return 'login';
        }else{
          return 'Sign Up';
        }
      },
      switchModeButtonCaption(){
        if (this.mode === 'login'){
          return 'Sign Up Instead';
        }else{
          return 'Login Instead';
        }
      }
    }
  };
</script>

<style scoped>
    form {
        margin: 0 auto;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 1rem;
        width: 50%;

    }

    .form-control {
        margin: 0.5rem 0;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        border: 1px solid #ccc;
        padding: 0.15rem;
    }

    input:focus,
    textarea:focus {
        border-color: #3d008d;
        background-color: #faf6ff;
        outline: none;
    }
</style>
