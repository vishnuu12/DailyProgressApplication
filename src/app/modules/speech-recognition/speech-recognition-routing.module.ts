import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechRecognitionComponent } from './speech-recognition.component';


const routes: Routes = [
  { path:'', component:SpeechRecognitionComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeechRecognitionRoutingModule { }
