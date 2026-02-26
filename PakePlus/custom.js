window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});const hookClick = (e) => {
    // 1. 找到点击事件触发的最接近的<a>标签元素
    const origin = e.target.closest('a')
    // 2. 检查<head>中是否存在<base target="_blank">标签（全局默认新窗口打开）
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    
    // 3. 判断是否是需要拦截的新窗口跳转场景
    if (
        // 场景1：<a>标签存在、有href属性、且target明确设为_blank
        (origin && origin.href && origin.target === '_blank') ||
        // 场景2：<a>标签存在、有href属性、且全局base标签设为_blank
        (origin && origin.href && isBaseTargetBlank)
    ) {
        // 阻止浏览器默认行为（取消新窗口打开）
        e.preventDefault()
        console.log('handle origin', origin)
        // 强制在当前窗口跳转到目标链接
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}