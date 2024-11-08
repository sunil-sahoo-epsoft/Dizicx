import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ConfigProvider } from 'antd';

const root = document.getElementById('root');

createRoot(root!).render(
  <ConfigProvider
    theme={{
      // token: {
      //   colorBgLayout: "var(--primary-color)",
      // },
    }}
  >
    <App />
  </ConfigProvider>,
);
