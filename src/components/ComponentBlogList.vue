<template>
  <div class="row gx-4 gy-4">
    <ComponentBlogItem v-for="blog in blogs" :blog="blog" :key="blog.id">
    </ComponentBlogItem>
  </div>
</template>

<script>
import ComponentBlogItem from "@/components/ComponentBlogItem.vue";

export default {
  name: "ComponentBlogList",

  components: {
    ComponentBlogItem,
  },

  props: {
    blogs: {
      type: Array,
    },
  },
};
</script>

<style></style>
