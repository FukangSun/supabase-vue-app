<template>
  <div class="min-h-screen py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">账户安全</h1>
        <p class="text-gray-600">管理您的密码、登录方式和安全设置</p>
      </div>

      <div class="space-y-8">
        <!-- Password Section -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">登录密码</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 class="font-medium text-gray-900">设置登录密码</h3>
                <p class="text-sm text-gray-600">为您的账户设置密码，提供额外的登录方式</p>
              </div>
              <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                设置密码
              </button>
            </div>
          </div>
        </div>

        <!-- Phone Binding Section -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">手机号绑定</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 class="font-medium text-gray-900">当前绑定手机号</h3>
                <p class="text-sm text-gray-600">
                  {{ authStore.user?.phone || '未绑定手机号' }}
                </p>
              </div>
              <div class="space-x-2">
                <button 
                  v-if="authStore.user?.phone"
                  class="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  更换手机号
                </button>
                <button 
                  v-else
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  绑定手机号
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- WeChat Binding Section -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">微信绑定</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 class="font-medium text-gray-900">微信账户绑定</h3>
                <p class="text-sm text-gray-600">
                  {{ authStore.isWeChatBound ? '已绑定微信账户' : '未绑定微信账户' }}
                </p>
              </div>
              <button 
                :class="[
                  'px-4 py-2 rounded-lg transition-colors',
                  authStore.isWeChatBound 
                    ? 'text-red-600 border border-red-600 hover:bg-red-50' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                ]"
              >
                {{ authStore.isWeChatBound ? '解绑微信' : '绑定微信' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Recovery Email Section -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">备用恢复邮箱</h2>
          <div class="space-y-4">
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h3 class="font-medium text-gray-900">恢复邮箱</h3>
                  <p class="text-sm text-gray-600">用于账户恢复和重要安全通知</p>
                </div>
              </div>
              
              <form @submit.prevent="updateRecoveryEmail" class="space-y-4">
                <div class="flex space-x-3">
                  <input
                    v-model="recoveryEmail"
                    type="email"
                    placeholder="请输入备用邮箱"
                    class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    :disabled="!recoveryEmail || loading"
                    class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {{ loading ? '保存中...' : '保存' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Security Log Section -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">安全日志</h2>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p class="font-medium text-gray-900">成功登录</p>
                  <p class="text-sm text-gray-600">{{ formatDate(authStore.user?.last_sign_in_at) }}</p>
                </div>
              </div>
              <span class="text-sm text-gray-500">手机号登录</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p class="font-medium text-gray-900">账户创建</p>
                  <p class="text-sm text-gray-600">{{ formatDate(authStore.user?.created_at) }}</p>
                </div>
              </div>
              <span class="text-sm text-gray-500">注册</span>
            </div>
          </div>
        </div>

        <!-- Danger Zone -->
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-red-200">
          <h2 class="text-lg font-semibold text-red-900 mb-4">危险操作</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
              <div>
                <h3 class="font-medium text-red-900">注销账户</h3>
                <p class="text-sm text-red-700">永久删除您的账户和所有相关数据，此操作不可恢复</p>
              </div>
              <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                注销账户
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const loading = ref(false)
const recoveryEmail = ref('')

const updateRecoveryEmail = async () => {
  if (!recoveryEmail.value) return
  
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Recovery email updated:', recoveryEmail.value)
    recoveryEmail.value = ''
  } catch (error) {
    console.error('Failed to update recovery email:', error)
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString) => {
  if (!dateString) return '未知'
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
