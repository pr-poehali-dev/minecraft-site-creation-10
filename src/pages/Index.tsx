import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const cars = [
  {
    name: "ETK K-Series",
    category: "Седан",
    power: "250 л.с.",
    weight: "1450 кг",
    topSpeed: "220 км/ч",
    description: "Немецкий премиальный седан с отличной управляемостью"
  },
  {
    name: "Gavril D-Series",
    category: "Пикап",
    power: "310 л.с.",
    weight: "2100 кг",
    topSpeed: "180 км/ч",
    description: "Американский тяжелый пикап для бездорожья"
  },
  {
    name: "Civetta Bolide",
    category: "Суперкар",
    power: "650 л.с.",
    weight: "1200 кг",
    topSpeed: "350 км/ч",
    description: "Итальянский гиперкар с карбоновым кузовом"
  },
  {
    name: "Ibishu Covet",
    category: "Хэтчбек",
    power: "85 л.с.",
    weight: "850 кг",
    topSpeed: "160 км/ч",
    description: "Компактный японский городской автомобиль"
  },
  {
    name: "Burnside Special",
    category: "Классика",
    power: "180 л.с.",
    weight: "1600 кг",
    topSpeed: "170 км/ч",
    description: "Американская классика 60-х годов"
  },
  {
    name: "Hirochi Sunburst",
    category: "Спорткар",
    power: "400 л.с.",
    weight: "1350 кг",
    topSpeed: "280 км/ч",
    description: "Японский спортивный автомобиль с турбонаддувом"
  }
];

const mods = [
  {
    name: "Реалистичные повреждения v2.0",
    category: "Физика",
    downloads: "125K",
    rating: 4.8,
    description: "Улучшенная система деформации кузова"
  },
  {
    name: "Пак русских автомобилей",
    category: "Автомобили",
    downloads: "89K",
    rating: 4.6,
    description: "ВАЗ, ГАЗ, УАЗ и другие модели"
  },
  {
    name: "Карта Москва",
    category: "Карты",
    downloads: "203K",
    rating: 4.9,
    description: "Детализированная карта центра Москвы"
  },
  {
    name: "Улучшенная графика",
    category: "Визуал",
    downloads: "312K",
    rating: 4.7,
    description: "Реалистичные текстуры и освещение"
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<"cars" | "mods">("cars");

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 speed-gradient opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tight">
              BeamNG.drive
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto font-light">
              Самая реалистичная физика повреждений и динамики автомобилей
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                variant={activeSection === "cars" ? "default" : "outline"}
                onClick={() => setActiveSection("cars")}
                className="text-lg px-8 font-semibold"
              >
                <Icon name="Car" className="mr-2" />
                Автомобили
              </Button>
              <Button 
                size="lg" 
                variant={activeSection === "mods" ? "default" : "outline"}
                onClick={() => setActiveSection("mods")}
                className="text-lg px-8 font-semibold"
              >
                <Icon name="Download" className="mr-2" />
                Моды
              </Button>
            </div>
          </div>

          {activeSection === "cars" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
                Галерея автомобилей
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car, index) => (
                  <Card 
                    key={index}
                    className="car-card overflow-hidden bg-card border-border"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon name="Car" size={80} className="text-primary/40" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {car.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {car.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {car.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-muted/30 rounded">
                          <div className="text-xs text-muted-foreground mb-1">Мощность</div>
                          <div className="text-sm font-semibold text-primary">{car.power}</div>
                        </div>
                        <div className="text-center p-2 bg-muted/30 rounded">
                          <div className="text-xs text-muted-foreground mb-1">Масса</div>
                          <div className="text-sm font-semibold text-secondary">{car.weight}</div>
                        </div>
                        <div className="text-center p-2 bg-muted/30 rounded">
                          <div className="text-xs text-muted-foreground mb-1">Макс.</div>
                          <div className="text-sm font-semibold text-accent">{car.topSpeed}</div>
                        </div>
                      </div>
                      
                      <Button className="w-full" variant="default">
                        <Icon name="Play" className="mr-2" size={16} />
                        Выбрать
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "mods" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
                Популярные моды
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {mods.map((mod, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-xl transition-all bg-card border-border cursor-pointer hover:border-primary/50"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Package" size={36} className="text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {mod.name}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {mod.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded">
                            <Icon name="Star" size={16} className="text-primary fill-primary" />
                            <span className="text-sm font-semibold text-primary">{mod.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {mod.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Download" size={16} className="text-secondary" />
                            <span className="font-medium">{mod.downloads} загрузок</span>
                          </div>
                          <Button size="sm" variant="default">
                            <Icon name="Download" className="mr-2" size={14} />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button size="lg" variant="outline">
                  <Icon name="Search" className="mr-2" />
                  Показать все моды
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="bg-card/30 py-20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Почему BeamNG.drive?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Cpu" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Реалистичная физика</h3>
              <p className="text-muted-foreground">
                Уникальная система расчета деформаций в реальном времени
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Palette" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Кастомизация</h3>
              <p className="text-muted-foreground">
                Тысячи модов и настроек для персонализации опыта
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Map" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Открытый мир</h3>
              <p className="text-muted-foreground">
                Огромные карты с разнообразными ландшафтами
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 BeamNG.drive Community · Создано для любителей реалистичной автосимуляции
          </p>
        </div>
      </footer>
    </div>
  );
}
