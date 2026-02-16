import React from 'react';

const WeeklyScreen = ({ weeklyData, onStartNewChat }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '812px' }}>
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="pt-12 pb-6 px-6 sticky top-0 bg-white">
            <h2 className="text-2xl font-semibold text-gray-800">이번 주의 감정들</h2>
          </div>

          {/* Weekly Grid */}
          <div className="flex-1 px-6 pb-6">
            <div className="grid grid-cols-1 gap-3">
              {weeklyData.map((day, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-lg font-semibold text-gray-800">{day.date}</div>
                      <div className="text-sm text-gray-500">{day.day}요일</div>
                    </div>
                    <div className="text-3xl">
                      {day.emotions.joy > 0.6 ? '🌸' : day.emotions.anxiety > 0.6 ? '🌧️' : '🌿'}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {day.top3.map((emotion, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Insight Card */}
            <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-5">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <div className="font-medium text-gray-800 mb-1">이번 주 인사이트</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    이번 주 가장 자주 등장한 감정은 '불안'입니다
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onStartNewChat}
              className="w-full mt-6 mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-full font-medium shadow-lg"
            >
              새로운 대화 시작
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyScreen;
