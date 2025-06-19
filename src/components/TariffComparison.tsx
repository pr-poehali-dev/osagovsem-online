import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TariffComparison = () => {
  const tariffs = [
    {
      company: "Ренессанс Страхование",
      logo: "🏛️",
      price: "4 250 ₽",
      originalPrice: "4 850 ₽",
      discount: "12%",
      rating: 4.8,
      features: [
        "Круглосуточная поддержка",
        "Электронный полис",
        "Без визита в офис",
      ],
      badge: "Лучшая цена",
      badgeColor: "bg-insurance-green",
    },
    {
      company: "Тинькофф Страхование",
      logo: "🏦",
      price: "4 480 ₽",
      originalPrice: "4 980 ₽",
      discount: "10%",
      rating: 4.9,
      features: [
        "Мобильное приложение",
        "Быстрые выплаты",
        "Без скрытых комиссий",
      ],
      badge: "Популярный",
      badgeColor: "bg-insurance-blue",
    },
    {
      company: "Сбер Страхование",
      logo: "🏢",
      price: "4 650 ₽",
      originalPrice: "5 100 ₽",
      discount: "9%",
      rating: 4.7,
      features: [
        "Широкая сеть офисов",
        "Проверенная надежность",
        "Онлайн оформление",
      ],
      badge: "Надежный",
      badgeColor: "bg-insurance-purple",
    },
  ];

  return (
    <section id="tariffs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Сравнение тарифов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы сравнили предложения всех крупных страховых компаний и нашли для
            вас лучшие варианты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tariffs.map((tariff, index) => (
            <Card
              key={index}
              className="insurance-card relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Badge className={`${tariff.badgeColor} text-white`}>
                  {tariff.badge}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{tariff.logo}</div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {tariff.company}
                </CardTitle>
                <div className="flex items-center justify-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className={`w-4 h-4 ${i < Math.floor(tariff.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                  <span className="text-gray-600 ml-1">({tariff.rating})</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {tariff.price}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-insurance-orange text-white"
                    >
                      -{tariff.discount}
                    </Badge>
                  </div>
                  <div className="text-gray-500 line-through">
                    {tariff.originalPrice}
                  </div>
                </div>

                <div className="space-y-2">
                  {tariff.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-insurance-green"
                      />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full insurance-button">
                  <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                  Оформить полис
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            <Icon name="RefreshCw" className="w-4 h-4 mr-2" />
            Обновить расчет
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TariffComparison;
