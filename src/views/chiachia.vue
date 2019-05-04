<template>
  <div class="work">
    <div class="picture">
      <img src="../assets/chiachia.png">
    </div>
    <div class="description">
      <a>ちあちあ</a>
      <br>
      <p>Planning / Design / UI</p>
      <p>snsで誰でも簡単に応援を集められるサービス「ちあちあ」を作成させていただきました。プランニングからデザイン、UIまで担当させていただきました。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "chiachia"
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
  width: 60%;
  margin: 3vh auto 0 auto;
  text-align: left;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
}
.description a {
  font-weight: bold;
  font-size: 1.375rem;
}
@media screen and (max-width: 480px) {
  .picture img {
    width: 90%;
    margin: 12vh auto 0 auto;
  }
  .description {
    width: 90%;
  }
  .description a {
    font-size: 1.1rem;
  }
}
</style>
