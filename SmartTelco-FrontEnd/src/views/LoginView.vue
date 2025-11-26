<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-900 to-purple-900 p-4">
    <div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-xl shadow-2xl overflow-hidden bg-gray-300/60 backdrop-blur-md border border-white/20">

      <div class="hidden lg:flex flex-col justify-center p-10 space-y-6 text-red text-left" 
           style="background-color:white;"> <h2 class="text-3xl font-extrabold mb-4 border-b border-blue-400 pb-3">
          Sistem Rekomendasi Paket Jaringan Cerdas 🚀
        </h2>
        <p class="text-sm leading-relaxed opacity-90">
          Masuk ke SmartTelco untuk mengakses mesin prediksi yang didukung oleh <span class="font-semibold text-blue-900">Machine Learning (XGBoost)</span>. Kami mengubah pola perilaku pelanggan (seperti penggunaan data, panggilan, dan pengeluaran) menjadi penawaran paket yang sangat relevan dan tepat sasaran.
        </p>
        <ul class="text-sm space-y-2 pt-2">
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2 text-xl">🎯</span> Tingkatkan konversi penjualan (Up-selling & Cross-selling).
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2 text-xl">📈</span> Dapatkan rekomendasi alternatif (probabilitas tinggi).
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2 text-xl">🛡️</span> Minimalkan Churn Rate dengan penawaran retensi proaktif.
          </li>
        </ul>
      </div>

      <div class="w-full p-8 md:p-12 flex flex-col justify-center bg-white">

        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-12 w-auto"
            src="/images/logo_smarttelcoo.png"
            alt="SmartTelco"
          />
          <h2 class="mt-8 text-center text-2xl font-bold tracking-tight" style="color:#842A3B;">
            Masuk ke Sistem
          </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" @submit.prevent="handleLogin">

            <div>
              <label class="block text-sm font-medium text-gray-700">Email / Customer ID</label>
              <input
                v-model="identifier"
                type="text"
                required
                class="block w-full rounded-md px-3 py-2 border border-gray-300 outline-none text-gray-800 placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Password</label>
              <input
                v-model="password"
                type="password"
                required
                class="block w-full rounded-md px-3 py-2 border border-gray-300 outline-none text-gray-800 placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <p v-if="errorMsg" class="text-red-700 text-sm text-center">{{ errorMsg }}</p>

            <button
              type="submit"
              class="w-full rounded-md px-3 py-2 text-white font-semibold shadow-md hover:opacity-90 transition"
              style="background-color:#842A3B;"
            >
              Masuk
            </button>
          </form>

          <p class="mt-6 text-center text-sm text-gray-600">
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