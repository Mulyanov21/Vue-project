<template>
  <div class="container">
    <div class="row-cols-xl-12 row-cols-xs-4">
      <div class='justify-content-center text-xl-center'>
        <h2 class="margin-bottom">Ошибка: нет подписки на паблик</h2>
        <!--<p>Для того, чтобы увидеть ссылки на трансляции матчей, нужно подписаться на наш паблик. Сделай один клик - и вперед!</p> -->
        <button class="navbtn" @click='window.location.href="vk.com/frenkie21"'>Перейти и подписаться</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnsubscribeMessage.vue"
}
</script>

<style scoped>

</style>
