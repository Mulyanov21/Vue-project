<template>
  <the-navbar v-if='this.$store.state.isAuth'></the-navbar>
  <unsubscribe-message v-if="!this.$store.state.isSubscribe && this.$store.state.isAuth"></unsubscribe-message>
  <router-view v-else></router-view>
</template>

<style lang="css">
  * {
    font-family: "TT Firs Neue"
  }
</style>
<script>
import TheNavbar from "./components/TheNavbar";
import UnsubscribeMessage from "./components/UnsubscribeMessage";
export default {
  components: {TheNavbar, UnsubscribeMessage},
  mounted() {
  }
}
</script>
