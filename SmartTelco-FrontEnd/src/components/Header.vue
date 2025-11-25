<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-blue-900/20 border-b border-gray-400/20 shadow-lg z-50 transition-all duration-500',
      isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    ]"
  >
    <nav class="max-w-8xl mx-auto flex items-center justify-between py-4 px-6">

      <RouterLink to="/home" class="flex items-center gap-2 hover:opacity-80 transition duration-300">
        <img 
          src="/images/logo_smarttelco.png"
          alt="SmartTelco Logo"
          class="h-12 w-auto object-contain" 
        />
      </RouterLink>

      <!-- DESKTOP NAV -->
      <div class="hidden md:flex items-center gap-2">

        <!-- TAMPIL SAAT LOGIN -->
        <template v-if="isLoggedIn">
          <RouterLink 
            to="/home" 
            class="px-6 py-2 rounded-full text-gray-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
          >
            Home
          </RouterLink>

          <RouterLink 
            to="/simulation"
            class="px-6 py-2 rounded-full text-blue-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
          >
            Simulation
          </RouterLink>
        </template>

        <!-- ABOUT SELALU ADA -->
        <RouterLink 
          to="/about" 
          class="px-6 py-2 rounded-full text-blue-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          About Us
        </RouterLink>

        <!-- TAMPIL SAAT TIDAK LOGIN -->
        <template v-if="!isLoggedIn">
          <RouterLink 
            to="/login" 
            class="px-6 py-2 rounded-full text-blue-50 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
          >
            Login
          </RouterLink>

          <RouterLink 
            to="/register" 
            class="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold hover:from-yellow-300 hover:to-orange-300 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Register
          </RouterLink>
        </template>

        <!-- TAMPIL SAAT LOGIN -->
        <template v-else>
          <button 
            @click="logoutUser" 
            class="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold hover:from-red-400 hover:to-red-500 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Logout
          </button>
        </template>
      </div>

      <!-- BURGER BUTTON -->
      <button 
        @click="toggleMenu"
        class="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none active:scale-95 transition"
      >
        <span
          :class="[
            'burger-line',
            mobileOpen ? 'top-line-open' : 'top-line-close'
          ]"
        ></span>

        <span
          :class="[
            'burger-line',
            mobileOpen ? 'mid-line-open' : 'mid-line-close'
          ]"
        ></span>

        <span
          :class="[
            'burger-line',
            mobileOpen ? 'bot-line-open' : 'bot-line-close'
          ]"
        ></span>
      </button>

    </nav>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileOpen"
      class="md:hidden backdrop-blur-xl bg-gray-900/40 border-t border-gray-400/20 animate-slideDown"
    >
      <div class="flex flex-col py-4 px-6 space-y-2">

        <!-- HOME & SIMULATION — hanya jika login -->
        <template v-if="isLoggedIn">
          <RouterLink 
            to="/home" 
            @click="closeMenu" 
            class="px-4 py-3 rounded-lg text-gray-100 font-semibold hover:bg-gray-500/30 hover:text-white transition duration-300 border border-transparent hover:border-gray-400/50"
          >
            Home
          </RouterLink>

          <RouterLink 
            to="/simulation"
            @click="closeMenu" 
            class="px-4 py-3 rounded-lg text-blue-100 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
          >
            Simulation
          </RouterLink>
        </template>

        <!-- ABOUT — selalu tampil -->
        <RouterLink 
          to="/about" 
          @click="closeMenu" 
          class="px-4 py-3 rounded-lg text-blue-100 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
        >
          About Us
        </RouterLink>

        <!-- LOGIN & REGISTER — jika tidak login -->
        <template v-if="!isLoggedIn">
          <RouterLink 
            to="/login" 
            @click="closeMenu" 
            class="px-4 py-3 rounded-lg text-blue-100 font-semibold hover:bg-blue-500/30 hover:text-white transition duration-300 border border-transparent hover:border-blue-400/50"
          >
            Login
          </RouterLink>
          
          <RouterLink 
            to="/register" 
            @click="closeMenu" 
            class="px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold hover:from-yellow-300 hover:to-orange-300 transition duration-300 text-center"
          >
            Register
          </RouterLink>
        </template>

        <!-- LOGOUT — jika login -->
        <template v-else>
          <button 
            @click="logoutUser" 
            class="px-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-bold hover:from-red-400 hover:to-red-500 transition duration-300 text-center"
          >
            Logout
          </button>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue"; 
import { getUser, clearUser } from "../utils/storage";

const router = useRouter();
const isLoggedIn = ref(false);
const mobileOpen = ref(false);

// AUTO HIDE STATE
const isHidden = ref(false);
let lastScroll = 0;
let velocity = 0;
let rafId = null;

// login state
const checkLoginStatus = () => {
  isLoggedIn.value = !!getUser();
};

onMounted(() => {
  checkLoginStatus();
  window.addEventListener('login-success', checkLoginStatus);

  // === AUTO HIDE NAVBAR SPRING PHYSICS ===
  const onScroll = () => {
    const current = window.scrollY;
    const delta = current - lastScroll;
    lastScroll = current;

    // soft physics feel
    velocity = 0.85 * velocity + 0.15 * delta;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      if (velocity > 3 && current > 80) {
        isHidden.value = true;   // scroll down → hide
      } else if (velocity < -3) {
        isHidden.value = false;  // scroll up → show
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value;
}
function closeMenu() {
  mobileOpen.value = false;
}
function logoutUser() {
  clearUser();
  checkLoginStatus(); 
  router.push("/login");
  closeMenu();
}
</script>

<style scoped>
/* === iOS Soft Spring Burger Menu === */
.burger-line {
  @apply absolute h-[3px] w-7 bg-blue-200 rounded-full;
  transition:
    transform 0.55s cubic-bezier(0.20, 1.4, 0.35, 1),
    opacity 0.3s ease,
    top 0.45s cubic-bezier(0.20, 1.4, 0.35, 1),
    background-color 0.3s ease;
}

.burger-line {
  background-color: rgba(180, 210, 255, 0.9);
}

.top-line-close { top: 8px; }
.mid-line-close { top: 17px; }
.bot-line-close { top: 26px; }

.top-line-open {
  top: 17px;
  transform: rotate(42deg) scale(1.08);
}
.mid-line-open {
  opacity: 0;
  transform: scale(0.3);
}
.bot-line-open {
  top: 17px;
  transform: rotate(-42deg) scale(1.08);
}

/* Mobile menu slide */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-12px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-slideDown {
  animation: slideDown 0.28s cubic-bezier(0.25, 1.4, 0.35, 1);
}
</style>
