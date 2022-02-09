import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/routes/dashboard/home'
import Settings from '../src/routes/dashboard/settings'

import { StyleReset } from 'atomize';
import { Provider as StyletronProvider} from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import './index.css';
import App from './App';
import MenuView from './routes/menu/menuView';
import ItemView from './routes/menu/itemView';
import MenuHome from './routes/menu/menuHome';

const rootElement = document.getElementById("root");
// 1. Create a client engine instance
const engine = new Styletron();


render(
  <BrowserRouter>
    <StyletronProvider value={engine}>
      <StyleReset></StyleReset>
        <Routes>
          <Route path="/" element={<MenuHome />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="menu" element={<MenuView />} />
          <Route path="producto" element={<ItemView />} />
          <Route path="App" element={<App />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
    </StyletronProvider>
  </BrowserRouter>,
  rootElement
);