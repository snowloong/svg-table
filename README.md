<!--
 * @Author: finleyyao iamfinleyyao1997@163.com
 * @Date: 2025-07-25 21:37:04
 * @LastEditors: finleyyao iamfinleyyao1997@163.com
 * @LastEditTime: 2025-07-25 21:37:37
 * @FilePath: /svg-table/README.md
 * @Description: 
 * 
-->
# SVG Table

A high-performance virtual scrolling table component based on SVG, WebComponent, and Web Worker.

## 优势 | Advantages

- 支持万级及更大数据量，主线程不卡顿，渲染流畅  
  Supports tens of thousands or more rows, smooth rendering without blocking the main thread
- 行列双虚拟滚动，极大减少渲染节点数量  
  Bi-directional virtual scrolling, greatly reduces the number of rendered nodes
- SVG 渲染，支持高度自定义和动画，可视化能力强  
  SVG rendering, highly customizable, strong visualization and animation capability
- Web Worker 处理数据，主线程专注渲染与交互  
  Data processing in Web Worker, main thread focuses on rendering and interaction
- 编辑控件叠加，体验媲美原生表格  
  Overlay editing controls, user experience comparable to native tables
- 易于集成到 React/Vue 等主流框架  
  Easy integration with mainstream frameworks like React/Vue

## 技术架构 | Technical Architecture

- **组件封装**：Omi（轻量、原生 WebComponent 支持）  
  **Component**: Omi (lightweight, native WebComponent support)
- **渲染层**：原生 SVG API（灵活、性能好，适合动画和可视化）  
  **Rendering**: Native SVG API (flexible, high performance, suitable for animation and visualization)
- **虚拟滚动**：自研行列双虚拟化，节点池复用  
  **Virtual Scrolling**: Custom bi-directional virtualization, node pool reuse
- **数据处理**：Web Worker + comlink（多线程，主线程不卡顿）  
  **Data Processing**: Web Worker + comlink (multi-threaded, main thread remains smooth)
- **编辑控件**：原生 DOM + 绝对定位（叠加在 SVG 上方）  
  **Editing Controls**: Native DOM + absolute positioning (overlaid on SVG)
- **动画**：手动实现 FLIP 动画，细粒度控制  
  **Animation**: Manually implemented FLIP animation, fine-grained control

## 文档 | Documentation

- [中文文档 Chinese Docs](./docs/zh/README.md)
- [English Docs](./docs/en/README.md)

## 快速开始 | Quick Start

```bash
npm install
npm run docs:serve
```

访问 http://localhost:3000 预览文档。  
Visit http://localhost:3000 to preview the documentation.

## License

MIT 