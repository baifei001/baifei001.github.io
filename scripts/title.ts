import { pageTitleConfig } from '../config/customize.config' // 若配置了路径别名@，更简洁


const originalTitle = document.title
const leaveTitle = pageTitleConfig.leaveTitle

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = leaveTitle
  } else {
    document.title = originalTitle
  }
})
