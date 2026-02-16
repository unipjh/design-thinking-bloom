import React, { useState } from 'react';
import PushScreen from './components/PushScreen';
import ChatScreen from './components/ChatScreen';
import EmotionScreen from './components/EmotionScreen';
import WeeklyScreen from './components/WeeklyScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('push');
  const [messages, setMessages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);

  const emotionData = {
    joy: 0.3,
    anxiety: 0.7,
    fatigue: 0.5,
    calm: 0.2
  };

  const weeklyData = [
    { date: '2/11', day: '월', emotions: { anxiety: 0.8, joy: 0.2, fatigue: 0.3 }, top3: ['불안', '기대', '피로'] },
    { date: '2/12', day: '화', emotions: { anxiety: 0.6, joy: 0.5, fatigue: 0.4 }, top3: ['기쁨', '불안', '평온'] },
    { date: '2/13', day: '수', emotions: { anxiety: 0.4, joy: 0.7, fatigue: 0.2 }, top3: ['기쁨', '평온', '불안'] },
    { date: '2/14', day: '목', emotions: { anxiety: 0.5, joy: 0.6, fatigue: 0.5 }, top3: ['기쁨', '피로', '불안'] },
    { date: '2/15', day: '금', emotions: { anxiety: 0.9, joy: 0.1, fatigue: 0.8 }, top3: ['불안', '피로', '기대'] },
    { date: '2/16', day: '토', emotions: { anxiety: 0.3, joy: 0.8, fatigue: 0.2 }, top3: ['기쁨', '평온', '설렘'] },
    { date: '2/17', day: '일', emotions: { anxiety: 0.7, joy: 0.3, fatigue: 0.5 }, top3: ['불안', '기대', '피로'] },
  ];

  const startChat = () => {
    setCurrentScreen('chat');
    setMessages([{ role: 'bot', text: '오늘 하루 어땠어요?' }]);
    setMessageCount(0);
  };

  return (
    <div className="App">
      {currentScreen === 'push' && (
        <PushScreen onStartChat={startChat} />
      )}
      {currentScreen === 'chat' && (
        <ChatScreen
          messages={messages}
          setMessages={setMessages}
          messageCount={messageCount}
          setMessageCount={setMessageCount}
          onShowEmotion={() => setCurrentScreen('emotion')}
        />
      )}
      {currentScreen === 'emotion' && (
        <EmotionScreen
          emotionData={emotionData}
          onShowWeekly={() => setCurrentScreen('weekly')}
          onContinueChat={() => {
            setMessages([{ role: 'bot', text: '계속 이야기 나눠볼까요?' }]);
            setCurrentScreen('chat');
          }}
        />
      )}
      {currentScreen === 'weekly' && (
        <WeeklyScreen
          weeklyData={weeklyData}
          onStartNewChat={startChat}
        />
      )}
    </div>
  );
}

export default App;
