/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 22:40:13
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-08 23:03:51
 */

import {sc} from './sc';
import {tc} from './tc';
import {en} from './en';

export const strings = {
  sc,
  tc,
  en,
};

export type StringType = typeof sc & typeof tc & typeof en;
