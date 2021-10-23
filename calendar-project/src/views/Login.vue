<template>
  <div class="container">
    <div class="row-cols-12">
      <div class="col-12">
        <div class='justify-content-center text-xl-center'>
          <h2 class="margin-bottom">Необходимо авторизоваться</h2>
          <button class="navbtn last" @click="AuthVK">Авторизоваться через ВК</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*
  ID: 7923779
  Secure key: p7mJbgrQW0kywGDicOdS
  Service token: ab3ee9d1ab3ee9d1ab3ee9d107ab460192aab3eab3ee9d1ca2c30b0f1661013e6803f1e
  */
  data: () => ({
    apiVersion: '5.131',
    clientId: 7923779,
    redirectUrl: 'https://frenkiedejongcalendar.web.app/authVK',
    //redirectUrl: 'https://api.vk.com/blank.html',
    linkUrl: 'https://oauth.vk.com/authorize',
    display: 'page',
    //scope: '1073737727',
    scope: 'notify,groups,offline,email,stats',
    key: 'p7mJbgrQW0kywGDicOdS',
    idApp: '7923779'
  }),
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    AuthVK() {
      window.location.href=`${this.linkUrl}?v${this.apiVersion}&display=${this.display}&client_id=${this.clientId}&redirect_uri=${this.redirectUrl}&scope=${this.scope}&response_type=token`
    }
  }
}
</script>

<style scoped>

</style>
