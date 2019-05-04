<template>
  <div class="coffee-float">
    <div class="float">
      <img src="../assets/coffeeFloat.png">
    </div>
    <div class="coffee">
      <h1>Keita Kohga</h1>
      <p>Web Designer</p>
      <p>Frontend Engineer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeFloat"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: Georgia, "Hiragino Mincho ProN", "Yu Mincho", serif;
  font-size: 80px;
  font-weight: 700;
  color: #2c6c61;
  margin-bottom: 0.2em;
}
p {
  font-family: Georgia, "Hiragino Mincho ProN", "Yu Mincho", serif;
  font-size: 26px;
  font-weight: 700;
  color: #454545;
}
.coffee-float {
  display: flex;
  padding-top: 10vh;
}
.coffee {
  order: 1;
  width: 50%;
  height: auto;
  text-align: left;
  margin: auto 0;
  padding-left: 10vw;
}
.float {
  order: 2;
  width: 50%;
  height: auto;
  padding-right: 5vw;
}
.float img {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 960px) {
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
  }
  .coffee-float {
    padding-top: 15vh;
    display: block;
  }
  .coffee {
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
    padding-left: 0px;
  }
  .float {
    width: 60%;
    height: auto;
    padding-right: 0;
    margin: 0 auto;
  }
}
</style>
