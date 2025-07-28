# SVG Table

一个基于 SVG、WebComponent 和 Web Worker 的高性能虚拟滚动表格组件，专为大规模数据可视化和流畅交互而设计。

## 特性

- 🚀 **高性能虚拟滚动** - 支持百万级数据流畅渲染
- 🎨 **SVG 渲染** - 基于 SVG 的精确图形渲染
- 🔧 **WebComponent** - 原生组件，无框架依赖
- ⚡ **Web Worker** - 多线程处理，不阻塞主线程
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🎯 **流畅动画** - 列宽行高动画，编辑控件叠加
- 🎪 **事件委托** - 高效的交互处理机制

## 快速开始

```bash
npm install svg-table
```

```javascript
import { SVGTable } from 'svg-table'

const table = new SVGTable({
  container: '#app',
  data: yourData,
  columns: yourColumns
})
```

## 文档导航

- [SVG表格设计](./svg-table-design.md)
- [1-节点池复用机制](./1-node-pool-reuse.md)
- [2-分层分组渲染](./2-layered-group-rendering.md)
- [3-WebWorker通信](./3-webworker-communication.md)
- [4-列宽行高动画](./4-column-width-row-height-animation.md)
- [5-编辑控件叠加](./5-editor-overlay-controls.md)
- [6-批量更新与动画帧](./6-batch-update-animation-frame.md)
- [7-事件委托与交互](./7-event-delegation-interaction.md)
- [8-文本裁剪与样式](./8-text-clipping-style.md)
- [9-框架集成适配](./9-framework-integration.md) 