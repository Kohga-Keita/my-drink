<template>
  <div class="work">
    <div class="picture">
      <img src="../assets/tripleone.png">
    </div>
    <div class="description">
      <a href="http://tripleone.cc/">Tripleone</a>
      <br>
      <p>ReDesign / HTML,CSS / Bind Up</p>
      <br>
      <p>広告代理店業、タレントマネジメント業、映像制作業を行うTRIPLEONE様のホームページをリデザインしました。</p>
      <br>
      <p>「会社概要がシンプルでわかりやすいように」というクライアント様のご要望より、白と黒を基調としたシンプルでスタイリッシュなデザインで制作しました。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "tripleone"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.picture img {
  width: 60%;
  height: auto;
  margin: 5vh auto 0 auto;
}
.description {
  width: 50%;
  margin: 3vh auto 20vh auto;
  text-align: left;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
}
.description a {
  font-weight: bold;
  font-size: 1.375rem;
  text-decoration: none;
  color: #2c6c61;
}
@media screen and (max-width: 480px) {
  .picture img {
    width: 90%;
    margin: 12vh auto 0 auto;
  }
  .description {
    width: 90%;
    margin-bottom: 0px;
  }
  .description a {
    font-size: 1.1rem;
  }
}
</style>
