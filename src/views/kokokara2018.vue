<template>
  <div class="work">
    <div class="picture">
      <img src="../assets/kokokara2018.png">
    </div>
    <div class="description">
      <a href="https://www.kokokara-conference.com/">kokokara 未来会議 2018</a>
      <br>
      <p>Planning / Design / Wix</p>
      <br>
      <p>関西でキャリア教育を行うkokokara Grouop様のイベント「kokokara 未来会議 2018」のWebサイトを制作させていただきました。プランニングからデザインまで担当させていただきました。</p>
      <br>
      <p>昨年に引き続き「課題を超えていく君たちへ」というコンセプトを基にスモークの混じり合うイメージをランディングページに使用しました。海外の方が参加するため言語を多数使用したり、昨年よりビジュアルデザインを意識しました。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "kokokara2018"
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
