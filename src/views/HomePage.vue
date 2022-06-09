<template>
  <section class="homepage mt-5">
    <div class="d-flex">
      <ComponentSortBy />
      <ComponentSortDirection class="ms-2" />
    </div>
    <ComponentBlogList :blogs="blogs" class="mt-1" />
    <ComponentPagination />
  </section>
</template>

<script>
import { mapState } from "vuex";
import ComponentBlogList from "@/components/ComponentBlogList.vue";
import ComponentSortBy from "@/components/ComponentSortBy.vue";
import ComponentSortDirection from "@/components/ComponentSortDirection.vue";
import ComponentPagination from "@/components/ComponentPagination.vue";

export default {
  name: "HomePage",

  components: {
    ComponentBlogList,
    ComponentSortBy,
    ComponentSortDirection,
    ComponentPagination,
  },

  computed: {
    ...mapState(["blogs"]),
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => this.$store.dispatch("getBlogs"),
      { immediate: true }
    );
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop.show {
  display: none;
}
</style>
