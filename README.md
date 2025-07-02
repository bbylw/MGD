# 国际医学指南与资源导航 (International Medical Guidelines Navigator)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-brightgreen.svg)

一个便捷的医学指南与资源导航网站，为医疗专业人员提供快速访问国际权威临床指南和医学资源的平台。

## 🌟 特性

- 📱 **全面响应式设计**：支持所有设备，提供最佳浏览体验。
- 🎨 **专业级UI界面**：简洁、现代、美观，符合医学领域的严谨性。
- ⚡ **快速加载**：纯前端实现，无外部依赖，秒级响应。
- 🔍 **智能搜索功能**：快速筛选和查找所需指南或资源。
- 📚 **海量权威资源**：涵盖全球顶级临床指南、医学期刊、数据库及教育平台。
- 💡 **直观图标系统**：每个分类配备专业图标，提升视觉识别度。

## 🚀 快速部署

### GitHub Pages 部署

1. Fork 本仓库
2. 进入仓库设置 Settings > Pages
3. Source 选择 `main` 分支
4. 保存后等待自动部署

### Cloudflare Pages 部署

1. Fork 本仓库
2. 登录 Cloudflare Dashboard
3. 进入 Pages > Create a project
4. 连接你的 GitHub 账户
5. 选择本仓库
6. 部署设置：
   - Framework preset: None
   - Build command: 留空
   - Build output directory: /
7. 点击 Save and Deploy

### EdgeOne Pages 部署

1. Fork 本仓库
2. 登录 EdgeOne 控制台
3. 创建新项目，选择从 GitHub 导入
4. 选择本仓库，并配置部署设置（通常默认即可）
5. 部署后，可绑定自定义域名。

## 🗂️ 项目结构

```
.
├── index.html          # 主页面
├── assets/            
│   ├── css/           # 样式文件 (style.css)
│   └── js/            # JavaScript 文件 (main.js)
└── README.md          # 项目说明
```

## 🎯 主要功能

### 临床指南
- **心血管疾病**：ESC, AHA/ACC, NICE, JCS 等
- **内分泌与代谢**：Endocrine Society, ADA, ATA, AACE 等
- **呼吸系统**：ERS, ATS, GOLD, GINA 等
- **神经系统**：AAN, EAN, Stroke Foundation, ILAE 等
- **消化系统**：AGA, ASGE, UEG, AASLD 等
- **肿瘤学**：NCCN, ESMO, ASCO, ASTRO 等
- **感染病学**：IDSA, WHO, ESCMID, CDC 等
- **风湿免疫学**：ACR, EULAR, APLAR, NICE 等
- **肾脏病学**：KDIGO, The Renal Association, NKF, ERA 等
- **儿科学**：AAP, CPS, RCPCH, WHO Child Health 等

### 医学资源
- **文献数据库**：PubMed, Cochrane Library, Embase, Web of Science 等
- **顶级医学期刊**：NEJM, The Lancet, JAMA, The BMJ, Annals of Internal Medicine, Nature Medicine 等
- **临床决策支持**：UpToDate, DynaMed, BMJ Best Practice, MSD Manual 等
- **药物信息**：Drugs.com, PDR, EMA, FDA Drug Databases 等
- **医学教育与资讯**：Medscape, Mayo Clinic, MedlinePlus, WebMD 等
- **临床试验**：ClinicalTrials.gov, EU Clinical Trials Register, ISRCTN Registry, ChiCTR 等
- **医学计算器**：MDCalc, Medscape Calculators, GlobalRPH Medical Calculators, Calculate by QxMD 等

## 🛠️ 技术栈

- HTML5
- CSS3 
  - Flexbox & Grid Layout
  - CSS Variables
  - Media Queries (响应式设计)
  - 精致的阴影与过渡效果
- Vanilla JavaScript
  - ES6+ Features
  - DOM Manipulation
  - 搜索过滤功能

## 📝 License

本项目采用 [MIT License](LICENSE) 许可证。

## 🤝 贡献指南

我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告问题
- 💡 新功能建议
- 📝 完善文档
- 🔍 代码审查
- 🚀 提交 PR

## 📮 联系方式

- 提交 Issue: [GitHub Issues](https://github.com/yourusername/medical-guidelines-navigator/issues)

## 📋 更新日志

### Version 2.0.0 (2025-07-03)
- 🎉 **重大更新**：项目结构优化，CSS和JS文件分离。
- 🔍 **新增搜索功能**：支持指南和资源快速检索。
- 📚 **内容大幅扩充**：新增肾脏病学、儿科学指南，并丰富了医学资源分类。
- 🎨 **UI全面升级**：引入专业配色、字体、图标和交互动效，打造专业级医学网站外观。
- 🚀 **新增部署方式**：支持 EdgeOne Pages 部署。

### Version 1.0.0 (2024-03-xx)
- 🎉 初始版本发布
- 📱 完成响应式布局
- 🔍 实现基础导航功能
- 📚 添加核心医学资源

---

⭐️ 如果这个项目对你有帮助，欢迎 star 支持！
