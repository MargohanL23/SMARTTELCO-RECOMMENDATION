<template>
  <div class="relative min-h-screen flex items-center justify-center p-4 bg-center">

    <!-- 🔥 Dark Overlay untuk meningkatkan kontras -->
    <div class="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

    <!-- 🔥 Background Image (diperkecil & tidak mengganggu teks) -->
    <div 
      class="absolute inset-0 bg-no-repeat bg-center"
      style="
        background-image: url('/images/LOGO3D_SMARTTELCO-NoBG.png');
        background-size: 850px;
      "
    ></div>

    <!-- Glass Card (harus di atas overlay → gunakan relative + z-index) -->
    <div 
      class="relative z-10 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 
             rounded-2xl shadow-2xl overflow-hidden 
             bg-white/20 backdrop-blur-xl border border-white/20">

      <!-- Left Section -->
      <div class="hidden lg:flex flex-col justify-center p-10 space-y-6 text-white">
        <h2 class="text-3xl font-extrabold mb-4 border-b border-white/30 pb-3">
          Sistem Rekomendasi Paket Jaringan Cerdas 🚀
        </h2>

        <p class="text-sm leading-relaxed opacity-90">
          Masuk ke SmartTelco untuk mengakses mesin prediksi yang didukung oleh 
          <span class="font-semibold text-white">Machine Learning (XGBoost)</span>.
        </p>

        <ul class="text-sm space-y-3 pt-2">
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-bullseye text-yellow-300 text-lg"></i>
            Tingkatkan konversi penjualan (Up-selling & Cross-selling)
          </li>

          <li class="flex items-center gap-3">
            <i class="fa-solid fa-chart-line text-yellow-300 text-lg"></i>
            Dapatkan rekomendasi alternatif (probabilitas tinggi)
          </li>

          <li class="flex items-center gap-3">
            <i class="fa-solid fa-shield-halved text-yellow-300 text-lg"></i>
            Minimalkan Churn Rate dengan penawaran retensi proaktif
          </li>
        </ul>
      </div>

      <!-- Right Section (Login Form) -->
      <div class="w-full p-8 md:p-12 flex flex-col justify-center 
                  bg-white/40 backdrop-blur-2xl border-l border-white/20">

        <div class="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <img class="mx-auto h-12 w-auto" src="/images/logo_smarttelcoo.png" alt="SmartTelco" />

          <h2 class="mt-6 text-2xl font-bold tracking-tight" style="color:#842A3B;">
            Masuk ke Sistem
          </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" @submit.prevent="handleLogin">

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-800">Email / Customer ID</label>
              <div class="relative">
                <i class="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                <input
                  v-model="identifier"
                  type="text"
                  required
                  class="block w-full rounded-md pl-10 pr-3 py-2 border border-gray-300 
                         text-gray-800 shadow-sm outline-none
                         bg-white/80 backdrop-blur 
                         focus:ring-[#842A3B] focus:border-[#842A3B]"
                />
              </div>
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-medium text-gray-800">Password</label>
              <div class="relative">
                <i class="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                <input
                  v-model="password"
                  type="password"
                  required
                  class="block w-full rounded-md pl-10 pr-3 py-2 border border-gray-300 
                         text-gray-800 shadow-sm outline-none
                         bg-white/80 backdrop-blur 
                         focus:ring-[#842A3B] focus:border-[#842A3B]"
                />
              </div>
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
              Masuk
            </button>
          </form>

          <p class="mt-6 text-center text-sm text-gray-700">
            Belum punya akun?
            <router-link to="/register" class="font-semibold hover:underline" style="color:#842A3B;">
              Register di sini
            </router-link>
          </p>
        </div>

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

    const identifier = ref("");
    const password = ref("");
    const errorMsg = ref("");

    const handleLogin = async () => {
      errorMsg.value = "";

      const data = {
        email: identifier.value,
        password: password.value,
      };

      const res = await apiPost("/login", data);

      if (res.error) {
        errorMsg.value = res.error;
        return;
      }

      saveUser(res);
      window.dispatchEvent(new CustomEvent('login-success'));

      if (res.role === "Admin") router.push("/Admin");
      else router.push("/home");
    };

    return { identifier, password, errorMsg, handleLogin };
  },
};
</script>