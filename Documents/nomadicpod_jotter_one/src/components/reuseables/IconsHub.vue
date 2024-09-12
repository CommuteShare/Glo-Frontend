<script>
export default {
  name: "IconsHub",
  props: {
    name: [String],
    color: {
      type: [String],
      default: "#004aad",
    },
    width: [String],
    height: [String],
  },
}

</script>

<template>
<div>

  <svg v-if="name === 'arrow-right'"  width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.39453 16.92L9.0012 10.4C9.89953 9.62999 9.89953 8.36999 9.0012 7.59999L1.39453 1.07999" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


</div>
</template>

<style scoped lang="scss">

</style>