<template>
  <form>
    <DetailViewHeader />
    <div class="tab-content m-t-15">
      <div
        id="product-edit-basic"
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
              v-for="(item, idx) in items"
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
          items: [
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
        }
    },
    computed: {

    },
    methods: {
        
    },
}
</script>
