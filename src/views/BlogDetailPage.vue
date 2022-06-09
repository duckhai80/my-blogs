<template>
  <div class="container px-4 my-5 mx-auto">
    <div class="row justify-content-center" id="blog-item">
      <div class="col-10 col-xl-8 col-lg-7 col-md-8 col-sm-10">
        <div ref="divContainer" class="card blog" :id="blog.id">
          <img
            :src="blog.image.url || imageDefault"
            class="card-img-top"
            :alt="blog.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ blog.title }}</h5>
            <p class="card-text my-3">{{ blog.content }}</p>
            <div class="d-flex">
              <p>Created at:</p>
              <p class="card-text ms-2">{{ formatDate(blog.created_at) }}</p>
            </div>
            <div class="d-flex">
              <p>Updated at:</p>
              <p class="card-text ms-2">{{ formatDate(blog.updated_at) }}</p>
            </div>
            <div class="d-flex">
              <router-link
                :to="{ name: 'blog-edit', params: { blogId: blog.id } }"
                class="btn btn-secondary"
              >
                Edit
              </router-link>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Delete
              </button>
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Delete blog
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Are you sure to delete this blog?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        @click="deleteBlog"
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogApi from "@/api/blogApi";
import router from "@/router";

export default {
  name: "BlogDetailPage",

  data() {
    return {
      blog: {
        id: "",
        image: {
          url: "",
        },
        title: "",
        content: "",
      },
      imageDefault: "https://via.placeholder.com/150",
      fullPage: false,
    };
  },

  methods: {
    deleteBlog() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.divContainer,
        canCancel: false,
      });

      setTimeout(() => {
        loader.hide();
      }, 5000);

      const id = this.$route.params.blogId;

      blogApi.delete(id).then(() => {
        this.$toast.success("Delete post success!");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      });
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },

  created() {
    const id = this.$route.params.blogId;

    blogApi.get(id).then((response) => {
      const result = response.data;
      this.blog = result;
    });
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
  justify-content: flex-end;
}

.btn {
  display: block;
  margin-left: 10px;
  margin-top: 30px;
}

.card {
  border-radius: 10px;
  border: none;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  padding: 20px;

  &-img-top {
    display: block;
    // height: 400px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &-text {
    text-align: left;
  }
}
</style>
