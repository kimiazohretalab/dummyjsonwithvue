<template>
  <div class="mb-10">
    <input
      type="text"
      class="border border-l-stone-700 rounded-md px-4 py-2"
      v-model="inputValue"
      placeholder="search product .."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(Val) {
      this.$emit("search", Val);
    },
  },
};
</script>

<style></style>
