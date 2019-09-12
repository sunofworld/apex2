import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'dingdan', loadChildren: './dingdan/dingdan.module#DingdanPageModule' },
  { path: 'denglu', loadChildren: './denglu/denglu.module#DengluPageModule' },
  { path: 'zhuce', loadChildren: './zhuce/zhuce.module#ZhucePageModule' },
  { path: 'set', loadChildren: './set/set.module#SetPageModule' },
  { path: 'zhanghao', loadChildren: './zhanghao/zhanghao.module#ZhanghaoPageModule' },
  { path: 'changemm', loadChildren: './zhanghao/changemm/changemm.module#ChangemmPageModule' },
  { path: 'changemb', loadChildren: './zhanghao/changemb/changemb.module#ChangembPageModule' },
  { path: 'selectlist', loadChildren: './selectlist/selectlist.module#SelectlistPageModule' },
  { path: 'one', loadChildren: './one/one.module#OnePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
