<template>
  <div class="file-manager-wrapper">
    <div class="file-manager-content">
      <div class="file-manager-content-body">
        <div class="file-manager-content-files">
          <div class="unselect-bg" />
          <div class="file-wrapper m-t-20">
            <div class="file vertical">
              <div class="font-size-40">
                <i class="anticon anticon-file-pdf text-danger" />
              </div>
              <div class="m-t-10">
                <h6 class="mb-0">
                  App Flow.pdf
                </h6>
                <span class="font-size-13 text-muted">19.8MB</span>
              </div>
            </div>
            <div class="file vertical">
              <div class="font-size-40">
                <i class="anticon anticon-file-word text-primary" />
              </div>
              <div class="m-t-10">
                <h6 class="mb-0">
                  Documentation.doc
                </h6>
                <span class="font-size-13 text-muted">1.2MB</span>
              </div>
            </div>
            <div class="file vertical">
              <div class="font-size-40">
                <i class="anticon anticon-file-excel text-success" />
              </div>
              <div class="m-t-10">
                <h6 class="mb-0">
                  Expensess.xls
                </h6>
                <span class="font-size-13 text-muted">518KB</span>
              </div>
            </div>
            <div class="file vertical">
              <div class="font-size-40">
                <i class="anticon anticon-file-ppt text-secondary" />
              </div>
              <div class="m-t-10">
                <h6 class="mb-0">
                  Presentation.ppt
                </h6>
                <span class="font-size-13 text-muted">308KB</span>
              </div>
            </div>
            <div class="file vertical">
              <div class="font-size-40">
                <i class="anticon anticon-file-word text-primary" />
              </div>
              <div class="m-t-10">
                <h6 class="mb-0">
                  Guideline.doc
                </h6>
                <span class="font-size-13 text-muted">1.2MB</span>
              </div>
            </div>
            <div class="file vertical">
              <div class="font-size-40">
                <i class="anticon anticon-file-excel text-success" />
              </div>
              <div class="m-t-10">
                <h6 class="mb-0">
                  Annual_Report.xls
                </h6>
                <span class="font-size-13 text-muted">518KB</span>
              </div>
            </div>
            <div class="file vertical">
              <div class="font-size-40">
                <i class="anticon anticon-file-word text-primary" />
              </div>
              <div class="m-t-10">
                <h6 class="mb-0">
                  Design_brief.doc
                </h6>
                <span class="font-size-13 text-muted">168KB</span>
              </div>
            </div>
          </div>
        </div>
        <DetailViewFileManagerDetail />
      </div>
    </div>
  </div>
</template>


<script>
import DetailViewFileManagerDetail from "@/components/detail-view/parts/detail-view-file-manager-detail"

export default {
    components: {
      DetailViewFileManagerDetail,
    },
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