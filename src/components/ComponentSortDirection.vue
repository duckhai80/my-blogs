<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenu2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sort direction
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li>
        <router-link
          :to="{
            name: 'blogs-sort-direction',
            params: { sortDirection: this.sortDirectionOption.desc },
          }"
          class="dropdown-item"
          :class="{
            'text-success': sortDirection == this.sortDirectionOption.desc,
          }"
        >
          Descend
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'blogs-sort-direction',
            params: { sortDirection: this.sortDirectionOption.asc },
          }"
          class="dropdown-item"
          :class="{
            'text-success': sortDirection == this.sortDirectionOption.asc,
          }"
        >
          Ascend
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ComponentSortDirection",

  data() {
    return {
      sortDirectionOption: {
        desc: "desc",
        asc: "asc",
      },
    };
  },

  computed: {
    ...mapState(["sortDirection"]),
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        if (this.$route.params.sortDirection) {
          this.$store.dispatch(
            "setSortDirection",
            this.$route.params.sortDirection
          );
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
