<template>
  <div class="field-group">
      <slot />
  </div>
</template>

<script>
export default {
  name: "FieldGroup",
};
</script>

<style computed lang="scss">
    .field-group {
        position: relative;
        margin-bottom: 40px;
    }
</style>
