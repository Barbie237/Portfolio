<template>
  <div class="vue-template">
    <!-- <div  style="margin-left: 10px" class="spinner-border text-primary ml-5" role="status">
        <span class="visually-hidden">load</span>
      </div> -->
    <div class="portfolio ">

      <img src="../assets/img/me.png" class="rounded-pill float-start img-fluid" alt="" style="width: 500px; margin-right:30px; margin-top:90px"/>
        <div class="typewriter position-absolute text-center" style="padding-top: 670px;"  >
          <label ref="label1" class="text-white fs-2 label1">{{ typedText1 }}<span :class="{'cursor': cursorVisible1}">|</span></label>
          <label ref="label2" class="text-white  fs-5">{{ typedText2 }}<span :class="{'cursor': cursorVisible1 ? false : cursorVisible2}">|</span></label>
          <a href="#contact"><img src="../assets/img/scroll_dow.png" class="scrollDown mx-auto pt-3" style="width:50px"/></a>
        </div>
    </div>
    
    <div class="container About_Me" id="About_Me">
      <div class="text-center pb-4 pt-5">
        <h1 class=""> About Me</h1>
        <label>Dans cette section, je vous en dirai un peu plus sur moi.</label>
        <!-- <span class="border-bottom border-2 w-50" style="background-color: #9b60d0; color:#9b60d0"></span> -->
        <hr class="w-25 mx-auto" style="background-color: #9b60d0; color:#9b60d0; padding-top:5px">
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4  pt-4">
        <div class="col">
          <h4>Developing With a Passion While Exploring The World.</h4>
          <hr class="w-25" style="background-color: #9b60d0; color:#9b60d0; padding-top:5px">
          <p class="text-justify">
            Née en 2001, je suis une jeune passionnée par tout ce qui est developpement web & mobile et design. 
            J'ai suivi trois années de formation professionnelle qualifiées dans le domaine qui m'ont permis d'acquérir 
            de multiples compétences et 
            quelques certifications qui m'ont aidé à étendre mes connaissances. 
            Je pense que pour la conception d'un site web il est nécéssaire d'avoir de bons fondements en
            design UI/UX. L'aspect visuel des interfaces doit respecter 
            plusieurs principes pour offrir une expérience utilisateur optimale. L'expérience globale de l'utilisateur (UX)
            lors de l'interaction avec un site web ou une application doit être fluide, 
            intuitive et agréable.  
          </p>
                <div class="d-flex"> 
        <img src="../assets/img/righdown.png" class="h-25" style="width: 50px;"/>&nbsp;&nbsp;&nbsp;
        <h5 class="pt-4 "> 
          <a :href="`CV_Anne_Barbara_Tebu.pdf`" download="download">CURRICULUM VITAE</a>
        </h5>
      </div>
        </div>
        <div class="col pt-5">
          <p class="pt-5">
            Toute fois, j'aime m'investir dans des actions bénévoles, surtout si elles sont à but humanitaire
            sociales et éducatif. J'aime les randonnées, le basketBall, la musique pop et World Music. Dans mes 
            heures libres, j'aime aussi faire des découvertes et faire du design. 
          </p>
        </div>
        <div class="col">
          <!-- <div class=" "> -->
            <img src="../assets/img/Des.png" style="height:450px"  />
           <!-- </div> -->
        </div>
      </div>

    </div>
    <div class="container Expertize" id="Expertize">
      <div class=" ">
        <div class="text-center pb-4">
          <h1 class="text-center ">Expertize</h1>
          <label class="fs-8">Dans cette partie, je parlerai plus en détail des services que je fournis et d'autres choses.</label>  
          <hr class="w-25 mx-auto" style="background-color: #9b60d0; color:#9b60d0; padding-top:5px">
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="../assets/img/UI-UX.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Designer UI/UX</h5>
                <p class="card-text"> Pour assurer un bon aspect visuel et une meilleure expérience utilisateur, j'interprète les données de recherche et je transforme les insights en solutions de design esthétiquement, plaisantes et fonctionnelles à l'aide d'outils comme Figma.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/WD.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Full-stack Web development</h5>
                <p class="card-text">Je suis en mesure de gérer tous les aspects du developpement web tels qui composent le Front-end et le back-end.J'ai une parfaite maitrise des frameworks vue.js, react.js et next.js en front-end et node.js et django en back-end.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/img/SF.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Software Development</h5>
                <p class="card-text">Que ce soit l'analyse des besoins, la conception, 
                le developpement(selon le langage et la technologie souhaitée), test, deploiement, maintenance et support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="work container" id="work">
        <h1 class="text-white" style="font-size: 50px;"> MY <br>WORK</h1>
        <hr class="" style="background-color: #9b60d0; color:#9b60d0; padding-top:5px; width:150px">
        <div class="row ">
          <div class="col text-white">
            Cette section présente une s2rie de projet que j'ai eu à 
            effectué ou participer à la mise sur pieds.<br><br>
            Les deux premiers projets représente un ensemble de projets développés en divers langages de programmations ou frameworks. 
            Tandis que le second représente un projet sur figma où je conçois mes 
            sites web avant de les developper à travers l'outil de conception Figma. 
          </div>
          <div class="col text-center "><h5 class="text-white">Featured Projects</h5>
            <h5 class="text-white">Ecommerce App</h5>
            <button class="btn btn-info" style="width: 10rem;"> Contact Me</button>
            <img src="../assets/img/fleche.png" class="w-75"/>
          </div>
          <div class="col">
            <img src="../assets/img/wor.jpg" class="w-100 h-75"/>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row align-items-center"> 
          <div class="col">
            <div class="card text-white"  >
              <img src="../assets/img/Dash.jpg" class="card-img " alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <!-- <div class="col"></div> -->
          <div class="col">
            <div class="card text-white"  >
              <img src="../assets/img/site.jpg" class="card-img" alt="...">
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
          <div class="row align-items-center  pt-3 pb-4">
            <div class="col d-flex justify-content-center ">
              <div class="card text-white" style="width: 40rem;">
                <img src="../assets/img/mvs.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title">DDD title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>


    <div class="experience container" id="experience">
      <h1 class="pb-4 text-center "> Professionnal Experience</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Dévelopeuse web et mobile
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <strong>De Février 2023 - Juillet 2024, Chez Agrix Tech.</strong> <br>
<i class="text-decoration-underline">Projet</i>:  <b>ODADO</b><br> une application Desktop d'auto-évaluation pour les ONG, facilitant la mesure, l'évaluation et le suivi des performances, ainsi que l'identification des axes d'amélioration dans le temps.<br>

