<template>
  <b-container>
    <b-row>
      <b-col class="col-xs-8"></b-col>
      <b-col class="col-xs-8">
        <b-form-group horizontal>
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col class="col-xs-8"></b-col>
    </b-row>
    <b-row>
      <b-col class="col-xs-3"></b-col>
      <b-col class="col-xs-17">
        <!-- Main table element -->
        <b-table show-empty
                 stacked="md"
                 :fixed="fixed"
                 :striped="striped"
                 :hover="hover"
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
            <b-button size="xs" @click.stop="row.toggleDetails">
              {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
            </b-button>
            <b-button size="xs" v-b-modal.modalInfo @click="info(row.item)">
              Edit
            </b-button>
          </template>
          <template slot="row-details" slot-scope="row">
            <b-card>
              <ul>
                <li>
                  <div>From:</div>
                  <div class="fixed-width-font">{{ row.item.from }}</div>
                </li>
                <li>
                  <div>To:</div>
                  <div class="fixed-width-font">{{ row.item.to }}</div>
                </li>
                <li>
                  <div>Region:</div>
                  <div>{{ row.item.region }}</div>
                </li>
                <li>
                  <div>Segment:</div>
                  <div>{{ row.item.segment }}</div>
                </li>
                <li>
                  <div>File:</div>
                  <div class="fixed-width-font">{{ row.item.file }}</div>
                </li>
              </ul>
            </b-card>
          </template>
        </b-table>
      </b-col>
      <b-col class="col-xs-3"></b-col>
  </b-row>
    <b-row>
      <b-col class="col-xs-8"></b-col>
      <b-col class="col-xs-8">
        <b-pagination :total-rows="totalRows"
                      :per-page="perPage"
                      v-model="currentPage"
                      id="ydb_pagination_links"/>
      </b-col>
      <b-col class="col-xs-8"></b-col>
    </b-row>
    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" title="Edit Mapping">
      <b-form-group horizontal class="mb-0">
        <b-input-group>
          <b-col>
            <label for="from" class="modal-label">From:</label>
            <b-form-input id="from"
                          v-model="selectedItem.from"
                          :value="selectedItem.from" />
          </b-col>
          <b-col>
            <label for="to" class="modal-label">To:</label>
            <b-form-input id="to"
                          v-model="selectedItem.to"
                          :value="selectedItem.to" />
          </b-col>
          <b-col>
            <label for="region" class="modal-label">Region:</label>
            <b-form-input id="region"
                          v-model="selectedItem.region"
                          :value="selectedItem.region" />
          </b-col>
          <b-col>
            <label for="segment" class="modal-label">Segment:</label>
            <b-form-input id="segment"
                          v-model="selectedItem.segment"
                          :value="selectedItem.segment" />
          </b-col>
          <b-col>
            <label for="file" class="modal-label">File:</label>
            <b-form-input id="file"
                          v-model="selectedItem.file"
                          :value="selectedItem.file" />
          </b-col>
        </b-input-group>
      </b-form-group>
    </b-modal>
  </b-container>
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
  name: 'gde',
  data() {
    return {
      items,
      fields: [
        { key: 'from', label: 'From', sortable: true, sortDirection: 'desc', class: 'fixed-width-font' },
        { key: 'to', label: 'To', sortable: true, class: 'fixed-width-font' },
        { key: 'region', label: 'Region', sortable: true },
        { key: 'file', label: 'File', sortable: true, class: 'fixed-width-font' },
        { key: 'actions', label: 'Actions' },
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      sortBy: 'from',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      striped: false,
      hover: true,
      fixed: true,
      selectedItem: '',
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
    info(item) {
      this.selectedItem = item;
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
