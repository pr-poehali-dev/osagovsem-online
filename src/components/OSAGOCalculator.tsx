import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const OSAGOCalculator = () => {
  const [carNumber, setCarNumber] = useState("");
  const [driverAge, setDriverAge] = useState("");
  const [experience, setExperience] = useState("");
  const [region, setRegion] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    // Имитация расчета
    setTimeout(() => {
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto insurance-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <Icon name="Calculator" className="w-6 h-6 text-insurance-blue" />
          Калькулятор ОСАГО
        </CardTitle>
        <p className="text-gray-600">
          Рассчитайте стоимость полиса прямо сейчас
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="carNumber">Госномер автомобиля</Label>
          <Input
            id="carNumber"
            placeholder="А123БВ777"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="age">Возраст</Label>
            <Select value={driverAge} onValueChange={setDriverAge}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Выберите" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under22">До 22 лет</SelectItem>
                <SelectItem value="22plus">22+ лет</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="experience">Стаж</Label>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Выберите" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under3">До 3 лет</SelectItem>
                <SelectItem value="3plus">3+ лет</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="region">Регион</Label>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Выберите регион" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moscow">Москва</SelectItem>
              <SelectItem value="spb">Санкт-Петербург</SelectItem>
              <SelectItem value="region">Другой регион</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleCalculate}
          disabled={isCalculating}
          className="w-full insurance-button text-lg py-6"
        >
          {isCalculating ? (
            <>
              <Icon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
              Рассчитываем...
            </>
          ) : (
            <>
              <Icon name="Search" className="w-5 h-5 mr-2" />
              Найти лучшую цену
            </>
          )}
        </Button>

        <div className="text-center text-sm text-gray-500">
          <Icon name="Shield" className="w-4 h-4 inline mr-1" />
          Данные защищены и не передаются третьим лицам
        </div>
      </CardContent>
    </Card>
  );
};

export default OSAGOCalculator;
