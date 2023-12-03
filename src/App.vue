<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { Wallet } from "mainnet-js";
import { ref, onMounted } from "vue"

const address = ref("");
const balance = ref();

onMounted(async()=>{
  const wallet = await Wallet.newRandom()
  console.log(wallet.address)
  address.value = wallet.address
  const balanceSat = await wallet.getBalance('sat')
  console.log(balanceSat)
  balance.value = balanceSat
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="First bch app!" />
      {{ address  }}
      balance: {{ balance }}
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
