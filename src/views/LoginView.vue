<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <div class="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">欢迎回来</h2>
        <p class="text-gray-600">请选择您的登录方式</p>
      </div>

      <div class="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <!-- Error Message -->
        <div v-if="authStore.error" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <div class="flex">
            <svg class="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <p class="ml-3 text-sm text-red-800">{{ authStore.error }}</p>
          </div>
        </div>

        <!-- Phone Login Form -->
        <form @submit.prevent="handlePhoneLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">手机号</label>
            <input
              v-model="phone"
              type="tel"
              placeholder="请输入手机号"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              :disabled="authStore.loading"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">验证码</label>
            <div class="flex space-x-3">
              <input
                v-model="otp"
                type="text"
                placeholder="请输入验证码"
                class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                :disabled="authStore.loading"
              />
              <button
                type="button"
                @click="handleSendOtp"
                :disabled="!phone || authStore.loading || countdown > 0"
                class="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap"
              >
                {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            :disabled="!phone || !otp || authStore.loading"
            class="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span v-if="authStore.loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              登录中...
            </span>
            <span v-else>手机号登录</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">或</span>
          </div>
        </div>

        <!-- WeChat Login -->
        <button
          @click="handleWechatLogin"
          :disabled="authStore.loading"
          class="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.005 11.014c-.067-4.464-4.632-8.017-10.025-7.968-5.395.049-9.98 3.668-9.912 8.132.01.697.196 1.433.359 2.146l.079.31-.354 1.303c-.07.246.069.344.254.184l1.785-1.16c.392.056.787.111 1.193.146A10.89 10.89 0 0 0 4 14.353c1.579 2.103 4.403 3.472 7.987 3.423 4.464-.049 8.116-2.572 8.05-5.645a4.861 4.861 0 0 0-1.023-3.117l-.164-.156.155-.185a5.983 5.983 0 0 0 1-1.659z"/>
          </svg>
          <span>微信一键登录</span>
        </button>
      </div>

      <!-- Footer -->
      <div class="text-center text-sm text-gray-500">
        <p>登录即表示您同意我们的 
          <a href="#" class="text-blue-600 hover:text-blue-500">服务条款</a> 和 
          <a href="#" class="text-blue-600 hover:text-blue-500">隐私政策</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const phone = ref('')
const otp = ref('')
const countdown = ref(0)

let countdownTimer = null

const startCountdown = () => {
  countdown.value = 60
  countdownTimer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(countdownTimer)
    }
  }, 1000)
}

const handleSendOtp = async () => {
  if (!phone.value) return
  
  try {
    await authStore.sendPhoneOtp(phone.value)
    startCountdown()
  } catch (error) {
    console.error('发送验证码失败:', error)
  }
}

const handlePhoneLogin = async () => {
  if (!phone.value || !otp.value) return
  
  try {
    await authStore.verifyPhoneOtp(phone.value, otp.value)
    router.push('/dashboard')
  } catch (error) {
    console.error('登录失败:', error)
  }
}

const handleWechatLogin = async () => {
  try {
    await authStore.signInWithWechat()
  } catch (error) {
    console.error('微信登录失败:', error)
  }
}

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
})
</script>
