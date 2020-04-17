/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 16:15:37
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-17 17:18:51
 */
import React from "react";
import { Home } from "./Pages";
import { Provider } from "mobx-react";
import * as Stores from "./Stores";

const stores = {};
Object.keys(Stores).forEach((key: string) => {
  const Store = Stores[key];
  key = key.replace("Store", "");
  if (!key || key.length === 0) return;
  key = key[0].toLowerCase() + key.substring(1);
  stores[key] = new Store();
});

export const App = () => {
  return (
    <Provider {...stores}>
      <Home />
    </Provider>
  );
};
