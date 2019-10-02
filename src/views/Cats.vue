<template>
  <div>
    <PetTable species="cats" :pets="cats" />
  </div>
</template>

<script>
/*eslint-disable */
import { mapState } from "vuex";
import PetTable from "@/components/PetTable.vue";
export default {
  components: {
    PetTable
  },
  name: "cats",
  data() {
    return {};
  },
  computed: {
    ...mapState(["cats"])
  }
};
</script>