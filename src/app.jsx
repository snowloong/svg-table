import { h, signal, Component, define } from 'omi'
import viteLogo from '/vite.svg'
import css from './app.css?raw'
import { SvgTable } from './components/svg-table/index.js'

const count = signal(0)

define(
  'my-app',
  class extends Component {
    static css = css

    render() {
      return (
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} class="logo" alt="Vite logo" />
            </a>
            <a href="http://omijs.org" target="_blank">
              <img
                src="https://omi.cdn-go.cn/s/latest/omi.svg"
                class="logo omi"
                alt="Omi logo"
              />
            </a>
          </div>
          <h1>SVG Table Demo</h1>
          <div class="card">
            <button onClick={() => (count.value += 1)}>
              count is {count.value}
            </button>
            <p>
              Edit <code>src/app.jsx</code> and save to test HMR
            </p>
          </div>
          {/* TODO: 添加SVG表格组件 */}
          <div class="svg-table-container">
            {/* <SvgTable /> */}
          </div>
          <p class="read-the-docs">
            Click on the Vite and Omi logos to learn more
          </p>
        </>
      )
    }
  }
)
