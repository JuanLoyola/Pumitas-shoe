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
          <h3> {{currentValue || 0}}</h3>

          <div>
            <div class="table">
              <p class="stock">US7</p>
              <p class="stockOff">US8</p>
              <p class="stock">US9</p>
              <p class="active">US10</p>
              <p class="stock">US11</p>
              <p class="stockOff">US12</p>
              <p class="table-add" @click="increaseValue(currentValue++)">
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

export default {
  name: 'Content',
  data () {
    return {
      model: 'Puma Rs-x Toys - Woman Shoes',
      price: '$169.00'
    }
  },
  computed: {
    increaseValue () {
      return this.$store.mutations.increaseValue
    }
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
  }

  section > aside > div img{
    width: 650px;
    transform: translate(-80px,-100px);
    filter: drop-shadow(0 40px 20px  rgba(0,0,0,0.5));
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
      background-color:#CA2728;
      border-radius: 9px;
      color: #fff;
      display:flex;
      justify-content: center;
      align-items: center;
      font-weight: normal;
      margin: 0 20px;
      height: 120px;
      width: 90px;
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
    width: 50%;
    height: auto;
  }
  section > aside > div{
    border-radius: 50%;
    height: 250px;
    width: 250px;
    background: #CA2728;
    display: grid;
    place-items: center ;
  }

  section > aside > div img{
    width: 250px;
    transform: translate(0px,-20px);
    filter: drop-shadow(0 40px 20px  rgba(0,0,0,0.5));
    transition: .7s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: brightness(125%);
    cursor: pointer;
  }
  section > aside > footer{
    flex-direction: row;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  section > aside > main > h1{
    font-size: 1rem;
    text-align: start;
    display:flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-flow: nowrap column;
    letter-spacing: 2px;
    background: salmon;
  }
  section > aside > main{
    width: 100%;       // seguir aca mañana
  }
  section > aside > main > div{
    width: 70%;
    margin: 0px 0;
    display:flex;
    justify-content: flex-end;
  }

  main > div {
    display:flex;
    background: cyan;
  }
  .table{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.6rem;

    &-add{
      height: 60px;
      width: 60px;
    }
  }
  .table p {
    margin: 0 12px;
    cursor: pointer;
  }
  .important{
    color:#CA2728;
  }
}
}
</style>
