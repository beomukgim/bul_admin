<template>
  <div class="file-manager-content-details">
    <div class="content-details d-none">
      <div class="p-h-25 p-v-15 d-flex justify-content-between align-items-center border-bottom">
        <h5 class="m-b-0">
          App Flow.pdf
        </h5>
        <div class="content-details-close">
          <a
            class="text-dark"
            href="javascript:void(0);"
          >
            <i class="anticon anticon-right-circle" />
          </a>
        </div>
      </div>
      <div class="m-b-10">
        <div class="d-flex justify-content-around display-3 align-items-center content-details-file">
          <i class="anticon anticon-file-pdf text-danger" />
        </div>
      </div>
      <div
        id="myTabContent"
        class="tab-content m-t-15"
      >
        <div
          id="tab-details"
          class="tab-pane fade show active"
        >
          <div class="p-h-25 p-v-15">
            <dl class="row m-b-10">
              <dt class="col-5 text-dark">
                Type:
              </dt>
              <dd class="col-7">
                pdf
              </dd>
            </dl>   
            <dl class="row m-b-10">
              <dt class="col-5 text-dark">
                Size:
              </dt>
              <dd class="col-7">
                19.8MB
              </dd>
            </dl>   
            <dl class="row m-b-10">
              <dt class="col-5 text-dark">
                Created:
              </dt>
              <dd class="col-7">
                Feb 17, 2019
              </dd>
            </dl> 
            <dl class="row m-b-10">
              <dt class="col-5 text-dark">
                Author:
              </dt>
              <dd class="col-7">
                Erin Gonzales
              </dd>
            </dl>    
          </div>
        </div>
      </div>
    </div>
    <div class="content-details-no-data">
      <div class="text-center">
        <img
          class="img-fluid opacity-04"
          :src="require('@/assets/imgs/file-manager.png')"
          alt=""
        >
        <p class="text-muted m-t-20">
          자세한 내용을 보려면 파일을 선택해 주세요.
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    components: {},
    props: {
    },
    data(){
        return {
            
        }
    },
    computed: {

    },
    mounted(){
        
    },
    destroyed(){
        
    },
    methods: {
        

    
    },
}
</script>
<style scoped src="./style.css"></style>