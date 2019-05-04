<template>
  <div class="banana-shake">
    <div class="banana">
      <router-link to="/beyond-education">
        <img src="../assets/leftUp.png">
      </router-link>
      <router-link to="/kokokara2017">
        <img src="../assets/centerUp.png">
      </router-link>
      <router-link to="/chiachia">
        <img src="../assets/rightUp.png">
      </router-link>
      <router-link to="/taliki">
        <img src="../assets/leftDown.png">
      </router-link>
      <router-link to="/kokokara2018">
        <img src="../assets/centerDown.png">
      </router-link>
      <router-link to="/leaper">
        <img src="../assets/rightDown.png">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BananaShake"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banana-shake {
  padding-top: 10vh;
}
.banana {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}
.banana img {
  width: 100%;
  height: auto;
}
.banana a {
  margin-top: 3.8vw;
  width: 30%;
  height: 20%;
}
@media screen and (max-width: 960px) {
  .banana-shake {
    padding-top: 12vh;
  }
  .banana {
    width: 95%;
  }
  .banana a {
    margin-top: 2.5%;
    width: 48%;
    height: auto;
  }
}
</style>
