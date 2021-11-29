<template>
  <div
    id="approveModal"
    class="modal fade bd-example-modal-xl"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="exampleModalCenterTitle"
            class="modal-title"
          >
            Modal title
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
          >
            <i class="anticon anticon-close" />
          </button>
        </div>
        <div class="modal-body block-text-left">
          <div class="form-group">
            <input
              id="editorTitle"
              type="text"
              class="form-control"
              placeholder="제목"
            >
          </div>
          <div>
            <div id="editor">
              <p>Hello World!</p>
              <p>Some initial <strong>bold</strong> text</p>
              <p><br></p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-default"
            data-dismiss="modal"
          >
            이전으로
          </button>
          <button
            type="button"
            class="btn btn-primary"
          >
            전송하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Quill from "@/assets/vendors/quill/quill.min.js"

export default {
    components: {

    },
    data(){
        return {
            
        }
    },
    computed: {

    },
    mounted(){
        new Quill('#editor', {
            // scrollingContainer: '.scroll-container',
            theme: 'snow',
        })
    },
    methods: {
        
    },
}
</script>
<style scoped src="./style.css"></style>