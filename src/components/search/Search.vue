<template>
  <div id="Search">
    <img src="@/assets/icon/搜索.png" alt="">
    <input type="text">
  </div>
</template>

<script>
export default {
  name:'Search',
}
</script>

<style scoped>
#Search {
  width: 80%;
  height: 80%;
  background-color: #F5F4F4;
  margin:4px auto;
  padding: 0 20px;
  border-radius: 21px;
display: flex;
align-items: center;
}
#Search img {
  width: 20px;
  height: 20px;
}
#Search input {
  height: 90%;
  width: 100%;
  border-width: 0;
  background-color: #F5F4F4;
}
</style>