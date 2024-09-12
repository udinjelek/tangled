import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestUploadDownloadComponent } from './pages/test-upload-download/test-upload-download.component';

const routes: Routes = [
  {path:'uldl',component:TestUploadDownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
