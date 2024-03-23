import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center space-y-4 flex-col p-2">
      <p className="bg-red-400 p-1">Microphone: {listening ? "on" : "off"}</p>
      <div className="flex space-x-4">
        <button className="bg-teal-200 px-4 py-1" onClick={SpeechRecognition.startListening}>Start</button>
        <button className="bg-teal-200 px-4 py-1" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className="bg-teal-200 px-4 py-1" onClick={resetTranscript}>Reset</button>
      </div>
      <p className="bg-yellow-200 p-2 text-semibold text-sm">{transcript}</p>
    </div>
  );
};
export default App;



// import React, { useState } from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// const App = () => {
//   const [message, setMessage] = useState('')
//   const commands = [
//     {
//       command: 'I would like to order *',
//       callback: (food) => setMessage(`Your order is for: ${food}`)
//     },
//     {
//       command: 'The weather is :condition today',
//       callback: (condition) => setMessage(`Today, the weather is ${condition}`)
//     },
//     {
//       command: 'My top sports are * and *',
//       callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
//     },
//     {
//       command: 'Pass the salt (please)',
//       callback: () => setMessage('My pleasure')
//     },
//     {
//       command: ['Hello', 'Hi'],
//       callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
//       matchInterim: true
//     },
//     {
//       command: 'Beijing',
//       callback: (command, spokenPhrase, similarityRatio) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
//       // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
//       isFuzzyMatch: true,
//       fuzzyMatchingThreshold: 0.2
//     },
//     {
//       command: ['eat', 'sleep', 'leave'],
//       callback: (command) => setMessage(`Best matching command: ${command}`),
//       isFuzzyMatch: true,
//       fuzzyMatchingThreshold: 0.2,
//       bestMatchOnly: true
//     },
//     {
//       command: 'clear',
//       callback: ({ resetTranscript }) => resetTranscript()
//     }
//   ]

//   const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })

//   if (!browserSupportsSpeechRecognition) {
//     return null
//   }

//   return (
//     <div>
//       <p>hiii</p>
//       <p>{message}</p>
//       <p>{transcript}</p>
//     </div>
//   )
// }
// export default App;