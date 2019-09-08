<template>
  <div class="banana-shake">
    <div class="banana">
      <router-link to="/kokokara2017">
        <img src="../assets/workKokokara2017.png">
        <p>
          kokokara 2017
          <br>
          <span>#2017.10</span>
        </p>
      </router-link>
      <router-link to="/leaper">
        <img src="../assets/workLeaperProperty.png">
        <p>
          Leaper Property
          <br>
          <span>#2018.02</span>
        </p>
      </router-link>
      <router-link to="/chiachia">
        <img src="../assets/workchiachia.png">
        <p>
          Chia Chia
          <br>
          <span>#2018.8</span>
        </p>
      </router-link>
      <router-link to="/kokokara2018">
        <img src="../assets/workKokokara2018.png">
        <p>
          kokokara 2018
          <br>
          <span>#2018.10</span>
        </p>
      </router-link>
      <router-link to="/taliki">
        <img src="../assets/workTaliki.png">
        <p>
          Taliki
          <br>
          <span>#2019.01</span>
        </p>
      </router-link>
      <router-link to="/beyond-education">
        <img src="../assets/workBE.png">
        <p>
          Beyond Ecucation
          <br>
          <span>#2019.03</span>
        </p>
      </router-link>
      <router-link to="/tripleone">
        <img src="../assets/workTripleone.png">
        <p>
          Tripleone
          <br>
          <span>#2019.05</span>
        </p>
      </router-link>
      <router-link to="/hamburger-boys">
        <img src="../assets/workHB.png">
        <p>
          HAMBURGER BOYS
          <br>
          <span>#2019.06</span>
        </p>
      </router-link>
      <router-link to="/my-holiday">
        <img src="../assets/workMyHoliday.png">
        <p>
          Work Holiday
          <br>
          <span>#2019.08</span>
        </p>
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
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}
.banana a {
  margin-top: 3.8vw;
  width: 30%;
  height: 20%;
  text-decoration: none;
}
.banana p {
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 0.1rem;
  text-align: left;
  color: #151515;
}
.banana span {
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 50px;
  text-align: left;
  color: #454545;
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
    width: 46%;
    height: auto;
  }
  .banana p {
    line-height: 1.2rem;
    margin-top: 1vh;
  }
  .banana span {
    line-height: 1.2rem;
  }
}
</style>
