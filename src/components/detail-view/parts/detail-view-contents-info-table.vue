<template>
  <div class="card">
    <div class="card-body">
      <slot name="title">
        <h4 class="card-title">
          title
        </h4>
      </slot>
      <div class="table-responsive">
        <table class="product-info-table m-t-20">
          <tbody>
            <slot name="contents">
              <tr>
                <td>contents</td>
                <td>contents</td>
              </tr>
            </slot>
          </tbody>
        </table> 
      </div>
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