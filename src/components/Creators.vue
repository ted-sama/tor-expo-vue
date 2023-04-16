<template>
  <div
    id="creators"
    class="bg-creators p-20 rounded-xl border-creators-border border-2"
  >
    <div class="flex flex-row justify-center space-x-20 mb-20 p-10">
      <div
        class="shrink-0 grow-0 rounded-full object-contain w-[300px] h-[300px]"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-mirror="true"
      >
        <img
          class="rounded-full object-cover w-[300px] h-[300px] hover:cursor-pointer"
          v-bind:class="{
            selected: currentView === 'Roger Dingledine',
          }"
          src="../assets/images/Roger_Dingledine.jpg"
          alt="Roger Dingledine"
          loading="lazy"
          @click="changeView('Roger Dingledine')"
        />
      </div>

      <div
        class="shrink-0 grow-0 rounded-full object-contain w-[300px] h-[300px]"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-offset="200"
        data-aos-mirror="true"
      >
        <img
          class="rounded-full object-cover w-[300px] h-[300px] hover:cursor-pointer"
          v-bind:class="{
            selected: currentView === 'Paul Syverson',
          }"
          src="../assets/images/Paul_Syverson.jpg"
          alt="Paul Syverson"
          loading="lazy"
          @click="changeView('Paul Syverson')"
        />
      </div>

      <div
        class="shrink-0 grow-0 rounded-full object-contain w-[300px] h-[300px]"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-offset="200"
        data-aos-mirror="true"
      >
        <img
          class="rounded-full object-cover w-[300px] h-[300px] hover:cursor-pointer"
          v-bind:class="{
            selected: currentView === 'Nick Mathewson',
          }"
          src="../assets/images/Nick_Mathewson.png"
          alt="Nick Mathewson"
          loading="lazy"
          @click="changeView('Nick Mathewson')"
        />
      </div>
    </div>
    <div id="creators-biography">
      <h1
        v-bind:key="currentView"
        class="text-6xl font-extrabold mb-10"
        data-aos="fade-left"
      >
        {{ currentView }}
      </h1>
      <div
        v-if="currentView === 'Roger Dingledine'"
        class="text-2xl"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-mirror="true"
      >
        <p>
          Roger Dingledine est un informaticien américain né en 1974. Il est
          surtout connu pour être l'un des créateurs de Tor, un réseau de
          communication anonyme sur Internet.
          <br />
          <br />
          Dingledine a étudié à l'Université de Maryland, où il a obtenu un
          diplôme en physique en 1996 et un diplôme en informatique en 2000.
          Après avoir travaillé pour plusieurs entreprises de technologie, il a
          cofondé le projet Tor en 2002 avec Nick Mathewson et Paul Syverson.
          <br />
          <br />
          Le but de Tor était de permettre aux utilisateurs d'Internet de
          communiquer de manière anonyme et de protéger leur vie privée.
          Aujourd'hui, Tor est utilisé par des millions de personnes dans le
          monde entier, y compris des militants des droits de l'homme, des
          journalistes et des utilisateurs soucieux de leur vie privée.
          <br />
          <br />
          Dingledine est resté très impliqué dans le projet Tor au fil des ans,
          en tant que développeur principal et en tant que porte-parole du
          projet. Il a également travaillé sur d'autres projets de sécurité
          informatique, notamment la sécurité des réseaux sans fil.
          <br />
          <br />
          Pour son travail sur Tor, Dingledine a reçu plusieurs prix, dont le
          prix EFF Pioneer Award en 2011 et le prix Levchin en 2012.
        </p>
      </div>
      <div
        v-else-if="currentView === 'Paul Syverson'"
        class="text-2xl"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-mirror="true"
      >
        <p>
          Paul Syverson est un scientifique en informatique américain né en
          1959. Il est surtout connu pour être l'un des créateurs de Tor, un
          réseau de communication anonyme sur Internet.
          <br />
          <br />
          Syverson a étudié à l'Université de la Pennsylvanie, où il a obtenu un
          diplôme en informatique en 1982, suivi d'une maîtrise en informatique
          en 1985 et d'un doctorat en informatique en 1990. Il a ensuite
          travaillé pour la Marine américaine, où il a dirigé plusieurs projets
          de recherche en sécurité informatique.
          <br />
          <br />
          En 2002, Syverson a cofondé le projet Tor avec Roger Dingledine et
          Nick Mathewson. Le but de Tor était de permettre aux utilisateurs
          d'Internet de communiquer de manière anonyme et de protéger leur vie
          privée. Aujourd'hui, Tor est utilisé par des millions de personnes
          dans le monde entier, y compris des militants des droits de l'homme,
          des journalistes et des utilisateurs soucieux de leur vie privée.
          <br />
          <br />
          Syverson a également travaillé sur d'autres projets de sécurité
          informatique, notamment sur des méthodes de cryptage et de sécurité
          des réseaux. Il a publié de nombreux articles scientifiques sur ces
          sujets et est reconnu comme l'un des principaux experts en sécurité
          informatique.
          <br />
          <br />
          Syverson a reçu plusieurs prix pour son travail, notamment le prix
          Levchin en 2012 pour son travail sur Tor. Il a également travaillé
          pour le gouvernement américain en tant que consultant en sécurité
          informatique et a enseigné à l'Université de l'Indiana et à
          l'Université de la Pennsylvanie.
        </p>
      </div>
      <div
        v-else-if="currentView === 'Nick Mathewson'"
        class="text-2xl"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-mirror="true"
      >
        <p>
          Nick Mathewson est un informaticien américain né en 1974. Il est
          surtout connu pour être l'un des créateurs de Tor, un réseau de
          communication anonyme sur Internet. <br /><br />

          Mathewson a étudié à l'Université de la Floride, où il a obtenu un
          diplôme en mathématiques en 1996. Il a ensuite obtenu un diplôme en
          informatique à l'Université de Washington en 2004. Pendant ses études,
          il a travaillé sur des projets liés à la sécurité informatique et à la
          cryptographie. <br /><br />

          En 2002, Mathewson a rejoint Roger Dingledine et Paul Syverson pour
          fonder le projet Tor. Le but de Tor était de permettre aux
          utilisateurs d'Internet de communiquer de manière anonyme et de
          protéger leur vie privée. Aujourd'hui, Tor est utilisé par des
          millions de personnes dans le monde entier, y compris des militants
          des droits de l'homme, des journalistes et des utilisateurs soucieux
          de leur vie privée. <br /><br />

          Mathewson est resté très impliqué dans le projet Tor au fil des ans,
          en tant que développeur principal et en tant que porte-parole du
          projet. Il a également travaillé sur d'autres projets de sécurité
          informatique, notamment la recherche sur les réseaux d'anonymat.
          <br /><br />

          Pour son travail sur Tor, Mathewson a reçu plusieurs prix, dont le
          prix EFF Pioneer Award en 2011 et le prix Levchin en 2012. Il a
          également travaillé pour la Fondation pour les logiciels libres et a
          été membre du conseil d'administration de l'Internet Society.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentView: "Roger Dingledine",
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    },
  },
};
</script>

<style lang="scss">
.selected {
  @apply border-8 border-tor-purple;
  transition: all 0.5s ease;
}
</style>
