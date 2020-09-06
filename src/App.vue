<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Navbar: () =>
      import(/* webpackChunkName: "navbar" */ "@/components/Navbar.vue"),
  },
  computed: {
    ...mapGetters({
      characters: "characters",
    }),
  },
  methods: {
    ...mapActions({
      getCharacters: "setCharacters",
    }),
  },
  mounted() {
    this.getCharacters();
  },
};
</script>