<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    if(!this.$store.state.isAuth) {
      console.log(this.$store.state.isAuth)
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>

</style>
