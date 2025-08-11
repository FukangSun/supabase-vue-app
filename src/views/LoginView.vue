import { supabase } from '../supabaseClient'

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white">
    <div class="w-full max-w-md p-8 shadow-md rounded-lg bg-gray-50">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">登录 / 注册</h2>
      <form @submit.prevent>
        <div class="mb-4">
          <label class="block mb-1 font-medium text-gray-700">手机号</label>
          <input
            v-model="phone"
            type="text"
            placeholder="输入手机号"
            class="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4 flex items-center">
          <input
            v-model="otp"
            type="text"
            placeholder="短信验证码"
            class="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            class="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
            type="button"
            @click="sendOtp"
          >
            获取验证码
          </button>
        </div>
        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          type="button"
          @click="verifyOtp"
        >
          手机号登录 / 注册
        </button>
      </form>
      <div class="my-6 text-center text-gray-400">或</div>
      <div class="flex justify-center">
        <button
          class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold flex items-center"
          type="button"
          @click="wechatLogin"
        >
          <svg class="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="white" />
            <path
              d="M22.005 11.014c-.067-4.464-4.632-8.017-10.025-7.968-5.395.049-9.98 3.668-9.912 8.132.01.697.196 1.433.359 2.146l.079.31-.354 1.303c-.07.246.069.344.254.184l1.785-1.16c.392.056.787.111 1.193.146A10.89 10.89 0 0 0 4 14.353c1.579 2.103 4.403 3.472 7.987 3.423 4.464-.049 8.116-2.572 8.05-5.645a4.861 4.861 0 0 0-1.023-3.117l-.164-.156.155-.185a5.983 5.983 0 0 0 1-1.659zm-15.648.056c0-.769.682-1.399 1.521-1.399s1.519.63 1.519 1.399c0 .778-.68 1.407-1.519 1.407s-1.521-.629-1.521-1.407zm5.827 2.52c-.99 0-1.801-.721-1.801-1.625 0-.908.811-1.618 1.801-1.618.994 0 1.792.71 1.792 1.618 0 .904-.798 1.625-1.792 1.625zm5.109-2.52c0-.769.684-1.399 1.527-1.399.839 0 1.52.63 1.52 1.399 0 .778-.681 1.407-1.52 1.407-.843 0-1.527-.629-1.527-1.407z"
              fill="#22c55e"
            />
          </svg>
          微信一键登录
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')
const otp = ref('')

const sendOtp = () => {
  // 这里后续会集成supabase发送验证码的功能
  alert('发送验证码功能待实现')
}

const verifyOtp = () => {
  // 这里后续会集成supabase验证短信登录的功能
  alert('登录/注册功能待实现')
}

const wechatLogin = () => {
  // 这里后续会集成微信 OAuth 登录
  alert('微信登录功能待实现')
}
</script>
