<template>
  <label class="label"><slot /></label>
</template>

<script>
export default {
  name: "Label",
};
</script>

<style computed lang="scss">
.label {
  display: block;
  margin-bottom: 4px;
}
</style>
