import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from 'src/app/services/speech-recognition.service';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.scss'],
})
export class SpeechRecognitionComponent implements OnInit {
  positiveFoods: string = '';
  socialActivities: string = '';
  gratitudeFamily: string = '';
  gratitudeFriends: string = '';
  userResponses: string[] = [];

  constructor(private speechRecognitionService: SpeechRecognitionService) {}

  ngOnInit(): void {
    debugger
    this.startConversation();
  }

  // Step 1: Greet the user
  startConversation(): void {
    this.speechRecognitionService.speakText("Hello, welcome! How are you feeling today?");
    setTimeout(() => {
      this.askPositiveAndHealthyFoods();
    }, 3000);
  }

  // Step 2: Ask about Positive and Healthy Foods
  askPositiveAndHealthyFoods(): void {
    this.speechRecognitionService.speakText("What positive and healthy foods did you have today?");
    this.speechRecognitionService.startListening().then((response) => {
      this.positiveFoods = response;
      this.userResponses.push(`Healthy food: ${response}`);
      setTimeout(() => {
        this.askSocialActivities();
      }, 2000);
    }).catch(err => console.error("Error in speech recognition", err));
  }

  // Step 3: Ask about Social Activities
  askSocialActivities(): void {
    this.speechRecognitionService.speakText("What social activities did you engage in today?");
    this.speechRecognitionService.startListening().then((response) => {
      this.socialActivities = response;
      this.userResponses.push(`Social activities: ${response}`);
      setTimeout(() => {
        this.askGratitudeFamily();
      }, 2000);
    }).catch(err => console.error("Error in speech recognition", err));
  }

  // Step 4: Ask about Gratitude to Family
  askGratitudeFamily(): void {
    this.speechRecognitionService.speakText("What are you grateful for in your family today?");
    this.speechRecognitionService.startListening().then((response) => {
      this.gratitudeFamily = response;
      this.userResponses.push(`Gratitude to family: ${response}`);
      setTimeout(() => {
        this.askGratitudeFriends();
      }, 2000);
    }).catch(err => console.error("Error in speech recognition", err));
  }

  // Step 5: Ask about Gratitude to Friends or Others
  askGratitudeFriends(): void {
    this.speechRecognitionService.speakText("What are you grateful for from your friends or others today?");
    this.speechRecognitionService.startListening().then((response) => {
      this.gratitudeFriends = response;
      this.userResponses.push(`Gratitude to friends or others: ${response}`);
      setTimeout(() => {
        this.displayResponses();
      }, 2000);
    }).catch(err => console.error("Error in speech recognition", err));
  }

  // Display all the responses once the conversation ends
  displayResponses(): void {
    let fullResponse = this.userResponses.join("\n");
    this.speechRecognitionService.speakText(`Thank you for sharing. Here's what you've said:\n${fullResponse}`);
    console.log("User Responses:", fullResponse);
  }
}