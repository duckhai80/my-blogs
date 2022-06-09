<template>
  <div>
    <div class="container px-4 my-5 mx-auto">
      <div class="row justify-content-center" id="blog-item">
        <div class="card col-10 col-xl-8 col-lg-7 col-md-8 col-sm-10">
          <validation-observer v-slot="{ handleSubmit }">
            <form
              @submit.prevent="handleSubmit(createBlog)"
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
                    name="title"
                    v-model="title"
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
                    v-model="content"
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
              <button type="submit" class="btn btn-success">Create</button>
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
  name: "BlogCreatePage",

  data() {
    return {
      title: "",
      content: "",
      fullPage: false,
    };
  },

  methods: {
    createBlog() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
      });

      setTimeout(() => {
        loader.hide();
      }, 5000);

      const formData = new FormData();
      formData.append("blog[title]", this.title);
      formData.append("blog[content]", this.content);
      formData.append("blog[image]", this.$refs.files.files[0]);

      blogApi.create(formData).then(() => {
        this.$toast.success("create post success!");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      });
    },
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
