
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-4xl font-bold mb-6 text-amber-800">Путешествие через пустыню</h1>
        <p className="text-xl mb-8 text-amber-700">
          Погрузитесь в бесконечное путешествие на поезде через живописную пустыню с реалистичной анимацией и звуковыми эффектами.
        </p>
        
        <div className="w-full h-40 mb-8 relative overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-300 to-amber-500"></div>
          <div className="absolute bottom-[20%] w-full h-[30%] bg-amber-600"></div>
          <div className="absolute bottom-[20%] left-[10%] w-24 h-6 bg-red-600 rounded"></div>
        </div>
        
        <Link to="/train">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-md">
            Начать путешествие
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
