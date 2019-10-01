/* eslint-disable */

export default {
  petsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    // return state.pets.filter((pet) => {
    //   return pet.species === "cat"
    // })
    return state.cats.length
  },
  getAllDogs: (state) => {
    
    return state.dogs.length
  }
}