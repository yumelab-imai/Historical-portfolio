/**
 * クッキーの値を取得する
 * @param {String} searchKey 検索するキー
 * @returns {String} キーに対応する値
 *
 *
 *クッキーの値を取得するまでの流れ（例）
 *
// document.cookie　＝　☆name=12345;token=67890;key=abcde☆

document.cookie.split(';').forEach(cookie => {

// document.cookie　＝　
//
//　{
//　name=12345,
//　token=67890,
//　key=abcde
//　}

    const [key, value] = cookie.split('=')

// document.cookie　＝　

{
name  =>  12345,
token  =>  67890,
key  =>  abcde
}

    if (key === searchKey) {
      return val = value
    }
  })

  return val
}
 *
 *
 */


export function getCookieValue (searchKey) {
  if (typeof searchKey === 'undefined') {
    return ''
  }

  let val = ''

  document.cookie.split(';').forEach(cookie => {
    const [key, value] = cookie.split('=')
    if (key === searchKey) {
      return val = value
    }
  })

  return val
}

export const OK = 200
export const CREATED = 201
export const INTERNAL_SERVER_ERROR = 500
export const UNPROCESSABLE_ENTITY = 422
//  419 は正式には定義されていないコード、Laravel が独自で使用
export const UNAUTHORIZED = 419
export const NOT_FOUND = 404
