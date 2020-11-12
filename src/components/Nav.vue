<template>
  <div class="container">
    <div id="nav">
      <div>
        <input type="checkbox" id="click">
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li><a href="#">New</a></li>
          <li><a href="#">Man</a></li>
          <li><a href="#">Woman</a></li>
          <li>
            <a class="logo" href="#">
              <img src="../assets/img/puma-logo.svg" alt="puma logo">
            </a>
          </li>
          <li><a href="#">SEARCH</a></li>
          <li>
            <DropdownCart :item="cart">
            </DropdownCart>
          </li>
          <li>
            <DropdownUser :items="services">
            </DropdownUser>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownUser from '@/components/DropdownUser.vue'
import DropdownCart from '@/components/DropdownCart.vue'

export default {
  name: 'Nav',
  components: {
    DropdownUser,
    DropdownCart
  },
  data () {
    return {
      services: [
        {
          title: 'Settings',
          link: '#',
          icon: 'fas fa-cogs'
        },
        {
          title: 'Feedback',
          link: '#',
          icon: 'fas fa-comment-dots'
        },
        {
          title: 'Help',
          link: '#',
          icon: 'fas fa-exclamation-triangle'
        },
        {
          title: 'Logout',
          link: '#',
          icon: 'fas fa-sign-out-alt'
        }
      ],
      cart:
        {
          name: 'Rs-x Toys',
          size: 'US10',
          quantity: '',
          trash: 'fas fa-trash-alt',
          price: '$ 169.00'
        }
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0px;
}
.container{

  #nav {
  display: flex;
  height: 80px;
  width: 100%;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 2;

  font-family: 'Poppins';
  color:#000;
  position: sticky;
  top: 0;
}
#nav ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
}

#nav ul li{
  margin: 0 20px;

  .logo img{
    width: 105px;
  }

}
  #nav ul li a{
    color: #000;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 8px 0.3rem;
    border-radius: 5px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }
  #nav ul li a:hover{
    color:#7389E1;
  }

  #nav .menu-btn i{
    color: #333;
    font-size: 22px;
    padding: 0 20px;
    cursor: pointer;
    display:none;
  }

  input[type="checkbox"] {
    display: none;
  }
  @media (max-width: 1000px){
    #nav .menu-btn i{
      padding: 0 0 0 250px;
    }
  }
  @media (max-width: 920px) {
    #nav .menu-btn i{
      display: block;
      color :#35353C;
    }
    #click:checked ~ .menu-btn i:before{
      content: "\f00d";
    }
    #nav ul{
      position: absolute;
      top: 80px;
      left: -100%;
      background:#FCF6F3;
      height: 104vh;
      width: 100%;
      text-align: center;
      display: block;
      transition: all 0.3s ease;
    }
    #click:checked ~ ul{
      left: 0;
    }
    #nav ul li{
      width: 100%;
      margin: 10px 0px;
    }
    #nav ul li a{
      width: 100%;
      margin-left: -100%;
      display: block;
      font-size: 20px;
      transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    #click:checked ~ ul li a{
      margin-left: 0px;
    }
    #nav ul li a.active,
    #nav ul li a:hover{
      background: none;
      color: cyan;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px){
    #nav .menu-btn i{
      padding: 0 0 0 35rem;
    }
  }
}
</style>
