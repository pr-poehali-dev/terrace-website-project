import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [calcArea, setCalcArea] = useState([30]);
  const [calcMaterial, setCalcMaterial] = useState('composite');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const materialPrices = {
    composite: 3500,
    wood: 2800,
    concrete: 2200
  };

  const calculatePrice = () => {
    const basePrice = materialPrices[calcMaterial as keyof typeof materialPrices];
    return (calcArea[0] * basePrice).toLocaleString('ru-RU');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ТеррасПро
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('calculator')} className="hover:text-primary transition-colors">Калькулятор</button>
              <Button onClick={() => scrollToSection('contacts')}>Контакты</Button>
            </div>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold">
                Строим террасы с 2015 года
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Превратим ваш двор в{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  место мечты
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Создаём современные террасы для частных домов. Качественные материалы, надёжный монтаж и гарантия 10 лет.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" onClick={() => scrollToSection('calculator')} className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="text-lg px-8">
                  <Icon name="Image" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Терраса" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаём пространства, где хочется проводить время
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', title: '500+ проектов', desc: 'Реализованных террас по всей России' },
              { icon: 'Users', title: '50+ специалистов', desc: 'Опытных мастеров в команде' },
              { icon: 'ShieldCheck', title: '10 лет гарантии', desc: 'На все работы и материалы' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-xl animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground">Наши лучшие проекты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer" style={{animationDelay: `${item * 0.05}s`}}>
                <img 
                  src="/placeholder.svg" 
                  alt={`Проект ${item}`} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Терраса {item}</h3>
                    <p className="text-sm">Площадь: {30 + item * 5} м²</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги и цены</h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Композитная доска', price: '3 500', icon: 'Sparkles', features: ['Срок службы 25+ лет', 'Не требует покраски', 'Устойчива к влаге', 'Широкий выбор цветов'] },
              { title: 'Натуральное дерево', price: '2 800', icon: 'Trees', features: ['Экологичность', 'Классический вид', 'Тёплый на ощупь', 'Лиственница/сосна'] },
              { title: 'Бетонное основание', price: '2 200', icon: 'Construction', features: ['Максимальная прочность', 'Долговечность', 'Под любое покрытие', 'Быстрый монтаж'] }
            ].map((service, idx) => (
              <Card key={idx} className={`relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-2xl animate-slide-up ${idx === 0 ? 'md:scale-105 border-primary' : ''}`} style={{animationDelay: `${idx * 0.1}s`}}>
                {idx === 0 && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Популярно
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <div className="text-4xl font-bold mt-2">
                    {service.price} <span className="text-lg font-normal text-muted-foreground">₽/м²</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={idx === 0 ? 'default' : 'outline'} onClick={() => scrollToSection('contacts')}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-2 shadow-2xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Calculator" size={32} className="text-white" />
              </div>
              <CardTitle className="text-3xl">Калькулятор стоимости</CardTitle>
              <CardDescription className="text-base">Рассчитайте примерную стоимость вашей террасы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Площадь террасы: {calcArea[0]} м²</Label>
                <Slider 
                  value={calcArea} 
                  onValueChange={setCalcArea}
                  min={10}
                  max={100}
                  step={5}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>10 м²</span>
                  <span>100 м²</span>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Материал покрытия</Label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'composite', label: 'Композит', icon: 'Sparkles' },
                    { value: 'wood', label: 'Дерево', icon: 'Trees' },
                    { value: 'concrete', label: 'Бетон', icon: 'Construction' }
                  ].map((mat) => (
                    <button
                      key={mat.value}
                      onClick={() => setCalcMaterial(mat.value)}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        calcMaterial === mat.value 
                          ? 'border-primary bg-primary/5 shadow-lg' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Icon name={mat.icon as any} size={24} className={calcMaterial === mat.value ? 'text-primary' : ''} />
                      <span className="font-semibold text-sm">{mat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white text-center space-y-2">
                <div className="text-lg font-semibold">Примерная стоимость</div>
                <div className="text-5xl font-bold">{calculatePrice()} ₽</div>
                <div className="text-sm opacity-90">Точная цена после замера</div>
              </div>

              <Button size="lg" className="w-full text-lg" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать замер
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79991234567" className="text-2xl font-bold hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@terraspro.ru" className="text-2xl font-bold hover:text-primary transition-colors">
                    info@terraspro.ru
                  </a>
                  <p className="text-muted-foreground mt-2">Ответим в течение часа</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">г. Москва, ул. Строительная, 15</p>
                  <p className="text-muted-foreground mt-2">Офис и выставка образцов</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription className="text-base">Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">ТеррасПро</span>
              </div>
              <p className="text-background/80">
                Строительство и монтаж террас для частных домов с 2015 года.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@terraspro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Строительная, 15
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            © 2024 ТеррасПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
