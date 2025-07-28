# SVG Table 组件目录结构

## 目录结构

```
src/
├── components/           # 组件目录
│   └── svg-table/       # SVG表格组件
│       ├── index.js      # 组件入口
│       ├── SvgTable.js   # 主表格组件
│       ├── SvgTableColumn.js  # 列组件
│       └── SvgTableRow.js     # 行组件
├── core/                # 核心功能模块
│   ├── virtual-scroll/  # 虚拟滚动
│   │   ├── index.js
│   │   ├── VirtualScrollManager.js
│   │   ├── ScrollPosition.js
│   │   └── ViewportCalculator.js
│   ├── node-pool/       # 节点池管理
│   │   ├── index.js
│   │   ├── NodePool.js
│   │   ├── NodeRecycler.js
│   │   └── NodeAllocator.js
│   └── webworker/       # WebWorker通信
│       ├── index.js
│       ├── WorkerManager.js
│       ├── MessageHandler.js
│       └── DataProcessor.js
├── utils/               # 工具函数
│   ├── index.js
│   ├── EventDelegation.js
│   ├── AnimationFrame.js
│   ├── TextClipper.js
│   └── StyleManager.js
├── types/               # 类型定义
│   ├── index.js
│   ├── TableTypes.js
│   ├── EventTypes.js
│   └── ConfigTypes.js
├── app.jsx              # 主应用
├── main.jsx             # 应用入口
├── app.css              # 应用样式
├── index.css            # 全局样式
└── README.md            # 本文件
```

## 模块说明

### components/svg-table/
- **SvgTable.js**: 主表格组件，负责整体表格的渲染和状态管理
- **SvgTableColumn.js**: 列组件，负责列的渲染和交互
- **SvgTableRow.js**: 行组件，负责行的渲染和交互

### core/virtual-scroll/
- **VirtualScrollManager.js**: 虚拟滚动管理器
- **ScrollPosition.js**: 滚动位置管理
- **ViewportCalculator.js**: 视口计算器

### core/node-pool/
- **NodePool.js**: 节点池管理
- **NodeRecycler.js**: 节点回收器
- **NodeAllocator.js**: 节点分配器

### core/webworker/
- **WorkerManager.js**: WebWorker管理器
- **MessageHandler.js**: 消息处理器
- **DataProcessor.js**: 数据处理器

### utils/
- **EventDelegation.js**: 事件委托工具
- **AnimationFrame.js**: 动画帧工具
- **TextClipper.js**: 文本裁剪工具
- **StyleManager.js**: 样式管理器

### types/
- **TableTypes.js**: 表格相关类型定义
- **EventTypes.js**: 事件类型定义
- **ConfigTypes.js**: 配置类型定义

## 设计原则

1. **模块化**: 每个功能模块独立，职责单一
2. **可复用**: 核心功能可在不同场景下复用
3. **高性能**: 通过虚拟滚动、节点池等技术优化性能
4. **可扩展**: 支持插件化扩展和自定义配置 