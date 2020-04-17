/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 22:56:09
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-17 17:16:37
 */

import * as React from "react";
import { LangStore } from "../Stores";

export class TypedComponent<T = {}, F = {}> extends React.Component<T & TypedComponentProps, F> {
  static path: string; //路由的path,如果组件不是路由，则可以不重写此属性
}

export interface TypedComponentProps {
  lang?: LangStore;
}
