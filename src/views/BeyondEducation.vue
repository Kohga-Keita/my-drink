<template>
  <div class="work">
    <div class="picture">
      <img src="../assets/beyond.png">
    </div>
    <div class="description">
      <a href="https://beyond-education.jp/">Beyond Education</a>
      <br>
      <p>Logo / Planning / Design / HTML,CSS / WordPress</p>
      <br>
      <p>NPO法人であるBeyond Education様の法人パンフレット、ロゴ、Webサイトを制作させていただきました。プランニングからデザイン、コーディングまで担当させていただきました。</p>
      <br>
      <p>教育系のNPO法人であるため、淡い青と濃い黄色を採用して優しいデザインなるように意識して制作しました。生徒の画像をコラージュにするなど、学生が馴染みやすいデザインにしました。</p>
      <p>ロゴ制作では1ヶ月以上かけてクライアント様が納得のいくデザインを制作しました。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeyondEducation"
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
