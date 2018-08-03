<template>
  <div id="auxnav">
    <search></search>
    <div id="nav_auxmenu" class="nav">
      <!--<ul id="menu-aux-nav" class="menu">
        <li id="" class="gray menu-item menu-item-type-custom menu-item-object-custom">
        <a href="https://yottadb.com/about-us/contact/">Contact Us</a>
        </li>
        <li id="" class="menu-item menu-item-type-custom menu-item-object-custom ">
          <a target="_blank" href="https://yottadb.com/product/get-started/">Download</a>
        </li>
      </ul>-->
    </div>
  </div>
</template>

<script>
import search from '@/components/search';

export default {
  name: 'auxNav',
  components: { search },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
