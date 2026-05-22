# CATI - Claude 工作指引

## 项目简介
CATI 是一个网页版猫咪性格测试，灵感来自 MBTI。纯静态 HTML/CSS/JS，部署于 GitHub Pages。

## 关键文件路径

### 项目规范文档
- [需求文档](docs/requirements.md) — 功能需求与用户故事
- [设计规范](docs/design.md) — 色彩、字体、布局、低多边形风格指南
- [技术规范](docs/technical.md) — 架构、兼容性、性能标准
- [开发路线图](docs/roadmap.md) — 分阶段执行步骤

### 开发日志
- [devlog/](devlog/) — 每日开发日志，记录完成事项与待办

### 源代码
- [index.html](index.html) — 唯一页面入口
- [css/style.css](css/style.css) — 全部样式
- [js/data.js](js/data.js) — 题目与猫类型数据
- [js/app.js](js/app.js) — 应用逻辑
- [assets/cats/](assets/cats/) — 低多边形猫 SVG 插图

## 工作约定
- 每次修改前先读相关规范文档，确保符合既定标准
- 修改代码后更新对应的开发日志
- SVG 插图风格保持低多边形（low-poly）、暖色系、统一视觉语言
- 所有新增功能需在手机宽度（375px）和桌面宽度（1200px+）两端验证
- 部署前必须在本地浏览器完整走通测试流程

## 项目特点
- 零依赖：无 npm 包、无框架、无构建工具
- 纯静态：浏览器直接打开 index.html 即可运行
- 响应式：适配手机/平板/桌面设备
