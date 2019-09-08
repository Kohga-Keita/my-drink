<template>
  <div class="work">
    <div class="picture">
      <iframe
        src="https://player.vimeo.com/video/358494432?title=0&byline=0&portrait=0"
        width="800px"
        height="450px"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <div class="description">
      <a>My Holiday</a>
      <br>
      <p>Final Cut Pro / After Effects</p>
      <p>自分の休日をテーマにアニメーション動画を制作しました。「釣った魚が大好きなラーメンになる」というストーリー性をもたせました。</p>
      <p>ストーリ性が上手できていないことや、引きのアニメーションばかりをしているため助長な映像になったという課題が残りました。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHoliday"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.picture iframe {
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
  .picture iframe {
    width: 90%;
    margin: -10vh auto -20vh auto;
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
