import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-insurance-blue rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ОСАГО.pro</h1>
              <p className="text-xs text-gray-500">Умное страхование</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#calculator"
              className="text-gray-600 hover:text-insurance-blue transition-colors"
            >
              Калькулятор
            </a>
            <a
              href="#tariffs"
              className="text-gray-600 hover:text-insurance-blue transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-insurance-blue transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#support"
              className="text-gray-600 hover:text-insurance-blue transition-colors"
            >
              Поддержка
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Icon name="Phone" className="w-4 h-4 mr-2" />8 800 555-0123
            </Button>
            <Button className="insurance-button">Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
