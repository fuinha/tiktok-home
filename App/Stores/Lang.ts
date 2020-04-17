/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 22:37:53
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-08 23:36:11
 *
 * 多语言切换的Store
 */

import { observable, action } from "mobx";
import { strings, StringType } from "../Modules";

export class LangStore {
  @observable type: string; //当前选中的语言的Key
  @observable str: StringType; //当前选中的语言的大字典
  types = Object.keys(strings); //所有语言的Keys
  strs = strings; //所有语言的大字典

  @action
  update = (type: string = "sc") => {
    this.type = type;
    //TODO localStorage.setItem('lang.type', type);
    this.str = strings[this.type] ? strings[this.type] : strings.sc;
  };

  constructor() {
    this.update();
  }
}
