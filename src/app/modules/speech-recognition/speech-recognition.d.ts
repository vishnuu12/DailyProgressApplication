// src/speech-recognition.d.ts

declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
  
  declare var webkitSpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
  
  interface SpeechRecognitionEvent {
    resultIndex: number;
    results: SpeechRecognitionResultList;
  }
  
  interface SpeechRecognitionResultList {
    // Removed the index signature here
    // Access results by using the proper array notation
  }
  
  interface SpeechRecognitionResult {
    // Removed the index signature here
    // Access alternatives by using the proper array notation
  }
  
//   interface SpeechRecognitionAlternative {
//     transcript: string;
//     confidence: number;
//   }
  
  interface SpeechRecognition {
    start(): void;
    stop(): void;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: any) => void;
    continuous: boolean;
    interimResults: boolean;
  }
  