<template>
  <div id="app">
    <ComponentNavbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ComponentNavbar from "@/components/ComponentNavbar.vue";

export default {
  components: { ComponentNavbar },
};
</script>

<style lang="scss"></style>
