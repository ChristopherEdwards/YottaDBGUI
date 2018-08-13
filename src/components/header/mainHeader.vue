<template>
<header id="header" class="home-page">
  <div class="container" id="main-header">
    <div class="row" id="navholder">
      <div class="col-md-6 col-sm-8" id="main-logo">
        <a href="#">
          <img src="../../assets/img/YottaDB_logo.svg" alt="YottaDB">
        </a>
      </div>
      <nav class="col-md-18 col-sm-16" id="main-nav">
        <auxNav></auxNav>
        <mainMenu></mainMenu>
        <div id="mobile-nav" class="row">
          <div id="mobile-logo">
            <a href="https://yottadb.com">
              <img src="../../assets/img/YottaDB_logo.svg" alt="YottaDB">
            </a>
          </div>
          <div id="mobile-toggle">
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
</template>

<script>
import auxNav from '@/components/header/auxNav';
import mainMenu from '@/components/header/mainMenu';

export default {
  name: 'mainHeader',
  components: { auxNav, mainMenu },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
