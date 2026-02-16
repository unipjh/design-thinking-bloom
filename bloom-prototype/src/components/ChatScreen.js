import React, { useState, useEffect, useRef } from 'react';

const ChatScreen = ({ messages, setMessages, messageCount, setMessageCount, onShowEmotion }) => {
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);

  const botResponses = [
    '그랬구나. 조금 더 말해줄래요?',
    '힘들었겠어요. 어떤 부분이 가장 어려웠나요?',
    '그 감정을 느꼈을 때 어땠어요?',
    '충분히 그럴 수 있어요. 더 말하고 싶은 게 있나요?',
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessages = [...messages, { role: 'user', text: inputText }];
    setMessages(newMessages);
    setInputText('');
    setMessageCount(messageCount + 1);

    setTimeout(() => {
      const botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages([...newMessages, { role: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '812px' }}>
        <div className="h-full flex flex-col">
          {/* Progress Bar */}
          <div className="pt-8 pb-4 px-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">대화 진행</span>
              <span className="text-sm font-medium text-purple-600">{messageCount}/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(messageCount / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Show Emotion Button */}
          {messageCount >= 5 && (
            <div className="px-6 pb-2 animate-fade-in">
              <button
                onClick={onShowEmotion}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-medium shadow-lg"
              >
                오늘의 감정 보기 🌸
              </button>
            </div>
          )}

          {/* Input Field */}
          <div className="p-6 pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                onClick={handleSendMessage}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
