<template>
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <p class="m-b-0">
        <slot name="title">
          <span>title</span>
        </slot>
      </p>
      <h2 class="m-b-0">
        <slot name="value">
          <span>value</span>
        </slot>
      </h2>
    </div>
    <div
      class="avatar avatar-icon avatar-lg"
      :class="`avatar-${option.color}`"
    >
      <i
        class="anticon"
        :class="`anticon-${option.icon}`"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: {
      option: Object(),
    },
    data(){
      return {
        
      }
    },
    computed: {

    },
    methods: {
      
    },
}
</script>
<style scoped src="./style.css"></style>
