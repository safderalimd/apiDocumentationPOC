<template>
  <div class="container search" id="search">
    <loading
      :active.sync="isLoading"
      :is-full-page="true"
      :opacity=".9"
      :loader="'dots'"
      :color="'#01aef0'"
    ></loading>
    <div class="blue-text text-darken-4 center-align">
      <h3>Welcome to API Documentation Framework Portal</h3>
      <h5 class="pad-align">Enter some search value to list out the projects and or API's</h5>
    </div>
    <form class="search-form center-align" @submit.prevent="search()" novalidate>
      <div class="input-field">
        <input
          id="search"
          placeholder="Enter search value"
          type="text"
          class="validate"
          v-model="searchValue"
        />
        <!-- <label for="search">Enter search Value</label> -->
      </div>
      <button type="submit" class="waves-effect waves-light btn">Search</button>
    </form>
    <div class="row"></div>
    <div class="row">
      <!-- <div v-if="searchValue && results.length === 0">No records found</div> -->
      <div v-if="results.length > 0">
        <div class="col s3" v-for="result in results" :key="result.id">
          <div class="card grey lighten-5">
            <div class="card-content">
              <span class="card-title">{{result.name}}</span>
              <p>{{result.description}}</p>
            </div>
            <div class="card-action">
              <a
                v-bind:href="swaggerBaseUrl + result.url"
                target="_blank"
              >Open Swagger Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import SearchService from "../services/SearchService";

export default {
  name: "Search",
  components: {
    Loading
  },
  data() {
    return {
      searchValue: "",
      isLoading: false,
      errorMessage: "",
      results: [],
      swaggerBaseUrl: "http://localhost:4003/swagger/?url="
    };
  },
  methods: {
    search() {
      this.errorMessage = "";
      this.results = [];
      if (this.searchValue) {
        this.isLoading = true;
        SearchService.search(this.searchValue)
          .then(response => {
            if (
              response &&
              response.data &&
              response.data.hits &&
              response.data.hits.hits
            ) {
              response.data.hits.hits.forEach(element => {
                this.results.push(element._source);
              });
            }
            this.isLoading = false;
          })
          .catch(error => {
            this.isLoading = false;
            this.errorMessage = error.response;
          });
      }
    }
  }
};
</script>
<style scoped>
.search .pad-align {
  padding: 10% 10% 5% 10%;
}

.search .search-form {
  padding-bottom: 10%;
}
</style>