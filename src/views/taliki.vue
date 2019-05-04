<template>
  <div class="work">
    <div class="picture">
      <img src="../assets/taliki.png">
    </div>
    <div class="description">
      <a>taliki</a>
      <br>
      <p>Logo / Planning / Design / HTML,CSS / PHP / WordPress</p>
      <p>京都府京都市でインキュベーション事業を行うTaliki様のコーポレートサイトを作成させていただきました。プランニングからデザイン、コーディングまで担当させていただきました。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "taliki"
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
