import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mechanics = [
  {
    title: "Крафт",
    icon: "Hammer",
    emoji: "🔨",
    description: "Создавай предметы, инструменты и блоки из ресурсов",
    tips: ["Используй верстак для сложных рецептов", "Запомни основные рецепты крафта", "Книга рецептов подскажет все комбинации"]
  },
  {
    title: "Добыча ресурсов",
    icon: "Mountain",
    emoji: "⛏️",
    description: "Копай, собирай и добывай материалы для развития",
    tips: ["Деревянная кирка → каменная → железная → алмазная", "Копай на уровне Y=11 для алмазов", "Факелы предотвращают спавн мобов"]
  },
  {
    title: "Строительство",
    icon: "Home",
    emoji: "🏠",
    description: "Создавай убежища, дома и грандиозные постройки",
    tips: ["Построй дом до первой ночи", "Используй разные материалы для красоты", "Планируй пространство заранее"]
  },
  {
    title: "Редстоун",
    icon: "Zap",
    emoji: "⚡",
    description: "Механизмы, автоматизация и логические схемы",
    tips: ["Редстоун проводит сигнал до 15 блоков", "Повторители усиливают сигнал", "Компараторы измеряют наполненность"]
  },
  {
    title: "Зачарования",
    icon: "Sparkles",
    emoji: "✨",
    description: "Улучшай инструменты и броню магическими свойствами",
    tips: ["Нужен стол зачарований и лазурит", "30 уровень для максимальных чар", "Наковальня объединяет зачарования"]
  },
  {
    title: "Фермерство",
    icon: "Wheat",
    emoji: "🌾",
    description: "Выращивай растения и разводи животных для еды",
    tips: ["Пшенице нужна вода рядом", "Животных привлекает их любимая еда", "Костная мука ускоряет рост"]
  }
];

const survivalGuide = [
  {
    title: "Первая ночь",
    steps: ["Срубить 10-15 блоков дерева", "Скрафтить верстак и инструменты", "Собрать немного еды (убить животных)", "Построить простое укрытие", "Создать факелы из угля или древесного угля"]
  },
  {
    title: "Первая неделя",
    steps: ["Найти железную руду и построить печь", "Создать железную броню и меч", "Углубить шахту до уровня алмазов", "Построить полноценный дом", "Создать ферму пшеницы"]
  },
  {
    title: "Развитие",
    steps: ["Найти алмазы и создать алмазное снаряжение", "Построить портал в Ад", "Собрать адский нарост для зелий", "Найти крепость Края", "Подготовиться к бою с Драконом"]
  }
];

const mobs = [
  {
    name: "Криптер",
    type: "Враждебный",
    emoji: "💥",
    danger: "Высокая",
    health: "20 HP",
    description: "Взрывается рядом с игроком, разрушая блоки"
  },
  {
    name: "Зомби",
    type: "Враждебный",
    emoji: "🧟",
    danger: "Средняя",
    health: "20 HP",
    description: "Медленный, но опасен группой"
  },
  {
    name: "Скелет",
    type: "Враждебный",
    emoji: "💀",
    danger: "Средняя",
    health: "20 HP",
    description: "Стреляет из лука на расстоянии"
  },
  {
    name: "Эндермен",
    type: "Нейтральный",
    emoji: "👁️",
    danger: "Высокая",
    health: "40 HP",
    description: "Атакует при взгляде в глаза"
  },
  {
    name: "Корова",
    type: "Дружелюбный",
    emoji: "🐄",
    danger: "Нет",
    health: "10 HP",
    description: "Дает молоко, кожу и мясо"
  },
  {
    name: "Свинья",
    type: "Дружелюбный",
    emoji: "🐷",
    danger: "Нет",
    health: "10 HP",
    description: "Источник свинины, можно оседлать"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-primary/20 to-transparent pb-12">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl text-primary minecraft-shadow">
              ⛏️ MINECRAFT
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полное руководство по игре: механики, гайды по выживанию и информация о мобах
            </p>
          </div>

          <Tabs defaultValue="mechanics" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 minecraft-shadow">
              <TabsTrigger value="mechanics" className="text-sm md:text-base">
                🔧 Механики
              </TabsTrigger>
              <TabsTrigger value="survival" className="text-sm md:text-base">
                🛡️ Выживание
              </TabsTrigger>
              <TabsTrigger value="mobs" className="text-sm md:text-base">
                👾 Мобы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mechanics" className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl text-center mb-8 text-primary">
                Основные механики игры
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mechanics.map((mechanic, index) => (
                  <Card 
                    key={index}
                    className="minecraft-card border-primary/30 minecraft-shadow bg-card p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">{mechanic.emoji}</div>
                      <h3 className="text-lg font-bold text-foreground">
                        {mechanic.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm">
                      {mechanic.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-primary mb-2">💡 Советы:</div>
                      {mechanic.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary">▪</span>
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="survival" className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl text-center mb-8 text-primary">
                Гайд по выживанию
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {survivalGuide.map((stage, index) => (
                  <Card 
                    key={index}
                    className="minecraft-card border-primary/30 minecraft-shadow bg-card p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="default" className="minecraft-shadow text-lg px-4 py-2">
                        Этап {index + 1}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground">
                        {stage.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {stage.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 minecraft-shadow">
                            <span className="text-primary font-bold text-sm">{i + 1}</span>
                          </div>
                          <p className="text-foreground pt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobs" className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl text-center mb-8 text-primary">
                Мобы Minecraft
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mobs.map((mob, index) => (
                  <Card 
                    key={index}
                    className="minecraft-card border-primary/30 minecraft-shadow bg-card p-6"
                  >
                    <div className="text-center mb-4">
                      <div className="text-5xl mb-3">{mob.emoji}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {mob.name}
                      </h3>
                      <div className="flex gap-2 justify-center">
                        <Badge 
                          variant={mob.type === "Враждебный" ? "destructive" : mob.type === "Нейтральный" ? "secondary" : "default"}
                          className="minecraft-shadow"
                        >
                          {mob.type}
                        </Badge>
                        {mob.danger !== "Нет" && (
                          <Badge variant="outline" className="minecraft-shadow">
                            ⚠️ {mob.danger}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm text-center mb-3">
                      {mob.description}
                    </p>
                    
                    <div className="text-center pt-3 border-t border-border">
                      <div className="inline-flex items-center gap-2 bg-muted/30 px-4 py-2 rounded minecraft-shadow">
                        <Icon name="Heart" size={16} className="text-destructive fill-destructive" />
                        <span className="font-semibold text-foreground">{mob.health}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <section className="bg-card/30 py-16 mt-12 border-t-4 border-primary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center mb-10 text-primary">
            🎮 Быстрые факты
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-card minecraft-card border-primary/30 minecraft-shadow">
              <div className="text-3xl mb-2">📦</div>
              <div className="text-2xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Блоков и предметов</div>
            </div>
            <div className="text-center p-6 bg-card minecraft-card border-primary/30 minecraft-shadow">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-2xl font-bold text-primary mb-1">∞</div>
              <div className="text-sm text-muted-foreground">Размер мира</div>
            </div>
            <div className="text-center p-6 bg-card minecraft-card border-primary/30 minecraft-shadow">
              <div className="text-3xl mb-2">👾</div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Видов мобов</div>
            </div>
            <div className="text-center p-6 bg-card minecraft-card border-primary/30 minecraft-shadow">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Достижений</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t-4 border-primary/30 mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Minecraft Wiki · Энциклопедия для игроков
          </p>
        </div>
      </footer>
    </div>
  );
}
