<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-900 to-purple-900 p-4">

    <div class="absolute inset-0 flex items-center justify-center">
      <img 
        src="/images/LOGO3D_SMARTTELCO-NoBG.png" 
        alt="Background Illustration atas" 
        class="w-[500px] md:w-[800px] opacity-90 pointer-events-none" 
      />
    </div>
    
    <div class="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-xl shadow-2xl overflow-hidden bg-white/70 backdrop-blur-lg border border-white/50">
      
      <div class="flex flex-col justify-center p-8 lg:p-10 space-y-6 text-red text-center"> 
        <h2 class="text-2xl lg:text-3xl font-extrabold mb-4 border-b border-blue-400 pb-3">
          Daftar untuk Akses Penuh
        </h2>
        <p class="text-sm leading-relaxed opacity-90 text-justify">
          Bergabunglah dengan <span class="font-semibold text-red-700">SmartTelco</span> untuk mendapatkan rekomendasi paket yang dirancang khusus untuk pola penggunaan Anda.
        </p>
        <ul class="text-sm space-y-2 pt-2">
          <li class="flex items-start">
            <span class="text-green-600 mr-2 text-xl">✅</span> Mendapatkan Produk layanan terbaik.
          </li>
          <li class="flex items-start">
            <span class="text-indigo-600 mr-2 text-xl">⏱️</span> Akses langsung ke fitur simulasi dan hasil.
          </li>
          <li class="flex items-start">
            <span class="text-blue-600 mr-2 text-xl">🔒</span> Data Anda aman dan terenkripsi.
          </li>
        </ul>
      </div>

      <div class="w-full p-8 md:p-12 flex flex-col justify-center bg-transparent border-t lg:border-t-0 lg:border-l border-white/50">

        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-12 w-auto"
            src="/images/logo_smarttelcoo.png"
            alt="SmartTelco"
          />
          <h2 class="mt-8 text-center text-2xl font-bold tracking-tight" style="color:#842A3B;">
            Daftar Akun Baru
          </h2>
        </div>

        <form @submit.prevent="handleRegister" class="mt-8 space-y-6">

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="block w-full rounded-md px-3 py-2 border border-gray-300 outline-none text-gray-800 placeholder-gray-500 shadow-sm focus:ring-[#842A3B] focus:border-[#842A3B]"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="block w-full rounded-md px-3 py-2 border border-gray-300 outline-none text-gray-800 placeholder-gray-500 shadow-sm focus:ring-[#842A3B] focus:border-[#842A3B]"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <p v-if="errorMsg" class="text-red-700 text-sm text-center">{{ errorMsg }}</p>

          <button
            type="submit"
            class="w-full rounded-md px-3 py-2 text-white font-semibold shadow-md hover:opacity-90 transition"
            style="background-color:#842A3B;"
          >
            Register
          </button>

          <p class="mt-6 text-sm text-center text-gray-600">
            Sudah punya akun?
            <router-link to="/login" class="font-semibold hover:underline" style="color:#842A3B;">
              Login di sini
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// (Script block tetap sama, tidak ada perubahan fungsional)
import { ref } from "vue"; 
import { apiPost } from "../utils/api";
import { saveUser } from "../utils/storage";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");

    const handleRegister = async () => {
      errorMsg.value = "";
      const payload = {
        email: email.value,
        password: password.value,
      };
      const res = await apiPost("/register", payload);

      if (res.message) {
        errorMsg.value = res.message;
        return;
      }

      saveUser({
        customer_id: res.customer_id,
        email: email.value, 
        role: "User", 
      });
      
      window.dispatchEvent(new CustomEvent('login-success')); // Tambahan event setelah register
      router.push("/home");
    };

    return { email, password, errorMsg, handleRegister };
  },
};
</script>