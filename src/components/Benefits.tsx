import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Мгновенное оформление",
      description: "Получите электронный полис за 5 минут без посещения офиса",
      color: "text-insurance-orange",
    },
    {
      icon: "Shield",
      title: "Проверка КБМ",
      description:
        "Автоматическая проверка коэффициента бонус-малус для лучшей цены",
      color: "text-insurance-blue",
    },
    {
      icon: "CreditCard",
      title: "Онлайн оплата",
      description: "Безопасная оплата картой с мгновенным получением полиса",
      color: "text-insurance-green",
    },
    {
      icon: "Users",
      title: "Техподдержка 24/7",
      description: "Круглосуточная поддержка и консультации по всем вопросам",
      color: "text-insurance-purple",
    },
    {
      icon: "BarChart3",
      title: "Сравнение тарифов",
      description:
        "Сравниваем предложения 50+ страховых компаний автоматически",
      color: "text-insurance-blue",
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      description: "Управляйте полисом через удобное мобильное приложение",
      color: "text-insurance-green",
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные технологии и индивидуальный подход для получения лучших
            условий страхования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="insurance-card text-center">
              <CardContent className="pt-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${benefit.color}`}
                >
                  <Icon name={benefit.icon as any} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
