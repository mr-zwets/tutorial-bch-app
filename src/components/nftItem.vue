<script setup>
const props = defineProps({
  commitment: String,
  nftNumber: Number
})
</script>

<template>
    <div style="width: 100px;">
      <img :src="'https://api.ninjas.cash/icons/'+nftNumber"/>
      <div>{{ 'CASHNINJA-' + nftNumber }}</div>
      <div>commitment: {{ commitment }}</div>
    </div>
</template>