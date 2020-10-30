<template>
  <div class="home">
    <Nav></Nav>
    <Content></Content>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'Home',
  components: {
    Nav, Content
  }
}
</script>
