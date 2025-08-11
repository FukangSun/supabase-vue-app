<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">欢迎使用 Supabase Vue App</h1>
    <p class="text-gray-600 mb-8">支持手机号与微信注册/登录的自托管应用</p>
    <div>
      <router-link to="/login">
        <button
          class="px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        >
          登录 / 注册
        </button>
      </router-link>
    </div>
  </div>
</template>
