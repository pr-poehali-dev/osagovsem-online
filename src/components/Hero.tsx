import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import OSAGOCalculator from "./OSAGOCalculator";

const Hero = () => {
  return (
    <section className="insurance-gradient py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              ОСАГО онлайн за
              <span className="text-yellow-300"> 5 минут</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Сравните тарифы всех страховых компаний, получите лучшую цену и
              электронный полис мгновенно
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-insurance-blue hover:bg-gray-50 text-lg px-8 py-4"
              >
                <Icon name="Calculator" className="w-5 h-5 mr-2" />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-insurance-blue text-lg px-8 py-4"
              >
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Как это работает
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-blue-100">страховых компаний</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-blue-100">техподдержка</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">2 млн+</div>
                <div className="text-blue-100">довольных клиентов</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <OSAGOCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
