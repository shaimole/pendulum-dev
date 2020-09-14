<template>
  <div class="characterCardContainer">
    <div class="cardContent">
       <b-card v-b-modal.characterCreation v-if="isAdd"  @click="createNewCharacter" bg-variant="white" header="Neu" text-variant="dark" img-src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-27.jpg" img-center img-alt="Image" img-height="170" img-width="110">
      <NewCharacter/>
      </b-card>
      <b-card v-else bg-variant="dark" :header="character.name" text-variant="white" img-src="http://www.blackwyrmlair.net/~chevar/Portraits/JPG/M0002L.jpg" img-center img-alt="Image" img-height="170" img-width="110">
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: { character: Object, isAdd: Boolean },
  methods: {
    ...mapActions([
      'createNewCharacter'
    ])
  }
}
</script>
<style scoped>
.card-body {
  display: none;
}
.card-deck .card {
    flex: 1 0 0%;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
}
.bg-dark {
    background-color: black !important;
}
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

.characterCardContainer {
  width: fit-content;
  height: 10px;
  margin-left: 5em;
  margin-right: 2em;
  margin-bottom: 200px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 40px 2px rgba(0,0,0,0.4);
  background: #000;
  transform-origin: center center 0px;
  transition: all 0.5s ease-out;
  animation-name: animate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  transform: perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg);
  z-index: 1;
}
.characterCardContainer:hover {
  animation: unset;
  margin-top: 18vh;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.characterCardContainer .cardContent {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 110px;
  height: 100%;
}
@-moz-keyframes animate {
  0% {
    margin-top: 20vh;
  }
  50% {
    margin-top: 18vh;
  }
  100% {
    margin-top: 20vh;
  }
}
@-webkit-keyframes animate {
  0% {
    margin-top: 20vh;
  }
  50% {
    margin-top: 18vh;
  }
  100% {
    margin-top: 20vh;
  }
}
@-o-keyframes animate {
  0% {
    margin-top: 20vh;
  }
  50% {
    margin-top: 18vh;
  }
  100% {
    margin-top: 20vh;
  }
}
@keyframes animate {
  0% {
    margin-top: 20vh;
  }
  50% {
    margin-top: 18vh;
  }
  100% {
    margin-top: 20vh;
  }
}

</style>
