import React from 'react';

const PushScreen = ({ onStartChat }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '812px' }}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="pt-12 pb-6 text-center">
            <div className="text-sm text-gray-500 mb-2">9:41</div>
            <h1 className="text-2xl font-semibold text-purple-600">Bloom</h1>
          </div>

          {/* Push Cards */}
          <div className="flex-1 flex flex-col justify-center px-6 space-y-4">
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🌸</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">Bloom</div>
                  <div className="text-sm text-gray-500">지금</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">오늘 하루 어땠어요?</p>
            </div>

            <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🌺</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">Bloom</div>
                  <div className="text-sm text-gray-500">지금</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">지금 기분이 어때요?</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-6 pb-8">
            <button
              onClick={onStartChat}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
            >
              대화 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushScreen;
