<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NftItem from './components/NftItem.vue'
import { ref, onMounted } from "vue"
import { vmNumberToBigInt, hexToBin } from "@bitauth/libauth"

const listCommitments = ["7604", "a704", "bf04"]
const ninjaList = []
for(const commitment of listCommitments){
  ninjaList.push({
    commitment: commitment,
    nftNumber: vmNumberToBigInt(hexToBin(commitment)) + 1n
  })
}
const ninjas = ref(ninjaList)

onMounted(async()=>{

})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="First bch app!" />   
    </div>
  </header>

  <main style="margin-top: 50px; display: flex;">
    <div v-for="ninja in ninjas">
      <NftItem :commitment="ninja.commitment" :nftNumber="ninja.nftNumber"/>
    </div>
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
    width: 1000px;
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
