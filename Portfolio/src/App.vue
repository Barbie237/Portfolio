  <script>
  import HelloWorld from './components/HelloWorld.vue'
  
  export default {
    name: "App",
    components: {
      HelloWorld : HelloWorld
    },

    data() {
      return {
       showDropdown: false
      }
    }, 

    mounted() {
      debugger
      return this.$root.$i18n.locale
    },

    computed: {
       
    },

    methods: {      
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },

      async changeLanguage(locale) {
        debugger;
        // Save the locale in localForage
        //localStorage.setItem("locale", locale);
        this.$root.$i18n.locale = locale;
        this.toggleDropdown() //cache le droqdown after apres le  choix de la langue
        // const saveLanguage = locale;
        //save the language of the user automaticaly*************************
        localStorage.setItem("locale", locale);
        //save the language of the user automaticaly*************************
        // location.reload()
      },
    }

  }
  </script>

<template>
  <header>
    <div class="wrapper">
            <div class=" mx-auto d-flex justify-content-start">
        <nav class="navbar navbar-expand-lg  text-center">
          <div class="container-fluid">
            <a class="navbar-brand navBar text-white" href="#"><h1 style="color: #61cee2;">Barbara<i style="color:#ffffff">.</i><i style="color: #9b60d0;">__</i></h1></a>
            <button class="navBar top navbar-toggler border border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navBar collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active text-white active" aria-current="page" href="#About_Me">{{ $t('About') }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#Expertize">Expertize</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#work">Work</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" aria-disabled="true" href="#experience">Experience</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-white" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div class="navBar navbar-brand container  d-flex dropdown languageContainer   ">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img :src="this.$i18n.locale === 'fr' ? './ukFlag.png' : './frenchFlag.png'" alt="" width="30"
                  height="30" class="rounded-circle img-fluid " @click="toggleDropdown" style="width:50px"/>
              </button>
              <ul class="dropdown-menu leftDown" aria-labelledby="dropdownMenuButton1" >
                <li @click="changeLanguage('en')"><a class="dropdown-item" href="#"> <img src="./assets/img/ukFlag.png" alt=""
                  class="bout" style="width: 25px;" /> English</a></li>
                <li @click="changeLanguage('fr')"><a class="dropdown-item" href="#"> <img src="./assets/img/frenchFlag.png" alt=""
                  style="width: 25px;" class="bout" />
                  Français</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <HelloWorld />
    </div>
  </header>
 
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.vue-template{
  scroll-behavior: smooth;
}
a.navbar-brand{
  font-size: 24px;
}
.navbar{
  background-color: black;
}
a.nav-link {
  font-size: 20px;
}

.languageContainer {
  background-color: transparent;
  /* width: 190px; */
  /* margin: 50px */
  /* margin-right:200px */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
@media (max-width: 991px) {
  .navBar{
    text-align: start;
  }
}
</style>
