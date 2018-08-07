<template>
<main id="home-wrap">
  <section id="banner" class="clearHeader">
    <b-container fluid>
    <!-- <div class="container"> -->
      <b-row>
      <!-- <div class="row"> -->
        <b-col lg="10" md="7" sm="7" xs="12">
        <!-- <div class="col-lg-10 col-md-7 col-sm-7 col-xs-12"> -->
          <b-form-group horizontal label="Filter" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Type to Search" />
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- Main table element -->
      <b-table show-empty
               stacked="md"
               :items="items"
               :fields="fields"
               :current-page="currentPage"
               :per-page="perPage"
               :filter="filter"
               :sort-by.sync="sortBy"
               :sort-desc.sync="sortDesc"
               :sort-direction="sortDirection"
               @filtered="onFiltered">
        <template slot="actions" slot-scope="row">
          <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
          <b-button size="sm"
                    @click.stop="info(row.item, row.index, $event.target)"
                    class="mr-1">
            JSON
          </b-button>
          <!-- <b-button size="sm" @click.stop="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </b-button> -->
        </template>
        <!-- <template slot="row-details" slot-scope="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
            </ul>
          </b-card>
        </template> -->
      </b-table>
      <b-row>
        <b-col>
          <b-pagination :total-rows="totalRows"
                        :per-page="perPage"
                        v-model="currentPage"
                        class="my-0" />
        </b-col>
      </b-row>
      <!-- Info modal -->
      <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
        <pre>{{ modalInfo.content }}</pre>
      </b-modal>
    </b-container>
          <!-- <table class="gde-data">
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
          </table> -->
<!--         </div>
      </div>
    </div> -->
  </section>
</main>
</template>

<script>
const items = [
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
];
export default {
  name: 'home',
  data() {
    return {
      items,
      fields: [
        { key: 'from', label: 'From Global', sortable: true, sortDirection: 'desc' },
        { key: 'to', label: 'To Global', sortable: true },
        { key: 'region', label: 'Region', sortable: true },
        { key: 'segment', label: 'Segment', sortable: true },
        { key: 'actions', label: 'Actions' },
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      sortBy: 'from',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
  },
  methods: {
    info(item, index, button) {
      this.modalInfo.title = `Mapping Details: ${index}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', 'modalInfo', button);
    },
    resetModal() {
      this.modalInfo.title = '';
      this.modalInfo.content = '';
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
