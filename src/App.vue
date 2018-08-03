<template>
<div id="main_wrapper">
  <mainHeader></mainHeader>
  <div id="header_clear"></div>
  <div id="content_wrapper">
    <router-view/>
  </div>
  <mainFooter></mainFooter>
</div>
</template>

<script>
import mainHeader from '@/components/mainHeader';
import mainFooter from '@/components/mainFooter';

export default {
  name: 'App',
  components: { mainHeader, mainFooter },
};
</script>

<style>

</style>
