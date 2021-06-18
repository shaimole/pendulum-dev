<template>
  <span class="pulse"> </span>
</template>
<script>
export default {
  name: 'LoadingSpinner'
}
</script>
<style scoped>
.pulse {
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fcd097;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: pulse 1s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 #fee6c8;
  }
  50% {
    -webkit-box-shadow: 0 0 0 5px #fee6c8;
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 #fee6c8;
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 #fee6c8;
    box-shadow: 0 0 0 0 #fee6c8;
  }
  50% {
    -moz-box-shadow: 0 0 0 5px #fee6c8;
    box-shadow: 0 0 0 5px #fee6c8;
  }
  100% {
    -moz-box-shadow: 0 0 0 0 #fee6c8;
    box-shadow: 0 0 0 0 #fee6c8;
  }
}
</style>
