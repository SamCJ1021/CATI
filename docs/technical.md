# CATI 技术规范

## 技术栈
- **HTML5**：语义化标签
- **CSS3**：Grid + Flexbox 布局，CSS 变量管理色彩，Media Queries 响应式
- **JavaScript (ES6+)**：原生 JS，无第三方依赖
- **SVG**：低多边形猫插图

## 浏览器兼容性
| 浏览器 | 最低版本 |
|--------|----------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Android Chrome | 90+ |

## 项目架构

```
index.html          # 入口，包含三个 <section> 屏幕
  ├── css/style.css # 全局样式 + 响应式
  ├── js/data.js    # 纯数据文件（导出题目和猫数据）
  └── js/app.js     # 应用控制器
```

## 数据流

```
用户点击"开始测试"
  → 显示第 1 题
  → 用户选择答案 → 存储到 answers 数组
  → 显示下一题（或返回上一题修改）
  → 10 题全部答完
  → 计分算法：
      遍历 answers，每维度累加得分
      每个维度：> 中间值 → 取右端字母，否则取左端
      组合 3 字母 → 查找对应猫类型
  → 显示结果
```

## 计分算法详解

10 道题，每题测 1-2 个维度：
- 每题每个选项赋予维度分值（如选 A → E 维度 +1，选 B → I 维度 +1）
- 10 题结束后，每个维度独立求和
- 每个维度：得分 vs 该维度总题数/2 比较
  - 得分 > 中间值 → 右端（E/A/C）
  - 得分 ≤ 中间值 → 左端（I/L/H）
- 组合结果：如 `I` + `A` + `C` → `IAC` → 好奇猫

## CSS 变量

```css
:root {
  --bg: #FFF8F0;
  --primary: #F4A460;
  --primary-dark: #E8883A;
  --text: #4A3728;
  --text-secondary: #8B7355;
  --accent: #FFB347;
  --card-bg: #FFFFFF;
  --shadow: rgba(180, 120, 60, 0.12);
  --radius: 12px;
}
```

## 响应式断点

| 断点 | 宽度 | 布局调整 |
|------|------|----------|
| 手机 | 375px - 767px | 单列，全宽卡片，大按钮 |
| 平板 | 768px - 1023px | 单列，居中容器 600px |
| 桌面 | 1024px+ | 居中容器 720px，更大字号 |

## 性能指标
- 总文件大小 < 200KB（不含 SVG）
- 每个 SVG < 10KB（共 9 个 < 90KB）
- 零 HTTP 请求（图片均为内联或本地文件）
- 首次内容渲染 < 1s

## 文件命名规范
- 猫 SVG：`{i/e}{l/a}{h/c}.svg`（小写，3字母代码）
- CSS 类名：BEM 风格，如 `.quiz__option--selected`
- JS 函数：驼峰命名，如 `calculateResult()`
