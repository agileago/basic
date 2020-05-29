<template>
  <i class="svg-icon">
    <svg aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script>
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('../../icons', true, /\.svg$/)
requireAll(req)

export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`
    },
  },
}
</script>

<style lang="scss" type="text/scss">
.svg-icon {
  display: inline-block;
  font-style: normal;
  vertical-align: -0.125em;
  text-align: center;
  text-transform: none;
  line-height: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
    line-height: 1;
  }
}
</style>
