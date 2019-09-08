<template>
  <div class="royal-milk-tea">
    <div class="milk-tea">
      <div class="milk">
        <img src="../assets/milkTea.png">
      </div>
      <div class="tea">
        <h2>About Me</h2>
        <p>Make it simple, but significant.</p>
        <a href="#detail" v-smooth-scroll="{ duration: 2000}"></a>
      </div>
    </div>
    <div class="mineral" id="detail">
      <div class="oxygen">
        <p>
          甲賀 啓太 - Keita Koga
          <br>
          <br>1996年、北海道生まれ。
          <br>大学在学中に、デザインの可能性に魅了されWebデザインの勉強を始める。
          <br>フリーランスとして、ロゴやWebサイト、映像の企画・制作・運用をしています。
          <br>
          <br>
          <span>Illustrator</span>
          <span>Photoshop</span>
          <span>Adobe XD</span>
          <br class="sp_br">
          <span>Sketch</span>
          <span>After Effects</span>
          <span>Final Cut Pro</span>
          <br>
          <span>HTML</span>
          <span>CSS</span>
          <span>Vue.js</span>
          <br class="sp_br">
          <span>Laravel</span>
          <span>R</span>
          <span>Git</span>
        </p>
      </div>
      <div class="hydrogen">
        <div class="hearing">
          <img src="../assets/hearing.png">
          <p>
            <span>Hearing</span>
          </p>
          <p>お客様の要望や想いをヒアリングし、コンセプトを決めていきます。デザイン面だけでなく、ターゲットの絞り込みからSEOの部分まで企画していきます。</p>
        </div>
        <div class="design">
          <img src="../assets/design.png">
          <p>
            <span>Design</span>
          </p>
          <p>ヒアリングに基づいて、IllustratorやPhotoshop、Adobe XDを用いてデザイン案を作成いたします。目的、ターゲットに即して、使いやすいデザインを提案します。</p>
        </div>
        <div class="coding">
          <img src="../assets/coding.png">
          <p>
            <span>Coding</span>
          </p>
          <p>レスポンシブなWebサイトを作成いたします。Wordpressを使ったサイトから、Javascriptを使ったアニメーションのあるサイトなど様々なコーディングを行なっています。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MilkTea"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
h2 {
  font-family: Georgia, "Hiragino Mincho ProN", "Yu Mincho", serif;
  font-size: 80px;
  font-weight: 700;
  color: #2c6c61;
  margin-bottom: 0.2em;
}
a {
  display: inline-block;
  border-radius: 25px;
  border: solid 3px #2c6c61;
  width: 150px;
  padding: 20px;
  margin-top: 0.5em;
}
.tea p {
  font-family: Georgia, "Hiragino Mincho ProN", "Yu Mincho", serif;
  font-size: 26px;
  font-weight: 700;
  color: #454545;
}
.milk-tea {
  display: flex;
  padding-top: 10vh;
}
.tea {
  width: 50%;
  height: auto;
  text-align: right;
  margin: auto 0;
  padding-right: 7vw;
}
.milk {
  width: 50%;
  height: auto;
  padding-left: 10vw;
}
.milk img {
  width: 100%;
  height: auto;
}
.oxygen {
  margin: 20vh auto 0 auto;
  text-align: center;
}
.oxygen p {
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: bold;
  font-size: 1.375rem;
  display: inline-block;
  text-align: left;
}
.oxygen span {
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 3rem;
  background-color: #f3f7fb;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
}
.hydrogen {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 76%;
  margin: 10vh auto;
}
.hydrogen span {
  font-size: 1.125rem;
  font-weight: 700;
}
.hydrogen img {
  width: 100%;
  height: auto;
}
.hearing,
.design,
.coding {
  width: 30%;
  height: auto;
  text-align: left;
}
@media screen and (max-width: 960px) {
  h2 {
    font-size: 32px;
  }
  .tea p {
    font-size: 18px;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
  }
  .milk-tea {
    padding-top: 15vh;
    display: block;
  }
  .tea {
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
    padding-left: 0px;
  }
  .milk {
    width: 50%;
    height: auto;
    padding-right: 0;
    margin: 0 auto;
  }
  .oxygen {
    width: 90%;
  }
  .oxygen p {
    font-size: 1rem;
  }
  .oxygen span {
    font-size: 0.8rem;
  }
  .hydrogen {
    display: block;
    width: 90%;
  }
  .hydrogen img {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
  .hydrogen p {
    text-align: left;
  }
  .hearing,
  .design,
  .coding {
    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 7vh;
  }
  .hydrogen img {
    width: 80%;
    height: auto;
    margin: 0 auto -3vh auto;
  }
}
@media screen and (min-width: 480px) {
  .sp_br {
    display: none;
  }
}
</style>
