<template>
  <div class="card">
    <div class="card-header">
      <slot name="title">
        <h4 class="card-title">
          title
        </h4>
      </slot>
    </div>
    <div class="card-body">
      <slot name="contents">
        <div>contents</div>
      </slot>
    </div>
  </div>
</template>


<script>
export default {
    components: {
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