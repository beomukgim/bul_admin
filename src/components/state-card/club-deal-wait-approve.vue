<template>
  <div class="row">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="col-md-6 col-lg-3"
    >
      <div class="card">
        <div class="card-body">
          <StateCard :option="item">
            <template v-slot:title>
              <span>{{ item.title }}</span>
            </template>
            <template v-slot:value>
              <span>{{ item.value }}</span>
            </template>
          </StateCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StateCard from "@/components/state-card/parts/state-card"

export default {
    components: {
        StateCard,
    },
    data(){
        return {
            items: [
                {
                    title: "서류 접수",
                    value: "5개",
                    icon: "file-text",
                    color: "grey",
                },
                {
                    title: "세부 검토",
                    value: "26개",
                    icon: "file-search",
                    color: "blue",
                },
                {
                    title: "승인 완료",
                    value: "37개",
                    icon: "close-circle",
                    color: "green",
                },
                {
                    title: "거절됨",
                    value: "16개",
                    icon: "check-circle",
                    color: "red",
                },
            ],
        //   documentReceivement: {
        //     title: "서류 접수",
        //     value: "5개",
        //     icon: "file-text",
        //     color: "grey",
        //   },
        //   detailsReview: {
        //     title: "세부 검토",
        //     value: "26개",
        //     icon: "file-search",
        //     color: "blue",
        //   },
        //   approval: {
        //     title: "승인 완료",
        //     value: "37개",
        //     icon: "close-circle",
        //     color: "green",
        //   },
        //   reject: {
        //     title: "거절됨",
        //     value: "16개",
        //     icon: "check-circle",
        //     color: "red",
        //   },
        }
    },
    computed: {

    },
    methods: {
        
    },
}
</script>
