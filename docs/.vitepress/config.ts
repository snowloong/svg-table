/*
 * @Author: finleyyao iamfinleyyao1997@163.com
 * @Date: 2025-07-28 16:47:59
 * @LastEditors: finleyyao iamfinleyyao1997@163.com
 * @LastEditTime: 2025-07-28 17:12:35
 * @FilePath: /svg-table/docs/.vitepress/config.ts
 * @Description: 
 * 
 */
// @ts-nocheck
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SVG Table',
  description: 'A high-performance virtual scrolling table component based on SVG, WebComponent, and Web Worker',
  lang: 'zh-CN',
  port: 5173,
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    }
  },
  themeConfig: {
    siteTitle: 'SVG Table',
    nav: [
      { text: '首页', link: '/zh/' },
      { text: 'Home', link: '/en/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/snowloong/svg-table' }
    ],
    sidebar: {
      '/zh/': [
        {
          text: '指南',
          items: [
            { text: '首页', link: '/zh/' },
            { text: 'SVG表格设计', link: '/zh/svg-table-design' },
            { text: '1-节点池复用机制', link: '/zh/1-节点池复用机制' },
            { text: '2-分层分组渲染', link: '/zh/2-分层分组渲染' },
            { text: '3-WebWorker通信', link: '/zh/3-WebWorker通信' },
            { text: '4-列宽行高动画', link: '/zh/4-列宽行高动画' },
            { text: '5-编辑控件叠加', link: '/zh/5-编辑控件叠加' },
            { text: '6-批量更新与动画帧', link: '/zh/6-批量更新与动画帧' },
            { text: '7-事件委托与交互', link: '/zh/7-事件委托与交互' },
            { text: '8-文本裁剪与样式', link: '/zh/8-文本裁剪与样式' },
            { text: '9-框架集成适配', link: '/zh/9-框架集成适配' },
          ]
        }
      ],
      '/en/': [
        {
          text: 'Guide',
          items: [
            { text: 'Home', link: '/en/' },
            { text: 'SVG Table Design', link: '/en/svg-table-design' },
            { text: '1-Node Pool Reuse', link: '/en/1-node-pool-reuse' },
            { text: '2-Layered Group Rendering', link: '/en/2-layered-group-rendering' },
            { text: '3-WebWorker Communication', link: '/en/3-webworker-communication' },
            { text: '4-Column Width & Row Height Animation', link: '/en/4-column-width-row-height-animation' },
            { text: '5-Editor Overlay Controls', link: '/en/5-editor-overlay-controls' },
            { text: '6-Batch Update & Animation Frame', link: '/en/6-batch-update-animation-frame' },
            { text: '7-Event Delegation & Interaction', link: '/en/7-event-delegation-interaction' },
            { text: '8-Text Clipping & Style', link: '/en/8-text-clipping-style' },
            { text: '9-Framework Integration Adaptation', link: '/en/9-framework-integration' }
          ]
        }
      ]
    }
  }
}) 