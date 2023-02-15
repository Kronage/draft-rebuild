<template>
  <base-card>
    <h2>Add a team</h2>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid: !enteredName.isValid}">
        <label for="teamName">Team Name</label>
        <input type="text" maxlength="40" id="teamName" v-model.trim="enteredName.val" @blur="clearValidity(enteredName)" />
        <p v-if="!enteredName.isValid">Team Name must not be empty.</p>
      </div>
      <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
      <base-button>Add Team</base-button>
    </form>
  </base-card>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const addTeam = inject('addTeam')

const enteredName = reactive({
  val: '',
  isValid: true
})
const formIsValid = ref(true)

function submitForm() {
  validateForm()
  if (!formIsValid.value) {
    return
  }
  addTeam({
    id: "t"+store.getters['teams/idCounter'],
    name: enteredName.val,
    members: []
  })
  enteredName.val = ''
}

function validateForm() {
  formIsValid.value = true
  if (enteredName.val === '') {
    enteredName.isValid = false
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