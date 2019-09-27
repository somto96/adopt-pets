<template>
  <div>
    <h1>{{ animals.name }}</h1>
    <p>{{animals.age}}</p>
    <p>{{animals.breed}}</p>
  </div>
</template>

<script>
/*eslint-disable */
import { mapState } from "vuex";
export default {
  name: "pet",
  data() {
    return {
      animals: {}
    };
  },
  computed: {
    ...mapState(["cats", "dogs"])
  },
  mounted() {
    const pets = this[this.$route.params.species][this.$route.params.id];
    this.animals = pets;
  }
};
</script>