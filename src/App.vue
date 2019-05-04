<template>
  <div id="app" v-cloak>
    <div class="party">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/milk-tea">About</router-link>|
      <router-link to="/banana-shake">Works</router-link>|
      <router-link to="/vanilla-frappuccino">Contact</router-link>
    </div>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  position: fixed;
  z-index: 1; /* 他の要素より前に出します */
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  writing-mode: vertical-rl;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #2c6c61;
}
.party {
  position: fixed;
  z-index: -1;
  width: 100%;
}
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s 0s ease;
}
@media screen and (max-width: 480px) {
  #nav {
    padding: 3vh;
    margin: 0 auto;
  }
  #nav a {
    writing-mode: horizontal-tb;
    padding: 0 10px;
  }
  .party {
    top: 50vh;
  }
}
</style>
