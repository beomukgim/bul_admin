<template>
  <div>
    <DetailViewHeader />
    <div class="tab-content m-t-15">
      <DetailViewTab :tabs="items" />
      <div class="row">
        <div class="col-xxxl-9 col-xxl-8">
          <div
            id="basic"
            class="tab-pane fade show active"
          >
            <DetailViewContentsInfoCard>
              <template v-slot:title>
                <h4 class="card-title">
                  회사소개
                </h4>
              </template>
              <template v-slot:contents>
                <div>너무 좋은 회사</div>
              </template>
            </DetailViewContentsInfoCard>
            <DetailViewContentsInfoTable>
              <template v-slot:title>
                <h4 class="card-title">
                  기본정보
                </h4>
              </template>
              <template v-slot:contents>
                <tr
                  v-for="(item, idx) in items.basic"
                  :key="idx"
                >
                  <td>
                    <span>{{ item.key }}</span>
                  </td>
                  <td>
                    <span :class="`${item.style}`">{{ item.value }}</span>
                  </td>
                </tr>
              </template>
            </DetailViewContentsInfoTable>
          </div>
          <div
            id="file"
            class="tab-pane fade"
          >
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
                      <ul
                        id="myTab"
                        class="nav nav-tabs nav-justified"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            data-toggle="tab"
                            href="#tab-details"
                          >Details</a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#tab-activity"
                          >Activity</a>
                        </li>
                      </ul>
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
                                Modified:
                              </dt>
                              <dd class="col-7">
                                Feb 17, 2019
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
                          <div class="border-top border-bottom p-h-25 p-v-10 d-flex align-items-center">
                            <span class="text-dark font-weight-semibold m-r-10">Add Description</span> 
                            <button class="m-r-5 btn btn-icon btn-hover btn-rounded btn-sm">
                              <i class="anticon anticon-edit" />
                            </button>
                          </div> 
                        </div>
                        <div
                          id="tab-activity"
                          class="tab-pane fade"
                          role="tabpanel"
                        >
                          <div class="p-h-20 p-v-15">
                            <div class="m-b-25">
                              <div class="p-b-10 border-bottom">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-image m-r-10">
                                    <img
                                      src="assets/images/avatars/thumb-1.jpg"
                                      alt=""
                                    >
                                  </div>
                                  <div class="text-gray">
                                    <span class="text-dark font-weight-semibold">Erin Gonzales </span>
                                    <span>added </span>
                                    <span>2 files</span>
                                    <div class="text-muted font-size-13">
                                      7:57PM
                                    </div>
                                  </div>
                                </div>
                                <ul class="list-unstyled m-l-50 m-t-15">
                                  <li class="m-b-15">
                                    <div class="avatar avatar-icon avatar-red avatar-sm">
                                      <i class="anticon anticon-file-pdf" />
                                    </div>
                                    <span class="text-gray">Guide Line.pdf</span>
                                  </li>
                                  <li class="m-b-15">
                                    <div class="avatar avatar-icon avatar-blue avatar-sm">
                                      <i class="anticon anticon-file-word" />
                                    </div>
                                    <span class="text-gray">Business Plan.doc</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="m-b-25">
                              <div class="p-b-10 border-bottom">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-image m-r-10">
                                    <img
                                      src="assets/images/avatars/thumb-1.jpg"
                                      alt=""
                                    >
                                  </div>
                                  <div class="text-gray">
                                    <span class="text-dark font-weight-semibold">Erin Gonzales </span>
                                    <span>added </span>
                                    <span>1 files</span>
                                    <div class="text-muted font-size-13">
                                      7:57PM
                                    </div>
                                  </div>
                                </div>
                                <ul class="list-unstyled m-l-50 m-t-15">
                                  <li class="m-b-15">
                                    <div class="avatar avatar-icon avatar-cyan avatar-sm">
                                      <i class="anticon anticon-file-excel" />
                                    </div>
                                    <span class="text-gray">Expenses.xls</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="content-details-no-data">
                      <div class="text-center">
                        <img
                          class="img-fluid opacity-04"
                          src="assets/images/others/file-manager.png"
                          alt=""
                        >
                        <p class="text-muted m-t-20">
                          Select folder or file to view details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxxl-3 col-xxl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h5>변경 이력</h5>
                <div />
              </div>
              <div class="m-t-30">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <td
                          class="py-4 rounded-left-3"
                        >
                          서류 접수
                        </td>
                        <td>2021.10.01 11:30:59</td>
                        <td
                          class="pr-0 rounded-right-3"
                        />
                      </tr>
                      <tr>
                        <td
                          class="py-4 rounded-left-3"
                        >
                          서류 접수
                        </td>
                        <td>2021.10.01 11:30:59</td>
                        <td
                          class="pr-0 rounded-right-3"
                        >
                          <span class="badge badge-pill badge-cyan font-size-12">
                                                    
                            <span
                              class="font-weight-semibold m-l-5 ml-0"
                            >현재 상태</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailViewHeader from "@/components/detail-view/parts/detail-view-header"
import DetailViewContentsInfoCard from "@/components/detail-view/parts/detail-view-contents-info-card"
import DetailViewContentsInfoTable from "@/components/detail-view/parts/detail-view-contents-info-table"
import DetailViewTab from "@/components/detail-view/parts/detail-view-tab"

export default {
    components: {
      DetailViewHeader,
      DetailViewContentsInfoCard,
      DetailViewContentsInfoTable,
      DetailViewTab,
    },
    data(){
        return {
          items: {
            basic: [
              {
                key: "진행상태",
                value: "서류접수",
                style: "badge badge-pill badge-cyan",
              },
              {
                key: "신청한 파트너",
                value: "김서호",
                style: "",
              },
              {
                key: "접수일",
                value: "2021.10.02",
                style: "",
              },
              {
                key: "마감일",
                value: "2021.12.31",
                style: "",
              },
              {
                key: "총 모집금액",
                value: "137,000,000,000달러",
                style: "",
              },
              {
                key: "1주 당 금액",
                value: "137달러",
                style: "",
              },
              {
                key: "주식 수량",
                value: "100,000주",
                style: "",
              },
              {
                key: "주식 종류",
                value: "보통주",
                style: "",
              },
              {
                key: "투자 형태",
                value: "직접 투자",
                style: "",
              },
            ],
            file: [

            ],
          },
        }
    },
    computed: {

    },
    mounted(){
      this.$fileManagerOn()
    },
    destroyed(){
      this.$fileManagerOff()
    },
    methods: {
        
    },
}
</script>
<style scoped src="./parts/style.css"></style>