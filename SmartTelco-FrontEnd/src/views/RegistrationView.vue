<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-900 to-purple-900 p-4">

    <div class="absolute inset-0 flex items-center justify-center">
      <img 
        src="/images/LOGO3D_SMARTTELCO-NoBG.png" 
        alt="Background Illustration atas" 
        class="w-[500px] md:w-[800px] opacity-90 pointer-events-none" 
      />
    </div>
    
    <!-- Glass Card -->
    <div 
      class="relative z-10 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 
            rounded-2xl shadow-2xl overflow-hidden 
            bg-white/20 backdrop-blur-xl border border-black/10">

      <!-- Left Section (teks promo – kini seragam seperti LoginView) -->
      <div class="hidden lg:flex flex-col justify-center p-10 space-y-6 text-black">

        <h2 class="text-3xl font-extrabold mb-4 border-b border-black/30 pb-3">
          Daftar untuk Akses Penuh
        </h2>

        <p class="text-sm leading-relaxed opacity-90">
          Bergabunglah dengan 
          <span class="font-semibold text-black">SmartTelco</span> 
          untuk mendapatkan rekomendasi paket yang dirancang khusus untuk Anda.
        </p>

        <ul class="text-sm space-y-3 pt-2">
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-circle-check text-green-600 text-lg"></i>
            Mendapatkan produk layanan terbaik
          </li>

          <li class="flex items-center gap-3">
            <i class="fa-solid fa-stopwatch text-indigo-600 text-lg"></i>
            Akses langsung ke fitur simulasi dan hasil
          </li>

          <li class="flex items-center gap-3">
            <i class="fa-solid fa-shield-halved text-red-600 text-lg"></i>
            Data Anda aman dan terenkripsi
          </li>
        </ul>

      </div>

      <!-- Right Section (Form Register) -->
      <div class="w-full p-8 md:p-12 flex flex-col justify-center 
                  bg-white/40 backdrop-blur-2xl border-l border-white/20">

        <div class="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <img class="mx-auto h-12 w-auto" src="/images/logo_smarttelcoo.png" alt="SmartTelco" />

          <h2 class="mt-6 text-2xl font-bold tracking-tight" style="color:#842A3B;">
            Daftar Akun Baru
          </h2>
        </div>

        <form class="mt-8 space-y-6" @submit.prevent="handleRegister">

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-800">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="block w-full rounded-md px-3 py-2 border border-gray-300 
                    outline-none text-gray-800 placeholder-gray-500 shadow-sm 
                    bg-white/80 backdrop-blur 
                    focus:ring-[#842A3B] focus:border-[#842A3B]"
              placeholder="example@mail.com"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-800">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="block w-full rounded-md px-3 py-2 border border-gray-300 
                    outline-none text-gray-800 placeholder-gray-500 shadow-sm 
                    bg-white/80 backdrop-blur
                    focus:ring-[#842A3B] focus:border-[#842A3B]"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <!-- Error -->
          <p v-if="errorMsg" class="text-red-700 text-sm text-center">{{ errorMsg }}</p>

          <!-- Button -->
          <button
            type="submit"
            class="w-full rounded-md px-3 py-2 text-white font-semibold shadow-md 
                  hover:opacity-90 transition"
            style="background-color:#842A3B;"
          >
            Register
          </button>

          <p class="mt-6 text-center text-sm text-gray-700">
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

      if (password.value.length < 6) {
        errorMsg.value = "Password minimal 6 karakter.";
        return;
      }

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