<script setup>
defineProps({
  commitment: String,
  nftNumber: Number
})
</script>

<template>
  <div style="padding: 0px 25px;">
    <img :src="'https://api.ninjas.cash/icons/'+nftNumber" />
    <div>CASHNINJA-{{ nftNumber }}</div>
    <div>commitment: {{ commitment }}</div>
  </div>
</template>