<template>
  <div class="container col-12 navibar">
    <div class="row row-xl-cols-12 row-cols-xs-4">
        <div class="col-4 col-xs-4">
          <h2>Трансляции футбольных матчей</h2>
        </div>
      <div class="col-8 col-xs-4">
        <div class="navbuttons">
          <router-link to="/add-match">
            <button class="navbtn mr-1">Добавить матч</button>
          </router-link>
          <router-link to="/login">
            <button class="navbtn">Выйти</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped>

</style>
