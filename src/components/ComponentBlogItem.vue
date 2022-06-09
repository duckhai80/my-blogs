<template>
  <div class="col-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 blogs">
    <div class="card" id="${blog.id}">
      <div class="blog-info">
        <div>
          <img :src="blog.image.url" class="card-img-top" :alt="blog.title" />
        </div>

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
          <router-link
            :to="{ name: 'blog', params: { blogId: blog.id } }"
            class="btn btn-success mt-3"
          >
            Go details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentBlogItem",

  props: {
    blog: {
      type: Object,
    },
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: none;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);

  &-img-top {
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &-title {
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-word;
  }

  &-text {
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    word-break: break-word;
  }
}

@mixin break-line(
  $total-line: 1,
  $line-height: 1,
  $height: 20px,
  $word-break: break-word
) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  line-height: 1;
  height: 20px;
  word-break: break-word;
  text-align: justify;
}
</style>
