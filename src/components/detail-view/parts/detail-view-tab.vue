<template>
  <ul class="nav nav-tabs">
    <li
      v-for="(value, key) in tabs"
      :key="key"
      class="nav-item"
    >
      <a
        class="nav-link"
        :class="{'active' : key === 'basic'}"
        data-toggle="tab"
        :href="`#${key}`"
      >{{ $objectMapper(key) }}</a>
    </li>
  </ul>
</template>


<script>
export default {
    components: {},
    props: {
      tabs: Object(),
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