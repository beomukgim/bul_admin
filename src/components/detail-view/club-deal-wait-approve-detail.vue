<template>
  <form>
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
        <div class="m-b-15">
          <button class="btn btn-primary">
            <i class="anticon anticon-save" />
            <span>Save</span>
          </button>
        </div>
      </div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-toggle="tab"
            href="#product-edit-basic"
          >클럽딜 정보</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="tab"
            href="#product-edit-option"
          >첨부 서류</a>
        </li>
      </ul>
    </div>
    <div class="tab-content m-t-15">
      <div
        id="product-edit-basic"
        class="tab-pane fade show active"
      >
        <div class="card">
          <div class="card-body">
            <div>hello</div>
          </div>
        </div>
      </div>
      <div
        id="product-edit-option"
        class="tab-pane fade"
      >
        <div class="card">
          <div class="card-body">
            <div>hello</div>
          </div>
        </div>
      </div>
    </div>
  </form>
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
