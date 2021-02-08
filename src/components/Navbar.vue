<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky class="mb-4">
    <b-navbar-brand href="#">VueBreakingBad</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav></b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
};
</script>