import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechRecognitionRoutingModule } from './speech-recognition-routing.module';
import { SpeechRecognitionComponent } from './speech-recognition.component';



@NgModule({
  declarations: [SpeechRecognitionComponent],
  imports: [
    CommonModule,SpeechRecognitionRoutingModule
  ]
})
export class SpeechRecognitionModule { }



