import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Заполните данные",
      description:
        "Введите госномер автомобиля и данные водителя в калькулятор",
      icon: "FileText",
      color: "bg-insurance-blue",
    },
    {
      step: "2",
      title: "Сравните предложения",
      description:
        "Система автоматически найдет лучшие тарифы от всех страховых компаний",
      icon: "BarChart3",
      color: "bg-insurance-green",
    },
    {
      step: "3",
      title: "Выберите и оплатите",
      description: "Выберите подходящий вариант и оплатите полис онлайн",
      icon: "CreditCard",
      color: "bg-insurance-orange",
    },
    {
      step: "4",
      title: "Получите полис",
      description:
        "Электронный полис придет на email и будет доступен в мобильном приложении",
      icon: "Mail",
      color: "bg-insurance-purple",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как оформить ОСАГО
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой процесс в 4 шага — от расчета до получения полиса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="insurance-card text-center h-full">
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${step.color} flex items-center justify-center text-white`}
                  >
                    <Icon name={step.icon as any} className="w-8 h-8" />
                  </div>

                  <div
                    className={`w-8 h-8 mx-auto mb-4 rounded-full ${step.color} flex items-center justify-center text-white font-bold`}
                  >
                    {step.step}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                  <Icon name="ArrowRight" className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
