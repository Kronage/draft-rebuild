<template>
  <base-card>
    <h2>Add a player</h2>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid: !enteredName.isValid}">
        <label for="fullName">Full Name</label>
        <input type="text" maxlength="30" id="fullName" v-model.trim="enteredName.val" @blur="clearValidity(enteredName)" />
        <p v-if="!enteredName.isValid">Full Name must not be empty.</p>
      </div>
      <div class="form-control" :class="{invalid: !enteredRole.isValid}">
        <label for="role">Role</label>
        <input type="text" maxlength="30" id="role" v-model.trim="enteredRole.val" @blur="clearValidity(enteredRole)" />
        <p v-if="!enteredRole.isValid">Role must not be empty.</p>
      </div>
      <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
      <base-button>Add Player</base-button>
    </form>
  </base-card>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const addPlayer = inject('addPlayer')

const enteredName = reactive({
  val: '',
  isValid: true
})
const enteredRole = reactive({
  val: '',
  isValid: true
})
const formIsValid = ref(true)

function submitForm() {
  validateForm()

  if (!formIsValid.value) {
    return
  }
  
  addPlayer({
    id: "u"+store.getters['players/idCounter'],
    fullName: enteredName.val,
    role: enteredRole.val,
    movies: []
  })
}

function validateForm() {
  formIsValid.value = true
  if (enteredName.val === '') {
    enteredName.isValid = false
    formIsValid.value = false
  }
  if (enteredRole.val === '') {
    enteredRole.isValid = false
    formIsValid.value = false
  }
}

function clearValidity(input) {
  input.isValid = true
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>