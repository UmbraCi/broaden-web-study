<template>
  <div>
    <div id="nav">
      <router-link to="/music/pop">pop</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Music",
};
</script>