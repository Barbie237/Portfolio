<script>
 
</script>

<template>
  <div class="vue-template">
    <div class="portfolio ">
      <div class=" pt-5 mx-auto d-flex justify-content-start">
        <nav class="navbar navbar-expand-lg  text-center">
          <div class="container-fluid">
            <a class="navbar-brand navBar text-white" href="#">Barbara._</a>
            <button class="navBar top navbar-toggler border border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navBar collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
            <a class="navBar navbar-brand text-white" href="#">Hire me</a>
            
          </div>
        </nav>
      </div>
        <div class="typewriter position-absolute text-center" style="padding-top: 700px;"  >
          <label ref="label1" class="text-white label1">{{ typedText1 }}<span :class="{'cursor': cursorVisible1}">|</span></label>
          <label ref="label2" class="text-white label2">{{ typedText2 }}<span :class="{'cursor': cursorVisible1 ? false : cursorVisible2}">|</span></label>
        </div>
    </div>
    
    <div class="container services">
      <div class=" ">

        <h1 class="pb-4 text-center ">What Services I'm Providing</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="../assets/img/designcode.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.

                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/designcode.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/designcode.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.  This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="work container">
      <h1 class="pb-4 text-center "> WORK</h1>
      <div class="card text-bg-dark">
        <img src="../assets/img/designcode.jpg" class="card-img" alt="...">
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>

    <div class="experience container">
      <h1 class="pb-4 text-center "> Professionnal Experience</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img src="../assets/img/codes.jpg" class="photo " alt="..."> -->
  </div>
  
</template>

<script>
  export default {
    name:"Landing Page",
    data() {
      return {
        typedText1: '',
        typedText2: '',
        cursorVisible1: true,
        cursorVisible2: false
      }
    }, 
    mounted(){
      this.typeWriter();
    }, 
    methods:{
    typeWriter() {
      var nom = 'Hello Im Barbara. A woman with a passion for code and technology';
      var nom_updated = `${nom.slice(0, 7)}'${nom.slice(7)}`;
      this.typeWriterHelper(nom_updated, 0, 'typedText1', this.$refs.label1)
      setTimeout(() => {
        this.typeWriterHelper('Frontend Developer | Full-Stack Developer', 0, 'typedText2', this.$refs.label2)
      }, 10000)
    },
typeWriterHelper(text, i, dataProperty, labelRef) {
      if (i < text.length) {
        this[dataProperty] += text.charAt(i)
        i++
        setTimeout(() => {
          this.typeWriterHelper(text, i, dataProperty, labelRef)
        }, 150)
      } else {
        if (dataProperty === 'typedText1') {
          this.cursorVisible1 = false
          this.cursorVisible2 = true
          labelRef.querySelector('span').style.display = 'none'
        } 
 
      }
    }
    }
  }
  
</script>

<style>
a.navbar-brand{
  font-size: 24px;
}
a.nav-link {
  font-size: 20px;
}
.typewriter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.typewriter label {
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid transparent;
  /* animation: blink-caret 0.75s step-end infinite; */
}
.label1{
  font-size: 40px;
}
.label2{
  font-size: 20px;
}
.cursor {
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  50% { opacity: 0; }
}
.services, .work, .experience {
  padding-top: 100px;
  padding-bottom: 90px;
}
 * {
    box-sizing: border-box;
    width: 100%;
    /* height: 100%; */
  }
  .photo{
    height:50%;
  }
  .portfolio{
    background-image: url("../assets/img/designcode.jpg") ;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    background-position: left;
    padding-bottom: 870px;
  }
  /* template {
    width: 100%;
    height: 100%;
  } */
@media (max-width: 991px) {
  .navBar{
    text-align: start;
  }
}
</style>
