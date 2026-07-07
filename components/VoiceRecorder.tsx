"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition?: any;
    SpeechRecognition?: any;
  }
}

type VoiceRecorderProps = {
  onTranscript: (text: string) => void;
  onError?: (message: string) => void;
};

export default function VoiceRecorder({ onTranscript, onError }: VoiceRecorderProps) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      onError?.("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event?.results?.[0]?.[0]?.transcript ?? "";
      onTranscript(transcript.trim());
    };

    recognition.onerror = () => {
      setIsListening(false);
      onError?.("Unable to process voice input.");
    };

    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
  }, [onError, onTranscript]);

  const start = () => {
    if (!recognitionRef.current) return;
    setIsListening(true);
    recognitionRef.current.start();
  };

  return (
    <button
      type="button"
      onClick={start}
      style={{
        padding: "10px 14px",
        borderRadius: 8,
        border: "1px solid #ccc",
        background: isListening ? "#dc2626" : "#2563eb",
        color: "white",
        cursor: "pointer",
      }}
    >
      {isListening ? "Listening..." : "🎤 Record"}
    </button>
  );
}
