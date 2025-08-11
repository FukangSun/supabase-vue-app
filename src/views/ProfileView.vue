<template>
  <div class="min-h-screen py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">个人资料</h1>
        <p class="text-gray-600">管理您的个人信息和偏好设置</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Profile Picture -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">头像</h2>
            <div class="text-center">
              <div class="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                <span class="text-4xl font-bold text-white">
                  {{ authStore.user?.user_metadata?.nickname?.[0] || '用' }}
                </span>
              </div>
              <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                更换头像
              </button>
              <p class="text-sm text-gray-500 mt-2">支持 JPG、PNG 格式，最大 2MB</p>
            </div>
          </div>
        </div>

        <!-- Profile Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 class="text-lg font-semibold text-gray-900 mb-6">基本信息</h2>
            
            <form @submit.prevent="updateProfile" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">昵称</label>
                <input
                  v-model="profile.nickname"
                  type="text"
                  placeholder="请输入昵称"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">手机号</label>
                <div class="flex items-center space-x-3">
                  <input
                    :value="authStore.user?.phone || '未绑定'"
                    type="text"
                    disabled
                    class="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                  />
                  <button
                    type="button"
                    class="px-4 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    更换
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">微信绑定</label>
                <div class="flex items-center space-x-3">
                  <input
                    :value="authStore.isWeChatBound ? '已绑定' : '未绑定'"
                    type="text"
                    disabled
                    class="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                  />
                  <button
                    type="button"
                    :class="[
                      'px-4 py-3 rounded-lg transition-colors',
                      authStore.isWeChatBound 
                        ? 'text-red-600 border border-red-600 hover:bg-red-50' 
                        : 'text-green-600 border border-green-600 hover:bg-green-50'
                    ]"
                  >
                    {{ authStore.isWeChatBound ? '解绑' : '绑定' }}
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">备用邮箱</label>
                <input
                  v-model="profile.recoveryEmail"
                  type="email"
                  placeholder="请输入备用邮箱"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <p class="text-sm text-gray-500 mt-1">用于账户恢复和重要通知</p>
              </div>

              <div class="flex justify-end space-x-4">
                <button
                  type="button"
                  class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  :disabled="loading"
                  class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <span v-if="loading">保存中...</span>
                  <span v-else>保存更改</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Account Actions -->
      <div class="mt-8">
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">账户操作</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
              <div>
                <h3 class="font-medium text-red-900">删除账户</h3>
                <p class="text-sm text-red-700">永久删除您的账户和所有相关数据</p>
              </div>
              <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                删除账户
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const loading = ref(false)

const profile = reactive({
  nickname: '',
  recoveryEmail: ''
})

const updateProfile = async () => {
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Profile updated:', profile)
  } catch (error) {
    console.error('Failed to update profile:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (authStore.user) {
    profile.nickname = authStore.user.user_metadata?.nickname || ''
    profile.recoveryEmail = authStore.user.user_metadata?.recovery_email || ''
  }
})
</script>
