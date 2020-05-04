<template>
  <div class="container">
    <main>
      <h2 class="text-center">Latest Blog</h2>
      <ul class="posts">
        <li v-for="(post, index) in posts" :key= "index">
          <img :src= "post.feature_image">
          <div class="content">
              <span>{{post.authors[0].name}}</span>
              <h3>{{post.title}}</h3>
              <nuxt-link :to="{path: post.slug}">{{post.title}}</nuxt-link>
              <p>{{post.excerpt}}</p>
          </div>
          <!-- {{post}} -->
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {getPosts} from '~/api/posts';
export default {
  async asyncData(){
    const posts = await getPosts();
    return {posts: posts}
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1140px;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
