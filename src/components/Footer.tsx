import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-insurance-blue rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ОСАГО.pro</h3>
                <p className="text-xs text-gray-400">Умное страхование</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Современный сервис для оформления ОСАГО онлайн с лучшими условиями
              от проверенных страховых компаний.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-insurance-blue transition-colors cursor-pointer">
                <Icon name="MessageCircle" className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-insurance-blue transition-colors cursor-pointer">
                <Icon name="Mail" className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-insurance-blue transition-colors cursor-pointer">
                <Icon name="Phone" className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Калькулятор ОСАГО
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Сравнение тарифов
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Проверка КБМ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Электронный полис
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Мобильное приложение
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Техподдержка 24/7
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Онлайн-чат
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Обратная связь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-insurance-blue transition-colors"
                >
                  Статьи и советы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="w-4 h-4 text-insurance-blue" />
                <span>8 800 555-0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="w-4 h-4 text-insurance-blue" />
                <span>support@osago.pro</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon
                  name="MapPin"
                  className="w-4 h-4 text-insurance-blue mt-0.5"
                />
                <span>
                  г. Москва, ул. Тверская, 1<br />
                  БЦ "Центральный", оф. 1001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 ОСАГО.pro. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-insurance-blue transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-insurance-blue transition-colors">
              Пользовательское соглашение
            </a>
            <a href="#" className="hover:text-insurance-blue transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
