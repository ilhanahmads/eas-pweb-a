<template>
  <div class="container mx-auto my-8 flex flex-col items-center">
    <h1 class="text-2xl font-semibold mb-4">Form Registrasi Lomba</h1>
    <form @submit.prevent="submitForm" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="nama" class="block text-sm font-medium text-gray-600"
          >Nama:</label
        >
        <input
          type="text"
          id="nama"
          v-model="form.nama"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4">
        <label for="umur" class="block text-sm font-medium text-gray-600"
          >Umur:</label
        >
        <input
          type="number"
          id="umur"
          v-model="form.umur"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4">
        <label
          for="jenisKelamin"
          class="block text-sm font-medium text-gray-600"
          >Jenis Kelamin:</label
        >
        <input
          type="text"
          id="jenisKelamin"
          v-model="form.jenisKelamin"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600"
          >Email:</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div class="mb-4">
        <label for="asalSekolah" class="block text-sm font-medium text-gray-600"
          >Asal Sekolah:</label
        >
        <input
          type="text"
          id="asalSekolah"
          v-model="form.asalSekolah"
          required
          class="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Mengirim..." : "Daftar" }}
        </button>
      </div>
      <div v-if="isSubmitted" class="text-green-600 mt-2">
        Form berhasil terkirim!
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        nama: "",
        umur: 0,
        jenisKelamin: "",
        email: "",
        asalSekolah: "",
      },
      isSubmitting: false,
      isSubmitted: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        this.isSubmitting = true;

        const response = await axios.post(
          "http://localhost:3001/api/register",
          {
            docs: [this.form],
          }
        );

        console.log("API Response:", response.data);

        this.isSubmitted = true;
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
