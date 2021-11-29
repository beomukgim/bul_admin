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
                <td>d</td>
                <td>d</td>
              </tr>
            </slot>
            
            <!-- <tr>
              <td>Price:</td>
              <td class="text-dark font-weight-semibold">
                $199.00
              </td>
            </tr>
            <tr>
              <td>Category:</td>
              <td>	Cloths</td>
            </tr>
            <tr>
              <td>Brand:</td>
              <td>H&M</td>
            </tr>
            <tr>
              <td>Tax Rate:</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <span class="badge badge-pill badge-cyan">In Stock</span>
              </td>
            </tr> -->
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