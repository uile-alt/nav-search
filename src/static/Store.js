
export default {
    fetch: function() {
    let data = window.JSON.parse(window.localStorage.getItem('z'));
    console.log(data);
        return  data|| [
        { logo: "A", url: "http://www.acfun.cn" },
        { logo: "Y", url: "https://www.yuque.com/dashboard" },
        { logo: "V", url: "https://www.v2ex.com/" },
        { logo: "Z", url: "https://www.zhihu.com" },
        { logo: "S", url: "https://segmentfault.com/" },
        { logo: "G", url: "https://gitee.com/" },
        { logo: "B", url: "https://www.bootcdn.cn/" },
        { logo: "C", url: "https://cn.vuejs.org/v2/guide/" },
        
        
      ];
      
    },
    setData(value){
        const string = JSON.stringify(value);
        window.localStorage.setItem("z", string);
    },
    simplifyUrl(url){
        return url
          .replace("https://", "")
          .replace("http://", "")
          .replace("www.", "")
          .replace(/\/.*/, "");
      },
      
      
   }