<template>
  <DetailView />
</template>

<script>
import DetailView from "@/components/detail-view/club-deal-wait-approve-detail"

export default {
    components: {
      DetailView,
    },
    data(){
        return {
            
        }
    },
    computed: {

    },
    mounted(){
      console.log(this.$route.params)
    },
    methods: {
        
    },
}
</script>