import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import DetailCategory from './pages/DetailCategory';
import CategoryPage from './pages/CategoryPage';
import Category from './components/Category/Category';
import About from './pages/About';
import Test from './pages/Test';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<App />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/category/" element={<CategoryPage />} />
    <Route path="/detailcategory/:subject" element={<DetailCategory />} />
    <Route path="/about" element={<About />} />
    <Route path="/test" element={<Test/>} />
    <Route path="/books" element={<App />} />
    <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
