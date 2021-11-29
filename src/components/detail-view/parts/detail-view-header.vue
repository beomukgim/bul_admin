<template>
  <div class="page-header no-gutters has-tab">
    <div class="d-md-flex m-b-15 align-items-center justify-content-between">
      <div class="media align-items-center m-b-15">
        <div
          class="avatar avatar-image rounded"
          style="height: 70px; width: 70px"
        >
          <img
            src="assets/images/others/thumb-16.jpg"
            alt=""
          >
        </div>
        <div class="m-l-15">
          <h4 class="m-b-0">
            Skinny Men Blazer
          </h4>
          <p class="text-muted m-b-0">
            Code: #5325
          </p>
        </div>
      </div>
      <div class="m-b-15 w-50 block-text-right">
        <button
          class="btn btn-danger btn-tone m-r-15 w-rem-9"
          data-toggle="modal"
          data-target="#rejectModal"
        >
          <i class="anticon" />
          <span>거절 하기</span>
        </button>
        <DetailViewModal />
        <button
          class="btn btn-primary w-rem-9"
          data-toggle="modal"
          data-target="#approveModal"
        >
          <i class="anticon" />
          <span>서류 승인</span>
        </button>
        <!-- modal -->
        
        <!-- modal -->
      </div>
    </div>
  </div>
</template>


<script>
import DetailViewModal from "@/components/detail-view/parts/detail-view-modal"

export default {
    components: {
      DetailViewModal,
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