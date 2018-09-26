<template>
  <div class="home text-center">
    <div class="jumbotron">
      <h1 class="display-3">Auth for noobs</h1>
      <p class="lead">
        Learning auth is da bomb!
      </p>
      <hr class="my-4">
      <p>
        Coding along with CJ and Tony from Coding Garden.
      </p>
      <p class="lead">
        <router-link
          class="btn btn-primary btn-lg"
          role="button"
          :to="{name: 'signup'}">
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
