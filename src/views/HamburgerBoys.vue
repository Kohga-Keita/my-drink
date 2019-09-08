<template>
  <div class="work">
    <div class="picture">
      <img src="../assets/HB.png">
    </div>
    <div class="description">
      <a>HamburgerBoys</a>
      <br>
      <p>ReDesign / HTML,CSS / Bind Up</p>
      <br>
      <p>北海道の市町村の魅力を歌う、人気上昇中の北海道出身3人組ユニット「HAMBURGER BOYS」の公式ホームページをリデザインしました。</p>
      <br>
      <p>クライアントさまのご養母よりい今まで対応してなかったレスポンシブに対応しました。またクライアントさまがライブ情報やメディア出演情報を更新して、ファンの方が見やすくなるように意識制作しました。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerBoys"
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
