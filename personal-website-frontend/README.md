## 个人网站：曹一帆 EvanCao

基于 **React + TypeScript + Vite** 实现的个人网站，面向招聘方与潜在合作方，突出大前端工程师背景、代表性项目以及多端 / 鸿蒙生态相关能力。整体视觉为日系简洁、高质感风格，采用单页应用（SPA）结构。

### 技术栈

- React 19 + TypeScript
- Vite 构建工具
- 纯 CSS 日系主题与组件样式（无 UI 库依赖）

### 主要板块

- Home：姓名、当前职位（美团 · 大前端工程师）、一句话介绍、基本背景信息
- Experience：教育 / 工作经历时间线，重点强化美团阶段
- Projects：代表性技术项目卡片，标注技术栈与个人职责，多端 / HarmonyOS 项目标记
- Skills：按「语言 / 框架」「工程化」「多端」分组的技能矩阵，突出工程化与鸿蒙相关能力
- Contact：邮箱、GitHub、博客等技术外链，以及低干扰的「联系我」说明

### 本地开发

```bash
cd personal-website-frontend
npm install
npm run dev
```

### 构建与部署

```bash
npm run build
```

构建完成后会生成 `dist` 目录，适合部署到任意静态托管平台，例如：

- GitHub Pages
- Vercel / Netlify
- 自建静态文件服务器

### 目录结构（简要）

- `src/App.tsx`：页面整体布局与各分区入口
- `src/profileData.ts`：个人简介与技能矩阵数据
- `src/experienceData.ts`：时间线履历数据
- `src/projectsData.ts`：项目展示数据
- `src/ExperienceTimeline.tsx`：时间线组件
- `src/ProjectsGrid.tsx`：项目卡片网格组件
- `src/App.css` / `src/index.css`：全局与组件级样式
