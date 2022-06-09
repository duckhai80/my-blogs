<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenu2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sort by
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li>
        <router-link
          ref="li"
          :to="{
            name: 'blogs-sort-by',
            params: {
              sortBy: this.sortByOption.id,
            },
          }"
          class="dropdown-item"
          :class="{
            'text-success': sortBy == this.sortByOption.id,
          }"
        >
          ID
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'blogs-sort-by',
            params: {
              sortBy: this.sortByOption.title,
            },
          }"
          class="dropdown-item"
          :class="{
            'text-success': sortBy == this.sortByOption.title,
          }"
        >
          Title
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'blogs-sort-by',
            params: { sortBy: this.sortByOption.content },
          }"
          class="dropdown-item"
          :class="{
            'text-success': sortBy == this.sortByOption.content,
          }"
        >
          Content
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'blogs-sort-by',
            params: { sortBy: this.sortByOption.createdAt },
          }"
          class="dropdown-item"
          :class="{
            'text-success': sortBy == this.sortByOption.createdAt,
          }"
        >
          Created at
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'blogs-sort-by',
            params: { sortBy: this.sortByOption.updatedAt },
          }"
          class="dropdown-item"
          :class="{
            'text-success': sortBy == this.sortByOption.updatedAt,
          }"
        >
          Updated at
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ComponentSortBy",

  data() {
    return {
      sortByOption: {
        id: "id",
        title: "title",
        content: "content",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    };
  },

  computed: {
    ...mapState(["sortBy"]),
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        if (this.$route.params.sortBy) {
          this.$store.dispatch("setSortBy", this.$route.params.sortBy);
        }
        this.$store.dispatch("getBlogs");
      },
      { immediate: true }
    );
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
</style>
