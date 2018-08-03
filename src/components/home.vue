<template>
<main id="home-wrap">
  <section id="banner" class="clearHeader">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-7 col-sm-7 col-xs-12">
          <table class="gde-data">
            <caption><h3><a id="map">Global Directory Mapping</a></h3></caption>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Region</th>
                <th class="hidden">Segment</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="map in mapping" :key="map.from">
                <td class="gde-fixed-width-font" v-text="map.from"></td>
                <td class="gde-fixed-width-font" v-text="map.to"></td>
                <td onclick="regionDetails('DEFAULT');" v-text="map.region"></td>
                <td class="hidden" v-text="map.segment">DEFAULT</td>
                <td class="gde-fixed-width-font" v-text="map.file"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</main>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      mapping: [
        {
          from: '%',
          to: '%ZDDP',
          region: 'DEFAULT',
          segment: 'DEFAULT',
          file: '/home/vehu/g/vehu.dat',
        },
        {
          from: '%ZDDP',
          to: '%ZDDP0',
          region: 'PIP',
          segment: 'PIP',
          file: '/home/vehu/g/pip.dat',
        },
        {
          from: '%ZDDP0',
          to: 'CTBL',
          region: 'DEFAULT',
          segment: 'DEFAULT',
          file: '/home/vehu/g/vehu.dat',
        },
        {
          from: 'CTBL',
          to: 'CTBL0',
          region: 'PIP',
          segment: 'PIP',
          file: '/home/vehu/g/pip.dat',
        },
        {
          from: 'CTBL0',
          to: 'CUVAR',
          region: 'DEFAULT',
          segment: 'DEFAULT',
          file: '/home/vehu/g/vehu.dat',
        },
        {
          from: 'CUVAR',
          to: 'CUVAR0',
          region: 'PIP',
          segment: 'PIP',
          file: '/home/vehu/g/pip.dat',
        },
        {
          from: 'CUVAR0',
          to: '%CacheTemp',
          region: 'DEFAULT',
          segment: 'DEFAULT',
          file: '/home/vehu/g/vehu.dat',
        },
        {
          from: 'CacheTemp',
          to: 'CacheTemq',
          region: 'TEMP',
          segment: 'TEMP',
          file: '/home/vehu/g/temp.dat',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