<i class="text-decoration-underline">Tâches Réalisées:</i> <br>

&nbsp; * Implémentation de certaines Interfaces graphiques avec Vuejs;<br>

&nbsp; * Design d'interfaces à l'aide du css et bootstrap;<br>

&nbsp; * Participation à l'intégration des fonctionnalités d'auto-diagnostic;<br>

&nbsp; * Tests et débogage à travers des tests unitaires et d'intégration pour s'assurer du bon fonctionnement de l'application<br>

<i class="text-decoration-underline">-Environnement technique</i> : <b>ElectronJs,  Vuejs, Bootstrap , Git, GitHub, Trello, Linux, Méthodologie agile, Scrum.</b> <br><br>

<i class="text-decoration-underline">Projet</i>:  <b>OGPA</b><br> L’Outil de Gestion des Projets Agricoles (OGPA) est un outil numérique conçu pour la gestion des projets agropastoraux
constituée de deux applications : une application Mobile pour  la vérification des informations fournies par le producteur et la collecte des données de terrain utiles pour effectuer 
l’analyse de risques technique et financière d’un projet, et une application web qui sert à la gestion des producteurs, des projets, du suivi des projets, des utilisateurs, des zones et groupes, 
des tâches, du plan d’affaire, des spéculations, des recommandations et du tableau de bord.<br>

Parmi les 3 finalistes de la 7ᵉ édition du challenge App Afrique RFI, Pour Le Thème :

<b><< Le numérique au service de l'agriculture >></b><br>

Source:  <b>Article RFI challenge App </b><br>

<i class="text-decoration-underline">Tâches Réalisées</i> :<br>

&nbsp; * Implémentation des Interfaces graphiques avec Vuejs et Bootstrap;<br>

&nbsp; * Utilisation des librairies js telles que Chart.js pour le tableau de bord, google map pour la localisation des agriculteurs et agents, i18n pour la traduction et bien d’autres;<br>

&nbsp; * Implémentation et intégration d'APIs REST et fonctionnalités sous Cloud Function pour les Projets Agricoles stocké sur Firebase avec NodeJs;<br>

&nbsp; * Tests et débogage à travers des tests unitaires et d'intégration pour s'assurer du bon fonctionnement de l'application;<br>

&nbsp; * Participation à l'analyse des écarts pour une interopérabilité technique accompagné de la rédaction de certains documents tels que : procédures IT de test, procédure de test, guide utilisateurs de l'application et autres.;<br>

&nbsp; * Test des API et redaction de la documentation des API sur Postman et Swagger;<br>

&nbsp; * Participation aux brainstorming et à la résolution de problèmes techniques;<br>

Taille de l'équipe : 7 personnes.<br>

<i class="text-decoration-underline">-Environnement technique</i> :<b> Node.js, Git, GitHub, GitHub Action, Firebase(Firestore, RealTime DataBase, Firebase Hosting), Postman, Trello, Linux, Méthodologie agile Scrum.  </b>    </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Junior Software Engineer
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>D'Octobre 2022 à Février 2023 chez Transfo Africa.</strong><br>
              <i class="text-decoration-underline">Projet</i>:  Transfo Africa qui est le site web de l'entreprise.<br>
<i class="text-decoration-underline">Tâches Réalisées</i> :<br>

&nbsp; * Implémentation des Interfaces graphiques avec Html, css;<br>

