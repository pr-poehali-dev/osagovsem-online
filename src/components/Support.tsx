import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Support = () => {
  const supportOptions = [
    {
      title: "Горячая линия",
      description: "Круглосуточная поддержка по телефону",
      contact: "8 800 555-0123",
      icon: "Phone",
      color: "text-insurance-blue",
    },
    {
      title: "Онлайн-чат",
      description: "Быстрые ответы в режиме реального времени",
      contact: "Начать чат",
      icon: "MessageCircle",
      color: "text-insurance-green",
    },
    {
      title: "Email поддержка",
      description: "Подробные консультации по email",
      contact: "support@osago.pro",
      icon: "Mail",
      color: "text-insurance-orange",
    },
  ];

  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Поддержка и консультации
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши эксперты готовы помочь вам 24/7 с любыми вопросами по
            страхованию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Способы связи
            </h3>

            <div className="space-y-4">
              {supportOptions.map((option, index) => (
                <Card key={index} className="insurance-card">
                  <CardContent className="flex items-center gap-4 pt-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center ${option.color}`}
                    >
                      <Icon name={option.icon as any} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {option.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                      <p className="text-insurance-blue font-medium">
                        {option.contact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="insurance-card mt-6">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    name="Clock"
                    className="w-5 h-5 text-insurance-purple"
                  />
                  <h4 className="font-semibold text-gray-900">Время работы</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span>9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота - Воскресенье</span>
                    <span>10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between font-medium text-insurance-blue">
                    <span>Экстренная поддержка</span>
                    <span>24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="insurance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon
                    name="MessageSquare"
                    className="w-5 h-5 text-insurance-blue"
                  />
                  Задать вопрос
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (999) 123-45-67"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш вопрос подробно..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button className="w-full insurance-button">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Отправляя форму, вы соглашаетесь с
                  <a href="#" className="text-insurance-blue hover:underline">
                    {" "}
                    политикой конфиденциальности
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
