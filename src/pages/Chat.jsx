import { useState, useEffect } from 'react';
import { useDocument } from '../context/DocumentContext';

const Chat = () => {
  const { selectedDocument } = useDocument();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => {
    // Request microphone access and initialize MediaRecorder
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const recorder = new MediaRecorder(stream);
          setMediaRecorder(recorder);
        })
        .catch((err) => {
          console.error('Microphone access denied:', err);
        });
    }
  }, []);

  const handleSend = () => {
    const newMessage = { text: input, type: 'user' };
    setMessages((prev) => [...prev, newMessage]);

    // Placeholder AI response
    const aiResponse = { text: `AI: Response to "${input}"`, type: 'bot' };
    setMessages((prev) => [...prev, aiResponse]);

    setInput('');
  };

  const handleStartRecording = () => {
    if (mediaRecorder) {
      setIsRecording(true);
      mediaRecorder.start();

      mediaRecorder.ondataavailable = (event) => {
        const audioBlob = event.data;
        console.log('Recorded audio:', audioBlob);
        // Send `audioBlob` to backend for transcription if needed
      };
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder && isRecording) {
      setIsRecording(false);
      mediaRecorder.stop();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Chat About Your Document</h1>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Document Section */}
        <div className="flex-1 bg-gray-200 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Selected Document</h2>
          {selectedDocument ? (
            <div className="text-gray-700">
              <p><strong>Name:</strong> {selectedDocument.name}</p>
              <p><strong>Date:</strong> {selectedDocument.date}</p>
            </div>
          ) : (
            <p className="text-gray-500">No document selected.</p>
          )}
        </div>

        {/* Chat Section */}
        <div className="flex-1 bg-gray-200 p-4 rounded shadow">
          <div className="h-64 overflow-y-auto mb-4 bg-white p-4 rounded border border-gray-300">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded ${
                  msg.type === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-300'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center gap-2">
            <button
              onMouseDown={handleStartRecording}
              onMouseUp={handleStopRecording}
              onTouchStart={handleStartRecording}
              onTouchEnd={handleStopRecording}
              className={`p-2 rounded-full focus:ring focus:ring-blue-300 ${
                isRecording ? 'bg-red-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              aria-label="Record audio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14a4 4 0 004-4V7a4 4 0 10-8 0v3a4 4 0 004 4zm0 0v5m0 0H8m4 0h4"
                />
              </svg>
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-2 rounded"
              placeholder="Ask a question..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300"
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
