import { createApp } from "https://unpkg.com/petite-vue?module";

createApp({
  scrolled: false,
  showToc: false,
  showMenu: false,

  text() {
    return encodeURIComponent(document.title);
  },
  url() {
    return encodeURIComponent(window.location.href);
  },

  openUrl(url) {
    window.open(url, "_blank");
  },
  navOnScroll() {
    this.scrolled = window.scrollY > 20;
  },
  backToUp() {
    window.scrollTo(0, 0);
  },
  shareToTwitter() {
    window.open(
      `https://twitter.com/share?text=${this.text()}&url=${this.url()}`,
      "_blank",
      "width=615,height=505"
    );
  },
  shareToWeibo() {
    window.open(
      `https://service.weibo.com/share/share.php?title=${this.text()}&url=${this.url()}`,
      "_blank",
      "width=615,height=505"
    );
  },
  shareToTelegram() {
    window.open(
      `https://telegram.me/share/url?text=${this.text()}&url=${this.url()}`,
      "_blank",
      "width=615,height=505"
    );
  },

  mounted() {
    window.addEventListener("scroll", this.navOnScroll);
  }
}).mount("#app");
