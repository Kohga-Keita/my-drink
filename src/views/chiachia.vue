<template>
  <div class="work">
    <div class="picture">
      <img src="../assets/chiachia.png">
    </div>
    <div class="description">
      <a href="https://prtimes.jp/main/html/rd/p/000000003.000036295.html">ちあちあ</a>
      <br>
      <p>Planning / Design / UI</p>
      <br>
      <p>snsで誰でも簡単に応援を集められるサービス「ちあちあ」を作成させていただきました。プランニングからデザイン、UIまで担当させていただきました。</p>
      <br>
      <p>ユーザーに継続的に使ってもらえるようなUIとシェアをしやすいようなUIを意識して制作しました。</p>
      <p>効率よくUI企画するため、デザインのアセット化やコンポネント化して再利用しやすくしました。</p>
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

