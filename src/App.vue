<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
body {
  color: #fff;
  background-color: #de335e;
}

div.content {
  margin: 0 auto;
  max-width: 500px;
  padding: 10px;
  position: relative;
}
.markdown-body.override {
  color: #fff;
}
.markdown-body.override a {
  color: #fff;
  text-decoration: underline;
}

.markdown-body.override blockquote {
  color: #fff;
}
</style>
