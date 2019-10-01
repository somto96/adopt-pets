<template>
  <div>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
/*eslint-disable */
import { mapState } from "vuex";
export default {
  name: "cats",
  data() {
    return {};
  },
  computed: {
    ...mapState(["cats"])
  },
 
};
</script>