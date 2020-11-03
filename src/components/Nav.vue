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
            <a class="bag" href="#">
              <i class="fas fa-shopping-cart"></i> {{currentValue || 0}}
            </a>
          </li>
          <li class="userIcon">
            <img src="../assets/img/user.png" alt="user-icon">
            <i class="fas fa-sort-down"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Nav',
  computed: {
    ...mapState('cart', ['currentValue'])
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
  .userIcon i{
    color: black;
    visibility: visible;
    display:flex;
    align-items: center;
    cursor: pointer;
  }
  .userIcon{
    width: 2px;
    display:flex;
    flex-direction: row;
  }
  .userIcon img{
    width: 50px;
    border-radius: 50%;
    margin: 0 20px;
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
  .bag {
    background:#35353C;
    color: #fff !important; // find the why i need !important
    height: 70px;
    width:80px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .bag:hover {
    background-color: #525257;
    color: #7389E1 !important; // find the why i need !important
  }
  .bag i{
    margin: 0 3px;
    font-size: 18px;
  }
  #nav .menu-btn i{
    color: #333;
    font-size: 22px;
    padding: 0 30px;
    cursor: pointer;
    display:none;
  }

  input[type="checkbox"] {
    display: none;
  }
  @media (max-width: 1000px){
    #nav{
      padding: 0 40px 0 110px;
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
      position: fixed;
      top: 80px;
      left: -100%;
      background: rgb(192, 191, 191);
      height: 117vh;
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
      margin: 40px 0;
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
      .bag {
      background: none;
      color: #fff !important;
      height: 30px;
    }
  }
}
</style>
