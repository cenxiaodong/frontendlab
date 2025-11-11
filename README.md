# Frontend Lab / 前端实验室

**一个用于收集、展示和分享有趣前端代码片段的创意工坊。** 这里是我在开发中遇到的炫酷样式、巧妙功能和动效创意的珍藏馆，旨在构建一个可随时查阅和复用的灵感库。

src/
├── assets/ # 静态资源（图片、全局样式）
├── components/ # 公共组件（布局组件、通用UI）
│ ├── layout/ # 布局相关组件（侧边栏、顶部栏等）
│ └── common/ # 通用组件（按钮、卡片等，可复用在demo中）
├── views/ # 页面视图
│ ├── Layout/ # 主布局页面（嵌套路由容器）
│ ├── Home/ # 首页（项目介绍、快速入口）
│ ├── demos/ # 所有demo分类页面
│ │ ├── style/ # 样式类demo（如动画、布局、主题）
│ │ │ ├── AnimationDemo.vue # 动画demo
│ │ │ ├── LayoutDemo.vue # 布局demo
│ │ │ └── ThemeDemo.vue # 主题demo
│ │ ├── feature/ # 功能类demo（如表单、图表、交互）
│ │ │ ├── FormDemo.vue # 表单demo
│ │ │ ├── ChartDemo.vue # 图表demo
│ │ │ └── DragDropDemo.vue # 拖拽demo
│ │ └── other/ # 其他分类（可自定义扩展）
│ └── NotFound.vue # 404页面
├── router/ # 路由配置
│ └── index.ts
├── store/ # 状态管理（可选，用于主题、折叠侧边栏等）
├── types/ # TS类型定义
├── utils/ # 工具函数
└── App.vue