&nbsp; * Intégration de Django pour afficher des données dynamiques du site et pour gérer les enregistrement.<br>

&nbsp; * Participation à l'intégration des fonctionnalites du site Web.<br>

&nbsp; * Tests et débogage à travers des tests unitaires et d'intégration pour s'assurer du bon fonctionnement du site.<br>

<i class="text-decoration-underline">-Environnement technique </i>:<b> Html,  css, Figma, Javascript, Bootstrap , Git, GitHub, Django, Trello, windows, Jira, Ms office 365, planner, Teams, Méthodologie agile, Scrum.</b>


            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Junior Software Engineer
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>De septembre 2022 à Décembre 2022, chez IZSoftwares.</strong><br/>
               <i class="text-decoration-underline">Projet</i>:<b> Projet d'apprentissage qui est un projet me permettant d'apprendre.</b> 
<i class="text-decoration-underline">Tâches Réalisées</i> :<br>
&nbsp; * Implémentation des Interfaces graphiques avec Reactjs, css;<br>

&nbsp; * Amélioration de ces interfaces à travers materialUI;<br>

&nbsp; * Suivie des tâches des développeurs sur Jira;<br>

<i class="text-decoration-underline">-Environnement technique </i>: <b> Reactjs,  css, Javascript, Jira, windows.</b>


            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact bg-black" id="contact">
      <div class="row text-white p-5">
        <div class="col-3">
          <h5>annebarbaratebu@gmail.com</h5>
          <div class="d-flex justify-content-center">
            <a href="https://web.facebook.com/profile.php?id=100008455458507"><img src="../assets/img/facebook.png"  style="width: 50px; height:50px"/></a>
            <a href="https://www.instagram.com/annebarbaratebu"><img src="../assets/img/instagram.png" style="width: 50px; height:50px"/></a>
            <a href="https://www.linkedin.com/in/anne-barbara-tebu-68b8a2215"><img src="../assets/img/linkedin.png" style="width: 50px; height:50px"/></a>
            <a href="https://x.com/anne_tebu"><img src="../assets/img/twitter.png" style="width: 50px; height:50px"/></a>
            <a href="https://github.com/Barbie237"><img src="../assets/img/github720.webp" style="width: 50px; height:50px"/></a>
          </div>
        </div>
        <div class="col-3"></div>
        <div class="col-2"></div>
        <div class="col-4">
          <h5>Disponible pour certaines opportunités freelance</h5>
          <br/>
          <p>
            Vous avez un projet passionnant pour lequel vous avez besoin d'aide ?
            Envoyez-moi un e-mail ou contactez-moi par messagerie instantanée !
          </p>
        </div>
      </div>
      <hr class="text-white bg-light" style="size:10px; padding-top: 2px;">
      <p class="text-center text-white">Copyright © 2024 Anne Barbara Tebu</p>
      aa
    </div>
<a href=""></a>
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
        cursorVisible2: false,
        // publicPath: process.env.BASE_URL

      }
    }, 
    mounted(){
      this.typeWriter();

    }, 

    computed: {
      isSubmittingPrj() {
        return useProjectStore().loading;
      },
    },
    
    methods: {
      typeWriter() {
        var nom = 'Hello Im Barbara. A passionate woman for code and design';
        var nom_updated = `${nom.slice(0, 7)}'${nom.slice(7)}`;
        this.typeWriterHelper(nom_updated, 0, 'typedText1', this.$refs.label1)
        setTimeout(() => {
          this.typeWriterHelper('Frontend Developer | Full-Stack Developer | Designer UI/UX', 0, 'typedText2', this.$refs.label2)
        }, 6000)
      },

      typeWriterHelper(text, i, dataProperty, labelRef) {
        if (i < text.length) {
          this[dataProperty] += text.charAt(i)
          i++
          setTimeout(() => {
            this.typeWriterHelper(text, i, dataProperty, labelRef)
          }, 100)
        } else {
          if (dataProperty === 'typedText1') {
            this.cursorVisible1 = false
            this.cursorVisible2 = true
            labelRef.querySelector('span').style.display = 'none'
          } 
  
        }
      },
    
    }
  }
  
</script>

<style>
.vue-template{
  scroll-behavior: smooth;
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
  /* font-size: 40px; */
}
.label2{
  font-size: 20px;
}
.cursor {
  animation: blink-caret 0.75s step-end infinite;
}

.scrollDown {
  /* animation: rotate 2s linear infinite; */
  animation: moveUpDown 2s ease-in-out infinite;
}

/* @keyframes rotate {
  to {
    transform: rotate(360deg);
  }
} */
 @keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px); /* Ajustez la valeur pour changer la distance de déplacement */
  }
}

@keyframes blink-caret {
  50% { opacity: 0; }
}
.Expertize, .work, .experience {
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
  .languageContainer {
  background-color: transparent;

}
  .portfolio{
    background-image: url("../assets/img/designcode.jpg") ;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    background-position: left;
    padding-bottom: 900px;
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
