<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-8">
            <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              智能认证
            </span>
            <br>
            <span class="text-gray-800 text-4xl md:text-5xl">安全便捷的登录体验</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            支持手机号验证码登录与微信一键登录，为您提供安全、便捷的身份认证服务
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <router-link 
              to="/login" 
              class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span class="flex items-center space-x-2">
                <span>立即开始</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </router-link>
            
            <button class="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all transform hover:scale-105">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-white/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">为什么选择我们？</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            我们提供最安全、最便捷的身份认证解决方案
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">手机号登录</h3>
            <p class="text-gray-600 leading-relaxed">
              支持中国大陆手机号验证码登录，安全快捷，无需记忆复杂密码
            </p>
          </div>
          
          <div class="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.005 11.014c-.067-4.464-4.632-8.017-10.025-7.968-5.395.049-9.98 3.668-9.912 8.132.01.697.196 1.433.359 2.146l.079.31-.354 1.303c-.07.246.069.344.254.184l1.785-1.16c.392.056.787.111 1.193.146A10.89 10.89 0 0 0 4 14.353c1.579 2.103 4.403 3.472 7.987 3.423 4.464-.049 8.116-2.572 8.05-5.645a4.861 4.861 0 0 0-1.023-3.117l-.164-.156.155-.185a5.983 5.983 0 0 0 1-1.659z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">微信一键登录</h3>
            <p class="text-gray-600 leading-relaxed">
              集成微信OAuth登录，扫码即可完成身份认证，体验更加便捷
            </p>
          </div>
          
          <div class="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">安全可靠</h3>
            <p class="text-gray-600 leading-relaxed">
              基于Supabase构建，提供企业级安全保障，保护您的个人信息安全
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          准备好开始了吗？
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          立即注册，体验安全便捷的身份认证服务
        </p>
        <router-link 
          to="/login" 
          class="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-2xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
        >
          <span>免费注册</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
})
</script>
