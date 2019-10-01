<template>
  <div class="home">
    <h1>Adopt a pet today</h1>
<<<<<<< HEAD
    {{getAllCats}} Cats / {{getAllDogs}} Dogs / {{petsCount}} Pets
    <button @click="toggleForm" class="btn btn-primary">Adopt a pet now!</button>
    <b-form @submit.prevent="submitHandler" v-if="showForm">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
=======
    <button @click="toggleForm" class="btn btn-primary">Adopt a pet today!</button>
    <b-form @submit.prevent="handleSubmit" v-if="showForm">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
>>>>>>> 3343d53b0a63415e439e26e90c3ba45e28bbcf8f
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

<<<<<<< HEAD
      <b-form-group id="input-group-1" label="Age:" label-for="input-1">
        <b-form-input
          id="input-1"
=======
      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
>>>>>>> 3343d53b0a63415e439e26e90c3ba45e28bbcf8f
          v-model="form.age"
          type="number"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>
<<<<<<< HEAD
      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
=======

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
>>>>>>> 3343d53b0a63415e439e26e90c3ba45e28bbcf8f
    </b-form>
  </div>
</template>

<script>
/*eslint-disable */
<<<<<<< HEAD
import { mapActions, mapGetters } from "vuex";
=======
import { mapActions } from "vuex";
>>>>>>> 3343d53b0a63415e439e26e90c3ba45e28bbcf8f
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
<<<<<<< HEAD
  computed: {
    ...mapGetters([
      'petsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
=======
>>>>>>> 3343d53b0a63415e439e26e90c3ba45e28bbcf8f
  methods: {
    ...mapActions(["addPet"]),
    toggleForm() {
      this.showForm = !this.showForm;
    },
<<<<<<< HEAD
    submitHandler() {
      const { name, age, species } = this.form;
=======
    handleSubmit() {
      const { species, name, age } = this.form;
>>>>>>> 3343d53b0a63415e439e26e90c3ba45e28bbcf8f
      const payload = {
        species,
        pet: {
          name,
          age
        }
      };
      this.addPet(payload);

<<<<<<< HEAD
      // resets the form
=======
      // Resets the form after submission
>>>>>>> 3343d53b0a63415e439e26e90c3ba45e28bbcf8f
      this.form = {
        name: "",
        age: 0,
        species: null
      };
    }
  }
};
</script>
