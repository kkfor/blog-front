/**
 * 时间格式化工具
 */

//  返回时间字符串
export const date = (times, format = 'yyyy.MM.dd HH:mm:ss') => {
  const time = Date.parse(times)
  if (!time) return null

  const date = new Date(time)

  const ele = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  // 匹配年替换
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  // 匹配 天|小时|分钟|秒 替换
  for (let i in ele) {
    if (new RegExp(`(${i})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? ele[i]
          : ('00' + ele[i]).substr((ele[i] + '').length)
      )
    }
  }

  return format
}

// 返回多少天前
export const timeAgo = times => {
  const time = Date.parse(times)
  if (!time) return null

  const between = Date.now() / 1000 - time / 1000
  if (between < 3600) {
    return Object.is(~~(between / 60), 0) ? '刚刚' : ~~(between / 60) + '分钟前'
  } else if (between < 86400) {
    return ~~(between / 3600) + '小时前'
  } else {
    return ~~(between / 86400) + '天前'
  }
}
