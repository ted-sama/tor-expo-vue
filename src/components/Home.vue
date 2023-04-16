<script setup>
import Section from "./Section.vue";
import Creators from "./Creators.vue";
import TimePattern from "./TimePattern.vue";
</script>

<template>
  <div class="pt-48 flex flex-col mb-60">
    <div id="tor_logo" class="flex flex-row items-center">
      <div class="flex justify-center items-center">
        <img class="object-center" src="../assets/images/tor_logo.png" alt="" />
      </div>
      <h1 class="ml-6 text-center uppercase font-extrabold text-9xl">Tor</h1>
    </div>
    <p class="mt-8 text-3xl max-w-3xl">
      Tor est un réseau informatique anonyme et gratuit qui permet de se cacher
      derrière des serveurs intermédiaires. Protéger sa vie privée et son
      anonymat sur internet, c'est l'objectif premier de Tor.
    </p>
  </div>
  <div data-aos="zoom-in" data-aos-offset="350">
    <img
      class="rounded-xl"
      src="../assets/images/tor-project-logo-onions.png"
      alt="tor_project"
      loading="lazy"
    />
  </div>
  <div id="history" class="mb-36">
    <h2 class="text-6xl font-extrabold mt-20 mb-10">Histoire</h2>
    <Section
      text="Développé dans les années 1990 par des employés de l'armée américaine et notamment le mathématicien Paul Syverson 
      dans le but de protéger les communications militaires des écoutes et
        analyses de trafic."
      data-aos="fade-left"
      data-aos-offset="850"
      data-aos-mirror="true"
    />
    <div class="flex flex-row mb-16">
      <Section
        text="La première version de Tor est développée et publiée en 2002 par Roger Dingledine et
        Nick Mathewson"
        data-aos="fade-left"
        data-aos-offset="600"
        data-aos-mirror="true"
      />
      <div
        class="relative ml-32 text-2xl"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="600"
        data-aos-mirror="true"
      >
        <ul>
          <li class="timeline pl-6 pb-6">
            <span class="text-tor-purple font-extrabold">Septembre 2002</span> :
            Version alpha du projet TOR.
          </li>
          <li class="timeline pl-6 pb-6">
            <span class="text-tor-purple font-extrabold">2004</span> : le Naval
            Research Laboratory publie Tor sous licence libre.
          </li>
          <li class="timeline pl-6 pb-6">
            <span class="text-tor-purple font-extrabold">Décembre 2006</span> :
            création de The Tor Project, organisation à but non lucratif qui a
            pour but de maintenir Tor.
          </li>
        </ul>
      </div>
    </div>
    <Creators />
  </div>
  <div id="onion-router" class="mb-36">
    <h2 class="text-6xl font-extrabold mt-20 mb-10">Routage en oignon</h2>
    <Section
      text="Le principe est de chiffrer le trafic dans plusieurs couches de chiffrement, 
      de sorte que chaque noeud du réseau ne peut voir que la couche de chiffrement 
      immédiatement supérieure et inférieure.
      "
      data-aos="fade-left"
      data-aos-offset="850"
      data-aos-mirror="true"
    />
    <div class="flex flex-row mb-32">
      <div
        class="relative text-2xl w-2/4"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-offset="600"
        data-aos-mirror="true"
      >
        <img
          class="rounded-xl"
          src="../assets/images/steps/step1.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <Section
        class="w-2/4"
        text="L'utilisateur récupère une liste de noeuds du réseau Tor, 
        comme dans un annuaire téléphonique, puis construit un circuit de noeuds 
        en les reliant les uns aux autres aléatoirement."
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-mirror="true"
      />
    </div>
    <div class="flex flex-row mb-32">
      <Section
        class="w-2/4"
        text="Ce circuit utilise le concept de chiffrement hybride. 
        En effet, chaque noeud possède une clé publique et une clé privée."
        data-aos="fade-left"
        data-aos-offset="600"
        data-aos-mirror="true"
      />
      <div
        class="relative text-2xl w-2/4"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="600"
        data-aos-mirror="true"
      >
        <img
          class="rounded-xl float-right"
          src="../assets/images/steps/step2.jpg"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
    <div class="flex flex-row mb-32">
      <div
        class="relative text-2xl w-2/4"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-offset="600"
        data-aos-mirror="true"
      >
        <img
          class="rounded-xl"
          src="../assets/images/steps/step3.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <Section
        class="w-2/4"
        text="Le noeud de sortie est le noeud qui reçoit le trafic de l'utilisateur.
        Il déchiffre le message et le transmet au serveur cible."
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-mirror="true"
      />
    </div>
    <Section
      class="w-2/4"
      text="Malgré l'anonymat permis (l'utilisateur ne peut pas être identifié), 
      l'adresse IP du noeud de sortie est connue. Ainsi, le serveur cible peut savoir que 
      l'utilisateur a utilisé Tor pour accéder à son site."
      data-aos="fade-left"
      data-aos-offset="600"
      data-aos-mirror="true"
    />
  </div>
  <div id="limitations" class="mb-36">
    <h2 class="text-6xl font-extrabold mt-20 mb-10">Limites de Tor</h2>
    <Section
      text="L'utilisation du JavaScript ou autre plugin comme Flash par exemple sur un site peut réveler 
      des informations sur l'utilisateur en contournant les précautions du réseau Tor."
      data-aos="fade-left"
      data-aos-offset="600"
      data-aos-mirror="true"
    />
    <Section
      text="L'utilisation de Tor peut être détectée par des attaques de type timing. 
      En effet, le temps de réponse d'un serveur peut être différent selon que l'utilisateur 
      utilise Tor ou non."
      data-aos="fade-left"
      data-aos-offset="600"
      data-aos-mirror="true"
    />
    <Section
      text="Egalement, selon certaines sources, la NSA aurait mis en place des noeuds Tor dans 
      le réseau pour collecter des informations sur les utilisateurs."
      data-aos="fade-left"
      data-aos-offset="600"
      data-aos-mirror="true"
    />
    <TimePattern />
  </div>
  <div id="controversies" class="mb-36">
    <h2 class="text-6xl font-extrabold mt-20 mb-10">Controverses</h2>
    <Section
      text="Tor peut être utilisé à des fins malveillantes de par son anonymat. En effet, 
      On peut retrouver des sites de ventes illégales, ou du contenu pédopornographique qui 
      suscitent des débats sur la légalité de Tor."
      data-aos="fade-left"
      data-aos-offset="600"
      data-aos-mirror="true"
    />
    <div class="flex flex-row mb-32">
      <div
        class="relative text-2xl w-2/4"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-offset="600"
        data-aos-mirror="true"
      >
        <img
          class="rounded-xl"
          src="../assets/images/onion-services.png"
          alt=""
          loading="lazy"
        />
      </div>
      <Section
        class="w-2/4"
        text="L'accès à ces sites est possible grâce à l'utilisation des Services Onions de Tor. 
        En effet, ces services permettent de créer des sites web anonymes et sécurisés, accessibles 
        uniquement via Tor."
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-mirror="true"
      />
    </div>
    <Section
      class="w-2/4"
      text="Ainsi, de nombreuses personnes affirment que Tor est un deep web ou dark web, 
      alors que ce n'est pas forcément le cas. En effet, Tor est un réseau anonyme, mais il n'est pas 
      nécessairement utilisé pour accéder à des sites illégaux."
      data-aos="fade-left"
      data-aos-offset="600"
      data-aos-mirror="true"
    />
  </div>
  <div id="how-to-use" class="mb-36">
    <h2 class="text-6xl font-extrabold mt-20 mb-10">Comment utiliser Tor ?</h2>
    <div class="flex flex-row mb-32">
      <div
        class="relative text-2xl w-2/4"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-offset="600"
        data-aos-mirror="true"
      >
        <img
          class="rounded-xl"
          src="../assets/images/tb-11-browser.jpg"
          alt=""
          loading="lazy"
          style="width: 80%"
        />
      </div>
      <Section
        class="w-2/4"
        text="Pour utiliser Tor, le navigateur Tor Browser est disponible sur Windows, MacOS et Linux. 
        C'est un navigateur basé sur Firefox, qui permet d'accéder au réseau Tor et qui possède d'autres 
        modifications pour protéger au mieux l'utilisateur."
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-mirror="true"
      />
    </div>
    <Section
      class="w-2/4"
      text="Il est également possible d'utiliser Tor sur Android."
      data-aos="fade-left"
      data-aos-offset="600"
      data-aos-mirror="true"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.timeline:not(:last-child)::before {
  position: absolute;
  top: 4px;
  left: 0;
  height: 100%;
  content: "";
  border-left: 3px solid white;
}
</style>
