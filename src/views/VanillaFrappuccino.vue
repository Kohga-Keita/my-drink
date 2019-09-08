<template>
  <div class="vanilla-frappuccino">
    <div class="frappuccino">
      <img src="../assets/frappuccino.png">
    </div>
    <div class="vanilla">
      <h2>Contact</h2>
      <p>Webサイトやアプリのデザインに関するお仕事を受けています。</p>
      <p>お気軽にご連絡ください。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VanillaFrappuccino"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-family: Georgia, "Hiragino Mincho ProN", "Yu Mincho", serif;
  font-size: 100px;
  font-weight: 700;
  color: #2c6c61;
  margin-bottom: 0.2em;
}
p {
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  color: #454545;
  margin-left: 3vw;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;
}
img {
  width: 40%;
  height: 40%;
}
.vanilla-frappuccino {
  padding-top: 10vh;
}
.vanilla {
  text-align: left;
  margin: auto 0;
  padding-left: 10vw;
  padding-top: 5vw;
}
.frappuccino {
  position: absolute;
  top: 15vw;
  left: 50vw;
}
@media screen and (max-width: 960px) {
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
    text-align: left;
  }
  .vanilla-frappuccino {
    padding-top: 15vh;
    display: block;
  }
  .vanilla {
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
    padding-left: 0px;
  }
  .frappuccino {
    width: 80%;
    height: auto;
    padding-right: 0;
    margin: 0 auto;
    position: static;
  }
}
</style>
