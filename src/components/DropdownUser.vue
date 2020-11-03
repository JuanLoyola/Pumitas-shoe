<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <div>
      <img src="../assets/img/user.png" alt="user-icon">
      <i class="fas fa-sort-down"></i>
    </div>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link"> <span><i :class="item.icon" ></i></span> {{ item.title }}</a>
          <hr>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DropdownUser',
  props: ['icon', 'title', 'items'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped >

#nav .menu-item .sub-menu {
  position: absolute;
  top: calc(100%);
  transform: translateX(-0%);
  width: 125px;
  height: 170px;
  background-color: #525257;
  padding: 10px 10px;
  display:flex;
  flex-direction: column;
  border-radius: 3px;
}

.menu-item > div {
  display:flex;
  flex-direction: row;
  align-items: center;
}

.menu-item{
  display:flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.menu-item img{
  width: 50px;
  border-radius: 100%;
  margin: 0 5px;
}

a{
  text-decoration: none;
  color: #f1f1f17a;
  text-align: start;
  margin: 0 5px;
}

a:hover{
  color:#dadde9de;
}

.sub-menu hr{
  width: 100px;
  margin: 10px 0;
  border-color: rgba(107, 105, 105, 0.233);
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
