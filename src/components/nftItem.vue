<script setup>
defineProps({
  commitment: String,
  nftNumber: BigInt
})
</script>

<template>
  <div style="padding: 0px 25px;">
    <img :src="'https://api.ninjas.cash/icons/'+nftNumber" style="width: 240px;" />
    <div>CASHNINJA-{{ nftNumber }}</div>
    <div>commitment: {{ commitment }}</div>
  </div>
</template>