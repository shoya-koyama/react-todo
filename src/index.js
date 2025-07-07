// Reactライブラリをインポートしています。
import React from 'react';
// ReactDOMライブラリをインポートしています。
import ReactDOM from 'react-dom/client';
// CSSファイルをインポートしています。
import './index.css';
// Appコンポーネントをインポートしています。
import App from './App';

// Reactアプリケーションのルートを取得しています。
const root = ReactDOM.createRoot(document.getElementById('root'));
// Appコンポーネントをレンダリングしています。
root.render(
    <App />
);