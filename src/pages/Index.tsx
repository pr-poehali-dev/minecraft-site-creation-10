import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const servers = [
  {
    name: "Выживание",
    players: "142/200",
    status: "online",
    version: "1.20.1",
    description: "Классическое выживание с экономикой и донатом",
    ip: "survival.mc-server.ru"
  },
  {
    name: "Креатив",
    players: "67/100",
    status: "online",
    version: "1.20.1",
    description: "Строй что хочешь в креативном режиме",
    ip: "creative.mc-server.ru"
  },
  {
    name: "PvP Арена",
    players: "89/150",
    status: "online",
    version: "1.20.1",
    description: "Сражайся с игроками в различных режимах",
    ip: "pvp.mc-server.ru"
  }
];

const forumCategories = [
  {
    title: "Новости сервера",
    icon: "Newspaper",
    topics: 42,
    posts: 387,
    lastPost: "5 мин назад"
  },
  {
    title: "Помощь игрокам",
    icon: "HelpCircle",
    topics: 128,
    posts: 1543,
    lastPost: "12 мин назад"
  },
  {
    title: "Предложения",
    icon: "Lightbulb",
    topics: 89,
    posts: 421,
    lastPost: "1 час назад"
  },
  {
    title: "Торговля",
    icon: "ShoppingCart",
    topics: 234,
    posts: 2891,
    lastPost: "3 мин назад"
  },
  {
    title: "Показать постройку",
    icon: "Home",
    topics: 156,
    posts: 982,
    lastPost: "25 мин назад"
  },
  {
    title: "Жалобы",
    icon: "AlertTriangle",
    topics: 67,
    posts: 445,
    lastPost: "2 часа назад"
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<"servers" | "forum">("servers");

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-primary/20 to-transparent">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl text-primary minecraft-shadow animate-fade-in">
              ⛏️ MINECRAFT
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйся к нашему игровому сообществу! Выбери сервер или обсуди игру на форуме
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                variant={activeSection === "servers" ? "default" : "outline"}
                onClick={() => setActiveSection("servers")}
                className="minecraft-shadow text-lg px-8"
              >
                <Icon name="Server" className="mr-2" />
                Серверы
              </Button>
              <Button 
                size="lg" 
                variant={activeSection === "forum" ? "default" : "outline"}
                onClick={() => setActiveSection("forum")}
                className="minecraft-shadow text-lg px-8"
              >
                <Icon name="MessageSquare" className="mr-2" />
                Форум
              </Button>
            </div>
          </div>

          {activeSection === "servers" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl text-center mb-8 text-primary">
                🎮 Игровые серверы
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servers.map((server, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:scale-105 transition-transform border-4 border-primary/30 minecraft-shadow bg-card"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {server.name}
                        </h3>
                        <Badge variant="secondary" className="minecraft-shadow">
                          {server.version}
                        </Badge>
                      </div>
                      <Badge 
                        variant="default" 
                        className="bg-primary text-primary-foreground minecraft-shadow"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                        {server.status}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {server.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Icon name="Users" size={16} className="mr-2 text-primary" />
                        <span className="text-foreground font-semibold">{server.players}</span>
                        <span className="text-muted-foreground ml-1">игроков</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Icon name="Globe" size={16} className="mr-2 text-primary" />
                        <span className="text-muted-foreground font-mono">{server.ip}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full minecraft-shadow" variant="default">
                      <Icon name="Play" className="mr-2" size={16} />
                      Подключиться
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "forum" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl text-center mb-8 text-primary">
                💬 Форум сообщества
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {forumCategories.map((category, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:scale-102 transition-all border-4 border-primary/30 minecraft-shadow bg-card cursor-pointer hover:border-primary/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center minecraft-shadow">
                        <Icon name={category.icon as any} size={32} className="text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {category.title}
                        </h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>📝 {category.topics} тем</span>
                          <span>💬 {category.posts} сообщений</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge variant="secondary" className="minecraft-shadow">
                          {category.lastPost}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" className="minecraft-shadow">
                  <Icon name="Plus" className="mr-2" />
                  Создать новую тему
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-card/50 border-t-4 border-primary/30 mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Minecraft Community · Создано с ❤️ для игроков
          </p>
        </div>
      </footer>
    </div>
  );
}
