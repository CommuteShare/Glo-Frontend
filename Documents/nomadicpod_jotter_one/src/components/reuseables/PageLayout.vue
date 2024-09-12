<template>
  <div class="tw-flex tw-w-full tw-justify-center tw-h-auto">
    <slot name="Content"> </slot>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  props: {
    backImg: [String],
  },
};
</script>

<style scoped lang="scss"></style>
