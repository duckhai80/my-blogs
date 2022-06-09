<template>
  <div class="d-flex justify-content-center my-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination mx-auto">
        <li class="page-item" :class="{ disabled: pagination.prev == null }">
          <router-link
            :to="{
              name: 'blogs-page',
              params: { page: pagination.page - 1 },
            }"
            class="page-link"
            :class="{ 'text-dark': pagination.prev != null }"
          >
            Previous
          </router-link>
        </li>

        <li class="page-item" v-show="pagination.page >= 3">
          <div class="page-link text-dark">...</div>
        </li>
        <li
          class="page-item"
          v-show="
            pagination.next == null &&
            pagination.prev != null &&
            pagination.page > 2
          "
        >
          <router-link
            :to="{ name: 'blogs-page', params: { page: pagination.page - 2 } }"
            class="page-link text-dark"
          >
            {{ pagination.page - 2 }}
          </router-link>
        </li>
        <li class="page-item" v-show="pagination.prev">
          <router-link
            :to="{ name: 'blogs-page', params: { page: pagination.prev } }"
            class="page-link text-dark"
          >
            {{ pagination.prev }}
          </router-link>
        </li>
        <li class="page-item">
          <router-link
            :to="{ name: 'blogs-page', params: { page: pagination.page } }"
            class="page-link text-success"
          >
            {{ pagination.page }}
          </router-link>
        </li>
        <li class="page-item" v-show="pagination.next">
          <router-link
            :to="{ name: 'blogs-page', params: { page: pagination.next } }"
            class="page-link text-dark"
          >
            {{ pagination.next }}
          </router-link>
        </li>
        <li
          class="page-item"
          v-show="
            pagination.prev == null &&
            pagination.next != null &&
            pagination.page < pagination.total - 2
          "
        >
          <router-link
            :to="{ name: 'blogs-page', params: { page: pagination.page + 2 } }"
            class="page-link text-dark"
          >
            {{ pagination.page + 2 }}
          </router-link>
        </li>
        <li class="page-item" v-show="pagination.page <= pagination.total - 2">
          <div class="page-link text-dark">...</div>
        </li>

        <li class="page-item" :class="{ disabled: pagination.next == null }">
          <router-link
            :to="{
              name: 'blogs-page',
              params: { page: pagination.page + 1 },
            }"
            class="page-link"
            :class="{ 'text-dark': pagination.next != null }"
          >
            Next
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ComponentPagination",

  computed: {
    ...mapState(["pagination"]),
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  border-radius: 10px;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
}
</style>
