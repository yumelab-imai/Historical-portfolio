//  Ajax 通信で用いる Axios ライブラリの設定を記述

import { getCookieValue } from './util'

// axiosは、HTTP通信を簡単に行うことができるJavascriptライブラリ
window.axios = require('axios');

// Ajaxリクエストであることを示すように変更（ヘッダーを付与することによって）
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


window.axios.interceptors.request.use(config => {
    // config.headersを編集
  // クッキーからトークンを取り出してヘッダーに付与
  config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')

  return config
})



// axios の responseインターセプターにまとめる
window.axios.interceptors.response.use(
  response => response,
  error => error.response || error
)

const instance = axios.create({
  baseURL: 'https://www.laravelvueport.link',
  timeout: 5000
})
