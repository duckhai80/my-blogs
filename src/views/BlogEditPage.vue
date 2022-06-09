<template>
  <div>
    <div class="container px-4 my-5 mx-auto">
      <div class="row justify-content-center" id="blog-item">
        <div class="card col-10 col-xl-8 col-lg-7 col-md-8 col-sm-10">
          <validation-observer v-slot="{ handleSubmit }">
            <form
              @submit.prevent="handleSubmit(editBlog)"
              ref="formContainer"
              class="px-4 py-5"
            >
              <validation-provider
                name="title"
                rules="required"
                v-slot="{ errors }"
              >
                <div class="mb-3">
                  <label for="titleInput" class="form-label">Title</label>
                  <input
                    v-model="blog.title"
                    type="text"
                    class="form-control"
                    id="titleInput"
                    aria-describedby="titleHelp"
                    :class="{ 'border-danger': errors[0] }"
                  />
                  <div id="titleHelp" class="form-text text-danger">
                    {{ errors[0] }}
                  </div>
                </div>
              </validation-provider>
              <validation-provider
                name="content"
                rules="required"
                v-slot="{ errors }"
              >
                <div class="mb-3">
                  <label for="contentInput" class="form-label">Content</label>
                  <input
                    name="content"
                    v-model="blog.content"
                    type="text"
                    class="form-control"
                    id="contentInput"
                    aria-describedby="titleHelp"
                    :class="{ 'border-danger': errors[0] }"
                  />
                  <div id="titleHelp" class="form-text text-danger">
                    {{ errors[0] }}
                  </div>
                </div>
              </validation-provider>
              <div class="mb-3">
                <label for="formFile" class="form-label">Image</label>
                <input
                  ref="files"
                  class="form-control"
                  type="file"
                  id="formFile"
                />
              </div>
              <button type="submit" class="btn btn-success">Save</button>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogApi from "@/api/blogApi";
import router from "@/router";

export default {
  name: "BlogEditPage",

  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {

  // },

  data() {
    return {
      blog: {
        id: "",
        title: "",
        content: "",
        image: null,
      },
      fullPage: false,
    };
  },

  methods: {
    editBlog() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        transition: "fade",
        loader: "dots",
        canCancel: false,
      });

      setTimeout(() => {
        loader.hide();
      }, 5000);

      const formData = new FormData();
      formData.append("blog[title]", this.blog.title);
      formData.append("blog[content]", this.blog.content);
      formData.append("blog[image]", this.$refs.files.files[0]);

      const params = { id: this.blog.id, formData };

      blogApi.update(params).then(() => {
        this.$toast.success("Edit post success!");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      });
    },
  },

  created() {
    const id = this.$route.params.blogId;

    blogApi.get(id).then((response) => {
      const result = response.data;

      this.blog.id = result.id;
      this.blog.title = result.title;
      this.blog.content = result.content;
      this.blog.image = result.image;
    });
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  margin-left: auto;
  margin-top: 30px;
}

.card {
  border-radius: 10px;
  border: none;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
}
</style>
