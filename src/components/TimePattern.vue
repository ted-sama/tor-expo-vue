<template>
  <div
    id="time-pattern"
    class="bg-creators rounded-xl border-creators-border border-2"
    v-bind:class="{
      'px-20 py-20': isActive,
      ' px-20 py-5': !isActive,
    }"
  >
    <div
      id="title-container"
      class="flex cursor-pointer"
      @click="toggleActive()"
    >
      <h1
        class="text-4xl font-bold"
        v-bind:class="{
          'mb-10': isActive,
        }"
      >
        Les attaques time pattern
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 64 64"
        class="ml-2 mt-2 fill-white"
        v-bind:class="{
          'transform rotate-90': isActive,
        }"
      >
        <path
          d="M21.364,52.6l-2.861-2.861c-1.953-1.953-1.953-5.118,0-7.071L29.17,32L18.502,21.332c-1.953-1.953-1.953-5.118,0-7.071	l2.861-2.861c1.953-1.953,5.119-1.953,7.071,0l17.062,17.064c1.952,1.953,1.952,5.118,0,7.07L28.435,52.6	C26.482,54.553,23.316,54.553,21.364,52.6z"
        ></path>
      </svg>
    </div>
    <div id="time-pattern-overview">
      <div
        v-if="isActive === true"
        class="text-2xl"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-mirror="true"
      >
        <p>
          Une attaque de type "time pattern" sur un réseau Tor vise à identifier
          les utilisateurs d'un service caché en analysant les temps de
          connexion et les schémas de trafic. Cette attaque repose sur
          l'hypothèse que les utilisateurs se connectent aux services cachés à
          des moments précis et que leur comportement de navigation suit des
          schémas réguliers.
          <br />
          <br />
          Le but de l'attaque est d'observer les temps de connexion des
          utilisateurs et de les corréler avec les moments où le service caché
          est actif. En collectant des données sur les schémas de trafic,
          l'attaquant peut également déterminer les pages Web que l'utilisateur
          visite et les actions qu'il entreprend sur ces pages.
          <br />
          <br />
          Cette attaque peut être particulièrement efficace si l'attaquant
          contrôle plusieurs nœuds de sortie du réseau Tor. En effectuant des
          analyses de temps de connexion et de schémas de trafic à partir de ces
          nœuds de sortie, l'attaquant peut potentiellement identifier les
          utilisateurs d'un service caché.
          <br />
          <br />
          Pour se protéger contre les attaques de type "time pattern" sur le
          réseau Tor, les utilisateurs peuvent éviter de se connecter à des
          moments réguliers et varier leur comportement de navigation. Les
          propriétaires de services cachés peuvent également modifier leurs
          heures d'activité pour rendre plus difficile la corrélation des temps
          de connexion des utilisateurs. Enfin, l'utilisation d'un VPN en
          conjonction avec le réseau Tor peut également aider à protéger la vie
          privée des utilisateurs.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimePattern",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang=""></style>
