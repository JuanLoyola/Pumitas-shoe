<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <div class="cart">
      <i class="fas fa-shopping-cart"></i> {{currentValue || 0}}
    </div>
    <transition name="fade" appear>
      <!-- <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in item" :key="i" class="menu-item">
          <a :href="item.link"> <span><i :class="item.trash" ></i></span> {{ item.name }}</a>
          <hr>
        </div>
      </div> -->
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DropdownCart',
  props: ['name', 'size', 'quantity', 'price', 'trash'],
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapState('cart', ['currentValue'])
  }
}
</script>

<style lang="scss" scoped >

#nav .menu-item .sub-menu {
  position: absolute;
  top: calc(100%);
  transform: translateX(-0%);
  width: 125px;
  height: 168px;
  background-color: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.39);
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

.cart {
  background:#35353C;
  border-radius: 3px;
  color: #fff;
  height: 90px;
  width:80px;
  display:flex;
  justify-content: center;
  align-items: center;
}
.cart:hover {
  background-color: #525257;
  color: #98a3d1;
}
.cart i{
  margin: 0 3px;
  font-size: 18px;
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
