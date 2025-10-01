<template>
  <section :class="sectionClass" :style="sectionStyle">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Section',
  props: {
    sectionClass: {
      type: String,
      default: '',
    },
    sectionStyle: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => ({}),
    },
  },
  setup(props) {
    return { ...props }
  },
})
</script>

<style scoped>
section {
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
}
</style>
