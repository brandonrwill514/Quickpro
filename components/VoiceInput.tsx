"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

interface VoiceInputProps {
  onTranscript: (text: string) => void;
}

export default function VoiceInput({ onTranscript }: VoiceInputProps) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error(event);
      setListening(false);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
    };

    recognitionRef.current = recognition;
  }, [onTranscript]);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  return (
    <button
      type="button"
      onClick={startListening}
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        cursor: "pointer",
        border: "none",
        background: listening ? "#dc2626" : "#2563eb",
        color: "white",
        fontWeight: 600,
      }}
    >
      {listening ? "🎙 Listening..." : "🎤 Speak Job Details"}
    </button>
  );
}
