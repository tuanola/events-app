<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">Volta ao Mundo</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contacts" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
      </div>
    </nav>

    <header class="bg-primary text-white">
      <div class="container text-center">
        <h1>Volta ao Mundo</h1>
        <p class="lead">Find Capoeira Angola event near you or plan your trip to learn and play capoeira!</p>
        <search></search>
      </div>
    </header>
    <div class="content">
      <div class="container">
        <router-view :list="list"></router-view>
      </div>
    </div>
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright © Volta ao Mundo 2017</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import {API_BASE} from './config'

  import search from './components/Search.vue'
  import events from './components/EventsList.vue'

  export default {
    name: 'app',
    data () {
      return {
        list: []
      }
    },

    components: {
      search,
      events
    },

    // Fetches events when the component is created
    created () {
      // this.list = [{"_id":"59d5f99c734d1d08b4e6615f","id":"4","name":"Permangola 2018","date":{"start":"2018-01-15","end":"2018-01-21"},"description":[{"lang":"pt","main":true,"text":"CONFIRMADO! <p> Permangola 2018 acontecerá de 15 à 21 de janeiro... não percam! Mais informações em breve... </p><p> Aulas e rodas de Capoeira Angola, confecção de caxixís e berimbaus, bioconstução, agrofloresta e permacultura </p><p>O que é o Permangola? <br>Permacultura + Capoeira Angola = Permangola </p><p> O Permangola é um evento realizado anualmente no Kilombo Tenondé. O objetivo é integrar a filosofia da Capoeira Angola com a ética e os princípios da permacultura, visando proporcionar o desenvolvimento humano de forma holística, onde corpo, mente, espírito e meio natural estão integrados. <p></p>Inscrição: R$450 até 10 dezembro 2017, R$550 depois <br>Incluso: área para acampamento e diária com 3 refeições"},{"lang":"en","main":false,"text":"<p>Capoeira Angola classes and rodas, caxixi and berimbau making, bioconstruction, forest-planting and permaculture.</p><p>What is Permangola?</p><p>Permaculture + Capoeira Angola = Permangola</p><p>Permangola is an event that takes place every year in Kilombo Tenondé. The goal is to integrate the philosophy of Capoeira Angola with the ethics and principles of permaculture in order to provide a holistic form of human development where body, mind, spirit and natural environment are integrated.</p><p>Price: R$450 until 10th Dec 2017, R$550 after</p><p>Included: camping space and 3 meals per day</p>"}],"place":{"space":"Kilombo Tenonde","country":"Brasil","region":"Bahia","city":"Valença"},"people":["mestre Cobra Mansa"],"group":"FICA","facebook":"https://web.facebook.com/events/1513698092044348","picture":{"main":{"url":"59d5f99c734d1d08b4e6615f-1.jpg"}}},{"_id":"59d5fb1b734d1d08b4e66275","id":"5","name":"Na Bahia tem Dendê 2018","date":{"start":"2018-01-26","end":"2018-01-28"},"description":[{"lang":"pt","main":true,"text":"<p>Sob o propósito de manter viva a tradição da Capoeira Angola da Bahia, herança ancestral cuja chama tem se mantido acesa graças à resistência dos antigos e atuais Mestres, Contramestres, professores e simpatizantes comprometidos com a preservação de sua identidade, convidamos os amigos e admiradores para o 2º Encontro Internacional de Capoeira Angola NA BAHIA TEM DENDÊ, no qual vivenciaremos mais um ciclo de resistência em favor da Capoeira Angola nos dias 26, 27 e 28 de Janeiro de 2018. </p><p> Este importante Evento propõe-se a reascender o relevante diálogo entre capoeiristas comprometidos com nossa arte, irmanados em favor do respeito a este patrimônio sem igual para a nossa cultura.  </p><p> Em breve maiores informações. </p><br><p>Valor do investimento 150 reais.</p><br> <p>Você é nosso (a) convidado (a)! <br> NA BAHIA TEM DENDÊ 2018! <br><br>COORDENAÇÃO GERAL: M. ROBERVAL, M. LAÉRCIO, M. PEZÃO, C.M THIAGO</p>"}],"place":{"country":"Brasil","region":"Bahia","city":"Salvador"},"people":["mestre Roberval","mestre Laercio","mestre Pezão","contramestre Thiago","mestre Caboré","mestre Valmir","mestre Ciro","mestre Gato Preto","contramestre Wilson","contramestre Guaxini","contramestre Aloan","contramestre Dija","contramestre Jorge","professora Nani"],"group":"FICA","facebook":"https://web.facebook.com/events/1977604392496579","picture":{"main":{"url":"59d5fb1b734d1d08b4e66275-1.jpg"}}},{"_id":"59ccb321734d1d341d3d6778","id":1,"name":"Chamada para o Mar Baltico","date":{"start":"2017-05-13","end":"2018-05-18"},"description":[{"lang":"en","main":true,"text":"The seminar is being postponed for the year 2018. <br> Best regards, <br>Grupo Capoeira Angola Sao Petersburgo"}],"place":{"country":"Russia","region":"St Peterburg","city":"St Peterburg"},"people":["mestre Cobra Mansa"],"group":"FICA","facebook":"web.facebook.com/events/362305030583289","picture":{"main":{"url":"59ccb321734d1d341d3d6778-1.jpg"}}}]
      axios.get(API_BASE)
        .then(response => {
          this.list = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style>
  .content {
    min-height: 400px;
    padding-top: 30px;
  }
</style>