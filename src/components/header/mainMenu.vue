<template>
<ul id="menu-main-menu" class="menu">
  <li v-for="menu in menus.main" :key="menu.name" class="menu-item menu-item-has-children">
    <router-link :to="menu.url" v-text="menu.name"></router-link>
    <ul class="sub-menu">
      <li v-for="submenu in menu.submenus" :key="submenu.name" class="menu-item">
        <router-link :to="submenu.url" v-text="submenu.name"></router-link>
      </li>
    </ul>
  </li>
</ul>
</template>

<script>
export default {
  name: 'mainMenu',
  data() {
    return {
      menus: {
        main: [
          {
            name: 'System Administraton',
            url: '#',
            submenus: [
              {
                name: 'Global Directory Editor (GDE)',
                url: 'gde',
              },
              {
                name: 'Data Structure Editor (DSE)',
                url: '#',
              },
              {
                name: 'SQL Management',
                url: '#',
              },
              {
                name: 'Web Server',
                url: '#',
              },
              {
                name: 'Call-In Management',
                url: '#',
              },
              {
                name: 'Call-Out Management',
                url: '#',
              },
            ],
          },
          {
            name: 'Monitoring',
            url: '#',
            submenus: [
              {
                name: 'InfoHub',
                url: '#',
              },
              {
                name: 'gvstat',
                url: '#',
              },
              {
                name: 'Database Performance',
                url: '#',
              },
              {
                name: 'SQL Cached Queries',
                url: '#',
              },
              {
                name: 'Web Server',
                url: '#',
              },
            ],
          },
          {
            name: 'Resources',
            url: '#',
            submenus: [
              {
                name: 'Documentation',
                url: 'https://yottadb.com/resources/documentation/',
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
