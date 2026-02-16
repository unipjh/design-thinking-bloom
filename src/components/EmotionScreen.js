import React from 'react';
import FlowerChart from './FlowerChart';

const EmotionScreen = ({ emotionData, onShowWeekly, onContinueChat }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '812px' }}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="pt-12 pb-6 px-6 text-center">
            <h2 className="text-xl font-medium text-gray-800 leading-relaxed">
              오늘의 감정이<br />이렇게 피었습니다
            </h2>
          </div>

          {/* Flower Chart */}
          <div className="flex-1 flex items-center justify-center">
            <FlowerChart emotionData={emotionData} />
          </div>

          {/* Interpretation */}
          <div className="px-6 pb-6">
            <div className="bg-purple-50 rounded-2xl p-4 mb-4">
              <p className="text-center text-gray-700 leading-relaxed">
                오늘은 불안과 기대가 함께 나타났습니다
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={onShowWeekly}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-medium shadow-lg"
              >
                주간 감정 보기
              </button>
              <button
                onClick={onContinueChat}
                className="w-full bg-white border-2 border-purple-300 text-purple-600 py-3 rounded-full font-medium"
              >
                대화 계속하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionScreen;
