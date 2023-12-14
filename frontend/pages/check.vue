<template>
  <div class="container mx-auto my-8 flex flex-col items-center">
    <h1 class="text-2xl font-semibold mb-4">Check Data</h1>
    <div class="mb-4">
      <label for="search" class="block text-sm font-medium text-gray-600"
        >Search by Email:</label
      >
      <input
        type="email"
        id="search"
        v-model="searchEmail"
        class="mt-1 p-2 w-full border rounded-md"
      />
    </div>
    <button
      @click="searchData"
      class="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Search
    </button>
    <div v-if="searchResult.length > 0" class="mt-4">
      <h2 class="text-lg font-semibold mb-2">Search Results:</h2>
      <div v-for="(mappedItem, index) in mappedSearchResult" :key="index">
        <p>
          Nama: {{ mappedItem.name }}, Age: {{ mappedItem.age }}, Email:
          {{ mappedItem.email }}, Status: {{ mappedItem.status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const baseUrl = "http://localhost:3001/api/register";

const searchEmail = ref("");
const searchResult = ref([]);
const mappedSearchResult = ref([]);

const searchData = async () => {
  try {
    const response = await axios.get(baseUrl);

    const responseData = response.data?.data || {};

    const dataArray = Array.isArray(responseData) ? responseData : [];

    mappedSearchResult.value = dataArray.map((item) => ({
      name: item.nama,
      age: item.umur,
      email: item.email,
      status: item.status,
    }));

    searchResult.value = dataArray.filter(
      (item) => item.email === searchEmail.value
    );
  } catch (error) {
    console.error("Error searching data:", error);
  }
};
</script>
