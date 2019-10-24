<template>
  <div id="swagger">
    <!-- <div v-if="url"> -->
      <iframe v-bind:url="baseUrl + jsonUrl"></iframe>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "Swagger",
  data() {
    return {
      jsonUrl: "http://rackerlabs.github.io/wadl2swagger/openstack/swagger/dbaas.json",
      baseUrl: "http://localhost:4003/swagger/?url="
    };
  },
  mounted() {
    // eslint-disable-next-line no-debugger
    debugger;
    // eslint-disable-next-line no-console
    console.log(this.$route.params);
    this.url = this.$route.params.url;
  }
};
</script>