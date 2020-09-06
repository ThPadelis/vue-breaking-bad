<template>
  <b-overlay :show="isLoading" spinner-type="border">
    <b-container class="home">
      <b-row>
        <b-col sm="6" md="4" lg="3" xl="2" v-for="(c, i) in characters" :key="i">
          <b-card>{{c.name}}</b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-overlay>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters({
      characters: "characters",
      isLoading: "isLoading",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 56px);
}
</style>
