<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo">Muhid</nuxt-link>
          <nav>
            <ul>
              <li><nuxt-link to="/why" class="nav-link">Who we are</nuxt-link></li>
              <li><nuxt-link to="/contact" class="nav-link">Contact</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container{
  max-width: 1140px;
}
.header{
  background: #000;
}

</style>
