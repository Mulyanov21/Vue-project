<template>
  <div v-if="!error" class="container col-12">
    <p>Через несколько секунд вы будете перенаправлены</p>
  </div>
  <div v-else class="container col-12">
    <p>Ошибка</p>
  </div>
</template>

<script>
import axios from 'axios-jsonp-pro'
export default {
  // https://frenkiedejongcalendar-default-rtdb.firebaseio.com/
  name: "AuthVK",
  // inject: [isAuth], // разобраться как передавать параметры в route-компоненты
  data: () => ({
    user: {},

    idApp: '7923779',
    myGroupId: 181862728,
    error: false
  }),
  props: ['text'],
  methods: {
    params(obj) {
      return Object.keys(obj)
          .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
          .join("&");
    },
    getParams() {
      return window.location.hash
          .replace('#','')
          .split('&')
          .reduce(
              function(p,e){
                let a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
              },
              {}
          );
    },
    getURL(method, params) {
      if (!method) throw new Error("Enter method");
      params = params || {};
      params["access_token"] = this.user['token'];
      return (
          "https://api.vk.com/method/" +
          method +
          "?" +
          this.params(params) +
          "&v=5.81"
      );
    },
    async getUserData() {
      return await axios.jsonp(this.getURL('users.get', {'user_ids': this.user['userId'], 'fields': 'sex,bdate,city'}))
          .then(data => (data['response'][0]))
    },
    adminCheck() {
      for (let i of this.$store.state.admins) {
        if (i === this.user['userId']) {
          this.$store.state.isAdmin = true
        }
      }
    },
    async subscribeCheck() {
      await axios.jsonp(this.getURL('groups.get', {'user_id': this.user['userId']})).then(data => {
        console.log(data['response']['items'])
        // eslint-disable-next-line no-unused-vars
        for (let i of data['response']['items']) {
          if (i === this.myGroupId) {
            this.$store.state.isSubscribe = true
          }
        }
      }); // получение групп пользователя и проверка на подписку
    }
  },
  async mounted() {
    let dataparams = this.getParams() // получение параметров из URL

    this.user['token'] = dataparams['access_token'] // токен пользователя
    this.user['userId'] = dataparams['user_id'] // id профиля ВК пользователя
    this.user['email'] = dataparams['email'] // e-mail пользователя

    const userData = await this.getUserData() // получение данных пользователя
    this.$store.state.isAuth = true
    this.user['firstname'] = userData['first_name'] // имя
    this.user['lastname'] = userData['last_name'] // фамилия
    this.user['city'] = userData['city']['title'] // город
    this.user['sex'] = userData['sex'] // пол

    await this.subscribeCheck() // проверка на подписку группы
    this.adminCheck() // проверка на админа

    this.user['isSubscribe'] = this.$store.state.isSubscribe
    this.user['isAuth'] = this.$store.state.isAuth
    this.user['isAdmin'] = this.$store.state.isAdmin

    const response = await axios.post('https://frenkiedejongcalendar-default-rtdb.firebaseio.com/fvk/users.json', {
      'user': this.user
    }) // запись данных в БД

    response.status == 200 ? this.$router.push('/dashboard') : this.error = true
    // а затем перенаправить на страницу /dashboard

  }

}
</script>

<style scoped>

</style>
