import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  private recognition: any;
  public transcript: string = '';
  public isListening: boolean = false; // Track listening state
  private voices: SpeechSynthesisVoice[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    debugger;
    // Initialize SpeechRecognition (STT)
    const { webkitSpeechRecognition }: any = window;
    if (webkitSpeechRecognition) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript;
          } else {
            interimTranscript += result[0].transcript;
          }
        }
        this.transcript = finalTranscript || interimTranscript;
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech Recognition error', event.error);
      };

      this.recognition.onend = () => {
        this.isListening = false; // Reset listening state when recognition ends
        console.log('Speech Recognition has ended');
      };
    } else {
      console.error('Speech Recognition is not supported in this browser');
    }

    // Load voices after the page has loaded
    this.loadVoices();
  }

  // Load available voices
  private loadVoices(): void {
    const voices = speechSynthesis.getVoices();
    if (voices.length === 0) {
      speechSynthesis.onvoiceschanged = () => {
        this.voices = speechSynthesis.getVoices();
        this.selectGoogleFemaleVoice();
      };
    } else {
      this.voices = voices;
      this.selectGoogleFemaleVoice();
    }
  }

  // Select a Google Female voice (Google UK English Female or Google US English Female)
  private selectGoogleFemaleVoice(): void {
    const googleFemaleVoice = this.voices.find(
      voice => voice.name === 'Google UK English Female' || voice.name === 'Google US English Female'
    );
    this.selectedVoice = googleFemaleVoice || this.voices[0]; // Fallback to the first available voice
  }

  // Function to start speech recognition and capture user response
  public startListening(): Promise<string> {
    return new Promise((resolve, reject) => {
      // Prevent starting recognition if it's already listening
      if (this.isListening) {
        console.log('Speech recognition is already running.');
        return;
      }

      if (this.recognition) {
        this.isListening = true; // Set state to listening
        this.recognition.start();
        this.recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          resolve(transcript);
        };
        this.recognition.onerror = (event: any) => {
          reject(event.error);
        };
      } else {
        reject("Speech recognition is not available.");
      }
    });
  }

  // Stop listening
  public stopListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false; // Reset listening state
      console.log('Speech recognition has been stopped.');
    }
  }

  // Speak text (TTS) with a soft, loving, and sweet Google Female voice
  speakText(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    // Gentle, loving, sweet voice settings
    utterance.pitch = 1.2;  // Moderate pitch for a warm, gentle tone
    utterance.rate = 0.9;   // Slightly slower rate to maintain clarity, but not too slow
    utterance.volume = 1;   // Full volume for clear speech

    // Speak the text with these settings
    speechSynthesis.speak(utterance);
  }
}
