<template>
  <div class="input-group">
      <slot />
  </div>
</template>

<script>
export default {
  name: "FieldGroup",
};
</script>

<style computed lang="scss">
    .input-group {
        margin-bottom: 40px;
    }
</style>
