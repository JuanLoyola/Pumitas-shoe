<template>
  <div class="container">
    <section>
        <aside>
        <div>
          <img src="@/assets/img/shoe.png" alt="shoe">
        </div>

        <footer>
          <img src="@/assets/img/shoe.png">
          <img src="@/assets/img/shoe top.png">
          <img src="@/assets/img/shoeback.webp">
          <img src="@/assets/img/shoeback3.png">
        </footer>
      </aside>

      <aside>
        <main>
          <h1>{{model}}</h1>
          <h1 class="important">{{price}}</h1>

          <div>
            <div class="table">
              <p class="stock">US7</p>
              <p class="stockOff">US8</p>
              <p class="stock">US9</p>
              <p class="active">US10</p>
              <p class="stock">US11</p>
              <p class="stockOff">US12</p>
              <p class="table-add" @click="increaseValue()">
              ADD <i class="fas fa-plus"/>
            </p>
            </div>
          </div>

        </main>
      </aside>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Content',
  data () {
    return {
      model: 'Puma Rs-x Toys - Woman Shoes',
      price: '$169.00'
    }
  },
  computed: {
    ...mapMutations('cart', ['increaseValue'])
  }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #FCF6F3;
  height: 100%;
  section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 0 0 5rem;
    overflow:hidden;
  }

  section > aside{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: auto;
  }
  section > aside > div{
    border-radius: 50%;
    height: 500px;
    width: 500px;
    background: #CA2728;
    display: grid;
    place-items: center ;
    filter: drop-shadow(0 20px 20px  rgba(0,0,0,0.5));
  }

  section > aside > div img{
    width: 650px;
    transform: translate(-80px,-100px);
    transition: .7s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: brightness(125%);
    cursor: pointer;
  }
  section > aside > footer img{
    width: 50px;
    margin: 10px 10px;
  }
  section > aside > div img:hover{
    transform: rotateZ(27deg)  translate(-120px,-70px);
  }

  section > aside > main > h1{
    font-size: 3rem;
    text-align: start;
    letter-spacing: 2px;
  }

  section > aside > main > div{
    width: 100%;
    margin: 30px 0;
  }

  .table{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;

    &-add{
      background: #CA2728;

      border-radius: 9px;
      color: #fff;
      display:flex;
      justify-content: center;
      align-items: center;
      font-weight: normal;
      margin: 0 20px;
      height: 120px;
      width: 90px;
      filter: drop-shadow(0 10px 10px  rgba(0,0,0,0.5));
    }
    .table i{
      color:#FCF6F3;
      margin: 0 10px;
    }
    i{
      margin: 0 5px;
    }
    &-add:hover{
      background-color:hsl(360, 68%, 57%);
      cursor: pointer;
    }
  }
  .table p {
    margin: 0 10px;
    cursor: pointer;
  }
  .active{
    color: #DB644F;
  }
  .stock{
    color: #636261;
  }
  .stockOff{
    color: #B7ABAA;
  }
  .stockOff:hover{
    cursor:not-allowed;
  }
  .active, .stock:hover{
    color: #da5037;
  }
  .important{
    color: #CA2728;
  }
}
@media (max-width: 767px) {
  .container{
    background-color: #FCF6F3;
    height: 100%;
    section{
      flex-direction: column;
      padding: 1.5rem 0 0 0rem;
    }

    section > aside > div{
      height: 250px;
      width: 250px;
    }

    section > aside > div img{
      width: 250px;
      transform: translate(0px,-10px);
    }
    section > aside > div img:hover{
      transform: rotateZ(25deg)  translate(-20px,-20px);
    }
    section > aside > footer{
      flex-direction: row;
      display:flex;
      justify-content: center;
      align-items: center;
    }

    section > aside > main > h1{
      font-size: 1rem;
      letter-spacing: 2px;
      padding: 5px 35px;
    }
    section > aside > main > div{
      width: 100%;
      display:flex;
      justify-content: flex-end;
    }
    .table{
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 0.6rem;

      &-add{
        height: 90px;
        width: 60px;
      }
    }
    .table p {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .container{
    background-color: #FCF6F3;
    height: 100%;
    section{
      flex-direction: column;
      padding: 2rem 0 0 0rem;
    }

    section > aside > div{
      height: 350px;
      width: 350px;
    }

    section > aside > div img{
      width: 350px;
      transform: translate(0px,-10px);
    }
    section > aside > div img:hover{
      transform: rotateZ(25deg)  translate(-20px,-20px);
    }
    section > aside > footer{
      flex-direction: row;
      display:flex;
      justify-content: center;
      align-items: center;
    }

    section > aside > main > h1{
      font-size: 1.8rem;
      letter-spacing: 2px;
      padding: 5px 35px;
    }
    section > aside > main > div{
      width: 100%;
      display:flex;
      justify-content: flex-end;
    }
    .table{
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;

      &-add{
        height: 130px;
        width: 110px;
      }
    }
    .table p {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}

@media (min-width: 1920px) {
  .container{
    section{
      padding: 8rem 0 0 8rem;
    }

    section > aside{
      width: 50%;
    }

    section > aside > div img{
      width: 650px;
    }
    section > aside > footer img{
      width: 90px;
      margin: 20px 10px;
    }

    section > aside > main > h1{
      font-size: 4.5rem;
      text-align: start;
    }

    section > aside > main > div{
      width: 100%;
      margin: 30px 0;
    }
  }
}
</style>
