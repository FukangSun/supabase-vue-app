import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabaseClient'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)
  const isPhoneBound = computed(() => user.value?.phone)
  const isWeChatBound = computed(() => user.value?.app_metadata?.provider === 'wechat')

  const setUser = (newUser) => {
    user.value = newUser
  }

  const setSession = (newSession) => {
    session.value = newSession
    user.value = newSession?.user || null
  }

  const setLoading = (isLoading) => {
    loading.value = isLoading
  }

  const setError = (newError) => {
    error.value = newError
  }

  const clearError = () => {
    error.value = null
  }

  const signOut = async () => {
    try {
      setLoading(true)
      clearError()
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      user.value = null
      session.value = null
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const sendPhoneOtp = async (phone) => {
    try {
      setLoading(true)
      clearError()
      const { error } = await supabase.auth.signInWithOtp({ phone })
      if (error) throw error
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const verifyPhoneOtp = async (phone, token) => {
    try {
      setLoading(true)
      clearError()
      const { data, error } = await supabase.auth.verifyOtp({
        phone,
        token,
        type: 'sms'
      })
      if (error) throw error
      setSession(data.session)
      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signInWithWechat = async () => {
    try {
      setLoading(true)
      clearError()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'wechat'
      })
      if (error) throw error
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const initialize = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    setSession(session)

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
    })
  }

  return {
    user,
    session,
    loading,
    error,
    isAuthenticated,
    isPhoneBound,
    isWeChatBound,
    setUser,
    setSession,
    setLoading,
    setError,
    clearError,
    signOut,
    sendPhoneOtp,
    verifyPhoneOtp,
    signInWithWechat,
    initialize
  }
})
