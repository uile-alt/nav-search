<template>
  <div @click="jump" class="site">
    <div class="logo">{{ title.logo }}</div>
    <div class="link">{{ title.url | change() }}</div>
    <div @click.stop="del()" class="close">
      <svg class="icon">
        <use xlink:href="#icon-close"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import store from "../static/Store";
export default {
  name: "Box",
  props: {
    title: {
      default: "nothing",
    },
    index: {
      default: "nothing",
    },
  },
  data() {
    return {
      show: "flase",
    };
  },
  filters: {
    change(value) {
      value = store.simplifyUrl(value);
      return value;
    },
  },
  methods: {
    jump() {
      window.open(this.title.url, "_self");
    },
    del() {
      this.$emit("delete", this.index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site {
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px 0;
  position: relative;
  cursor: pointer;
}
.logo {
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
}
.link {
  font-size: 14px;
  margin-top: 4px;
}
.close {
  position: absolute;
  right: 10px;
  top: 5px;
  display: block;
  cursor: default;
}

@media (min-width: 500px) {
  .close {
    position: absolute;
    right: 10px;
    top: 5px;
    display: none;
    cursor: default;
  }
  .siteList .site:hover > .close {
    display: block;
    animation: first 0.5s ease-in-out forwards;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

@keyframes first {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
