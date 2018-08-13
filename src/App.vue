<template>
<div id="main_wrapper">
  <mainHeader></mainHeader>
  <div id="header_clear"></div>
  <div id="content_wrapper">
    <main id="home-wrap">
      <section id="banner" class="clearHeader">
        <router-view/>
      </section>
    </main>
  </div>
  <mainFooter></mainFooter>
</div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import mainFooter from '@/components/footer/mainFooter';

export default {
  name: 'App',
  components: { mainHeader, mainFooter },
};
</script>

<style>

</style>
