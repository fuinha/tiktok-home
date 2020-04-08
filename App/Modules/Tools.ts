/*
 * @Author: bolan9999(shanshang130@gmail.com)
 * @Date: 2020-04-08 22:27:48
 * @Last Modified by: bolan9999(shanshang130@gmail.com)
 * @Last Modified time: 2020-04-08 22:48:37
 */

import {inject, observer} from 'mobx-react';

export function hoc(...stores: string[]) {
  return (target: any) =>
    <typeof target>inject('lang', ...stores)(observer(target));
}
