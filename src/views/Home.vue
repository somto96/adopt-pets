<template>
  <div class="home">
    <h1>Adopt a pet today</h1>
    <button @click="toggleForm" class="btn btn-primary">Adopt a pet today!</button>
    <b-form @submit.prevent="handleSubmit" v-if="showForm">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          type="number"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
/*eslint-disable */
import { mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      showForm: false,
      form: {
        name: "",
        age: 0,
        species: null
      }
    };
  },
  methods: {
    ...mapActions(["addPet"]),
    toggleForm() {
      this.showForm = !this.showForm;
    },
    handleSubmit() {
      const { species, name, age } = this.form;
      const payload = {
        species,
        pet: {
          name,
          age
        }
      };
      this.addPet(payload);

      // Resets the form after submission
      this.form = {
        name: "",
        age: 0,
        species: null
      };
    }
  }
};
</script>
