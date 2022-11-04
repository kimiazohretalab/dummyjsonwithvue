<template>
  <label class="flex items-center pl-1">
    <input
      type="checkbox"
      :id="id"
      :value="modelValue"
      :checked="isChecked"
      @change="emitUncheck($event.target.checked)"
      @input="$emit('update:modelValue', $event.target.value)"
      @click="clickHandler(modelValue)"
      class="border border-slate-600 w-4 h-4"
    />
    <span class="checkmark"></span>
    <p class="pl-4 text-zinc-800">{{ label }}</p>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    modelValue: { type: String, default: "" },
    isChecked: Boolean,
    label: { type: String },
    value: { type: Array },
    id: { type: Number },
  },
  methods: {
    clickHandler(modelValue) {
      if(this.isChecked === false) {
        this.$emit('filter', modelValue);
      } else {
        this.$emit('filter', '');
      }
    },
    emitUncheck(event) {
      if(!event){
        this.$emit('remove-selected-filter', this.id);
      }
    }
  }
};
</script>