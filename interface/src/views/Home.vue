<template>
  <div class="home">
    <Header />
    <img src="../../public/balcony2.jpg" alt="home" class="imageSize" />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../../layouts/Header';
export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>

<style>
.imageSize {
  width: 100%;
  height: calc(100vh - 4.1rem);
}
</style>
