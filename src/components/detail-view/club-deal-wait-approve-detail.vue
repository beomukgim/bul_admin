<template>
  <form>
    <DetailViewHeader />
    <div class="tab-content m-t-15">
      <div
        id="product-edit-basic"
        class="tab-pane fade show active"
      >
        <DetailViewContentsInfoCard />
        <DetailViewContentsInfoTable />
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
import DetailViewHeader from "@/components/detail-view/parts/detail-view-header"
import DetailViewContentsInfoCard from "@/components/detail-view/parts/detail-view-contents-info-card"
import DetailViewContentsInfoTable from "@/components/detail-view/parts/detail-view-contents-info-table"

export default {
    components: {
      DetailViewHeader,
      DetailViewContentsInfoCard,
      DetailViewContentsInfoTable,
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
