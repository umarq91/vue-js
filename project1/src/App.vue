<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './client.ts'

const countries = ref([])
const loading = ref(true)
const newCountry = ref('')
const isEditing = ref(false)
const editValue = ref('')
const editId = ref(null) // To store the ID of the country being edited

// Fetching countries from Supabase
async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
  loading.value = false
}

onMounted(() => {
  getCountries()
})

// Adding a new country
const addCountry = async () => {
  const { data } = await supabase.from('countries').insert({ name: newCountry.value })
  getCountries()
  newCountry.value = ''
}

// Deleting a country
const deleteCountry = async (id) => {
  loading.value = true
  await supabase.from('countries').delete().eq('id', id)
  getCountries()
  loading.value = false
}

// Starting the edit process
const startEdit = (id, name) => {
  isEditing.value = true
  editId.value = id
  editValue.value = name
}

// Cancel the edit process
const cancelEdit = () => {
  isEditing.value = false
  editId.value = null
  editValue.value = ''
}

// Updating the country after edit
const updateCountry = async () => {
  loading.value = true
  await supabase.from('countries').update({ name: editValue.value }).eq('id', editId.value)
  getCountries()
  cancelEdit()
  loading.value = false
}
</script>

<template>
  <div class="max-w-2xl mx-auto mt-6 p-4 rounded-lg shadow-lg bg-white">
    <!-- Loading Spinner -->
    <div v-if="loading" class="flex justify-center items-center py-4">
      <span class="text-lg text-gray-500">Loading...</span>
    </div>

    <!-- Country List -->
    <ul class="space-y-4">
      <li
        v-for="country in countries"
        :key="country.id"
        class="flex justify-between items-center py-3 px-4 border-b border-gray-200 rounded-md"
      >
        <span
          v-if="!isEditing || editId !== country.id"
          class="text-lg font-medium text-gray-700"
          >{{ country.name }}</span
        >

        <!-- Show the input and buttons when editing -->
        <div v-if="isEditing && editId === country.id" class="flex items-center space-x-3">
          <input
            v-model="editValue"
            type="text"
            class="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Edit country"
          />
          <button @click="cancelEdit" class="bg-gray-400 text-white px-4 py-2 rounded-md">
            Cancel
          </button>
          <button @click="updateCountry" class="bg-blue-600 text-white px-4 py-2 rounded-md">
            Update
          </button>
        </div>

        <!-- Show Edit/Delete buttons when not editing -->
        <div v-if="!isEditing || editId !== country.id" class="space-x-3">
          <button
            @click="startEdit(country.id, country.name)"
            class="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-1 rounded-md"
          >
            Edit
          </button>
          <button
            @click="deleteCountry(country.id)"
            class="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 px-3 py-1 rounded-md"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>

    <!-- Add Country Section -->
    <div class="mt-6">
      <input
        v-model="newCountry"
        placeholder="Add new country"
        class="w-full border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        @click="addCountry"
        :disabled="loading || !newCountry"
        class="w-full mt-4 py-2 rounded-md bg-blue-600 text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700"
      >
        Add Country
      </button>
    </div>
  </div>
</template>
