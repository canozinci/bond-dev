import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Cloud, CloudRain } from 'lucide-react';

const WarmCareUI = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [weather, setWeather] = useState('sunny');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
    setWeather(['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)]);
  }, []);

  const steps = [
    {
      question: "How are you feeling today?",
      type: "emoji",
      showAvatar: true,
      options: [
        { emoji: "😊", text: "Great", color: "bg-green-100 text-emerald-700" },
        { emoji: "😐", text: "Okay", color: "bg-amber-100 text-amber-700" },
        { emoji: "😞", text: "Not good", color: "bg-rose-100 text-rose-700" }
      ],
      footer: "❤️ We love you and are thinking of you!"
    },
    {
      question: "Have you taken your medication?",
      type: "text",
      options: [
        { text: "Yes, all taken", color: "bg-green-100 text-emerald-700" },
        { text: "Not yet, I'll take them now", color: "bg-amber-100 text-amber-700" },
        { text: "I forgot, please remind me", color: "bg-rose-100 text-rose-700" }
      ],
      footer: "Stay healthy. Your meds are important!"
    },
    {
      question: "How's your energy level today?",
      type: "emoji",
      options: [
        { emoji: "⚡", text: "High", color: "bg-green-100 text-emerald-700" },
        { emoji: "😌", text: "Medium", color: "bg-amber-100 text-amber-700" },
        { emoji: "😴", text: "Low", color: "bg-sky-100 text-sky-700" }
      ],
      footer: "Your well-being matters to us!"
    },
    {
      question: "Want to play a game or do a puzzle?",
      type: "text",
      options: [
        { text: "Word game, please", color: "bg-emerald-100 text-emerald-700" },
        { text: "Show me a puzzle", color: "bg-sky-100 text-sky-700" },
        { text: "Tell me a joke", color: "bg-amber-100 text-amber-700" }
      ],
      footer: "Having fun is good for you! Enjoy!"
    }
  ];

  const handleOptionClick = (option) => {
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        alert(`Great choice! Let's ${option.text.toLowerCase()}.`);
      }
    }, 1500);
  };

  const currentStepData = steps[currentStep];

  const WeatherIcon = () => {
    switch(weather) {
      case 'sunny': return <Sun className="text-amber-500" />;
      case 'cloudy': return <Cloud className="text-gray-500" />;
      case 'rainy': return <CloudRain className="text-sky-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-warm-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-orange-50 border-none shadow-lg">
        <CardContent className="pt-8 pb-8 space-y-8 relative">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
            <div>{currentDate}</div>
            <div className="flex items-center">
              <WeatherIcon />
              <span className="ml-1 capitalize">{weather}</span>
            </div>
          </div>
          <div className="space-y-6">
            {currentStep === 0 && <div className="text-2xl font-medium text-center font-serif text-warm-800">Hi Mom,</div>}
            <div className="text-xl text-center font-serif text-warm-800">{currentStepData.question}</div>
          </div>
          <div className="space-y-4 relative" style={{ minHeight: '220px' }}>
            {currentStepData.type === "emoji" ? (
              <div className="flex justify-around">
                {currentStepData.options.map((option, index) => (
                  <Button
                    key={index}
                    className={`${option.color} rounded-lg w-28 h-28 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${showFeedback ? 'opacity-0' : 'opacity-100'}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={showFeedback}
                  >
                    <span className="text-5xl mb-2">{option.emoji}</span>
                    <span className="text-sm font-medium">{option.text}</span>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                {currentStepData.options.map((option, index) => (
                  <Button
                    key={index}
                    className={`${option.color} rounded-lg py-4 px-6 flex items-center justify-center transition-all duration-300 ease-in-out ${showFeedback ? 'opacity-0' : 'opacity-100'}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={showFeedback}
                  >
                    <span className="text-lg font-medium">{option.text}</span>
                  </Button>
                ))}
              </div>
            )}
            <div className={`absolute inset-0 flex items-center justify-center bg-orange-50 transition-all duration-300 ease-in-out ${showFeedback ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="text-xl font-serif text-warm-800 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
                Thank you for sharing!
              </div>
            </div>
          </div>
          {steps[currentStep].showAvatar && (
          <div className={`flex justify-center transition-all duration-300 ease-in-out ${steps[currentStep].showAvatar ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'}`}>
  <div className="w-16 h-16 rounded-full overflow-hidden drop-shadow-xl relative " style={{margin:'-22px'}}>

          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTM5bHE0am1paHU5OWdod3Vuazk1NjBjd2loMXljZWo0cXJyOXl2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNd9BgFOSwAvXDNUk/giphy.webp"
            alt="Waving avatar"
            className="w-16 h-16 object-cover scale-[1.0]"
          />
            </div>
</div>
  )}
          <div className="text-center text-warm-700 mt-6 font-serif">{currentStepData.footer}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WarmCareUI;