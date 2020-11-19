<template>
  <div id="app">
    <div class="theme">
      <div @click="changeBg('#CECECE', 'A')" class="day" :class="Aclass"></div>
      <div @click="changeBg('#535458', 'B')" class="dark" :class="Bclass"></div>
      <div
        @click="changeBg('#B5E6B5', 'C')"
        class="eyeshield "
        :class="Cclass"
      ></div>
    </div>
    <header class="globalHeader">
      <form class="searchForm" method="GET" action="https://www.baidu.com/s">
        <input name="wd" type="text" />
        <button type="submit">搜索</button>
      </form>
    </header>
    <main class="globalMain">
      <ul class="siteList">
        <li v-for="(value, index) in hashMap" :key="index">
          <Box :title="value" :index="index" @delete="remove"></Box>
        </li>
        <li class="last" v-if="isActive">
          <div @click="add" class="addButton">
            <div class="iconWrapper">
              <svg class="icon">
                <use xlink:href="#icon-add"></use>
              </svg>
            </div>
            <div class="text">添加快捷方式</div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Box from "./components/Box";
import store from "./static/Store";
export default {
  name: "App",
  data() {
    return {
      Aclass: "",
      Bclass: "",
      Cclass: "borders",
      hashMap: store.fetch(),
      isActive: JSON.parse(localStorage.getItem("y")) && true,
    };
  },
  components: {
    Box,
  },

  created() {
    window.addEventListener("keydown", (e) => {
      const { key } = e; //key=e.key简写
      for (let i = 0; i < this.hashMap.length; i++) {
        if (this.hashMap[i].logo.toLowerCase() === key) {
          window.open(this.hashMap[i].url);
        }
      }
    });
  },
  destroyed() {
    window.removeEventListener("keydown", this.keydown);
  },

  watch: {
    hashMap() {
      if (this.hashMap.length >= 10) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      store.setData(this.hashMap);
      localStorage.setItem("y", JSON.stringify(this.isActive));
    },
  },

  methods: {
    add() {
      let url = window.prompt("请问要添加的网站是啥？");
      if (url.indexOf("http") !== 0) {
        url = "http://" + url;
      }
      const logo = store.simplifyUrl(url)[0].toUpperCase();
      this.hashMap.push({ logo: logo, url: url });
    },
    remove(n) {
      this.hashMap.splice(n, 1);
    },
    changeBg(color, key) {
      const string = "background-color:" + color;
      document.querySelector("body").setAttribute("style", string);
      const className = "borders";
      if (key == "A") {
        this.Aclass = className;
        this.Bclass = "-";
        this.Cclass = "-";
      } else if (key == "B") {
        this.Aclass = "-";
        this.Bclass = className;
        this.Cclass = "-";
      } else if (key == "C") {
        this.Aclass = "-";
        this.Bclass = "-";
        this.Cclass = className;
      }
    },
  },
};
</script>

<style>
@import "./static/style.css";

.theme {
  display: flex;
  justify-content: flex-end;
}
.borders {
  border: 2px solid rgb(0, 204, 255);
}
.day {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-right: 12px;
  background-color: #cecece;
}
.dark {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-right: 12px;
  background-color: #535458;
}
.eyeshield {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-right: 12px;
  background-color: #b5e6b5;
}
.body {
  background: #b5e6b5;
}
.icon {
  width: 56px;
  height: 56px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.text {
  font-size: 14px;
  margin-top: 4px;
}
.iconWrapper {
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addButton {
  width: 160px;
  display: flex;
  background: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  border: 1px solid #ddd;
}
</style>
