import { createClient } from '@supabase/supabase-js'

// 用你的Supabase自托管地址和anon公钥替换下面的占位内容
const supabaseUrl = 'http://192.168.199.15:16380/' // 示例，需替换为实际URL
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE' // 替换为你的anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
