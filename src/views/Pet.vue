<template>
  <div>
    <h1>{{ animals.name }}({{this.$route.params.species}})</h1>
    <p>Age: {{animals.age}} years old</p>
    <p>Breed: {{animals.breed}}</p>
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