import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sunny/20 via-turquoise/10 to-coral/15">
      {/* Навигация */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-coral to-sunny rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-comic font-bold text-gray-800">Солнышко</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-coral transition-colors">Главная</a>
              <a href="#programs" className="text-gray-700 hover:text-coral transition-colors">Программы</a>
              <a href="#team" className="text-gray-700 hover:text-coral transition-colors">Команда</a>
              <a href="#schedule" className="text-gray-700 hover:text-coral transition-colors">Расписание</a>
              <a href="#contact" className="text-gray-700 hover:text-coral transition-colors">Контакты</a>
            </div>
            <Button className="bg-coral hover:bg-coral/90">Записаться</Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-comic font-bold text-gray-800 mb-6 leading-tight">
                Добро пожаловать в мир 
                <span className="text-coral"> приключений</span> и 
                <span className="text-turquoise"> знаний!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Развлекательный центр "Солнышко" - это место, где каждый день становится 
                незабываемым приключением для ваших детей. Обучение через игру, творчество и дружбу!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-lg px-8">
                  <Icon name="Calendar" className="mr-2" />
                  Записаться на занятие
                </Button>
                <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white text-lg px-8">
                  <Icon name="Play" className="mr-2" />
                  Виртуальная экскурсия
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/c97d7674-1f01-4d83-9a10-c442acff5c26.jpg" 
                  alt="Наш веселый талисман" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sunny rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-lavender rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comic font-bold text-center text-gray-800 mb-12">
            Почему родители выбирают нас? 🌟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Users",
                title: "Опытные педагоги",
                description: "Квалифицированные специалисты с многолетним опытом работы с детьми",
                color: "coral"
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Современное оборудование и соблюдение всех норм безопасности",
                color: "turquoise"
              },
              {
                icon: "Heart",
                title: "Индивидуальный подход",
                description: "Учитываем особенности и потребности каждого ребенка",
                color: "sunny"
              },
              {
                icon: "Trophy",
                title: "Результативность",
                description: "Видимый прогресс в развитии и обучении вашего малыша",
                color: "lavender"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`} 
                       style={{ backgroundColor: `var(--${item.color}, #4ECDC4)` }}>
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-comic text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Программы */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comic font-bold text-center text-gray-800 mb-12">
            Наши программы и направления 🎨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Раннее развитие",
                age: "1-3 года",
                description: "Развиваем моторику, речь и социальные навыки через игры и творчество",
                color: "bg-coral/10 border-coral",
                icon: "Baby"
              },
              {
                title: "Подготовка к школе",
                age: "4-6 лет", 
                description: "Математика, чтение, письмо в игровой форме. Психологическая готовность к школе",
                color: "bg-turquoise/10 border-turquoise",
                icon: "BookOpen"
              },
              {
                title: "Творческая мастерская",
                age: "3-8 лет",
                description: "Рисование, лепка, аппликация, конструирование. Развиваем креативность",
                color: "bg-sunny/10 border-sunny",
                icon: "Palette"
              },
              {
                title: "Английский язык",
                age: "3-10 лет",
                description: "Изучение английского через песни, игры и интерактивные занятия",
                color: "bg-lavender/10 border-purple-400",
                icon: "Globe"
              },
              {
                title: "Музыка и танцы",
                age: "2-8 лет",
                description: "Развитие чувства ритма, музыкального слуха и пластики движений",
                color: "bg-mint/10 border-green-400",
                icon: "Music"
              },
              {
                title: "День рождения",
                age: "любой возраст",
                description: "Организация незабываемых праздников с аниматорами и играми",
                color: "bg-peach/10 border-orange-400",
                icon: "Gift"
              }
            ].map((program, index) => (
              <Card key={index} className={`border-2 ${program.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon name={program.icon as any} size={28} className="text-gray-600" />
                    <Badge variant="secondary" className="font-comic">{program.age}</Badge>
                  </div>
                  <CardTitle className="font-comic text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section id="team" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comic font-bold text-center text-gray-800 mb-12">
            Наша дружная команда 👥
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Руководитель центра",
                experience: "15 лет опыта",
                specialization: "Детская психология"
              },
              {
                name: "Мария Иванова", 
                role: "Педагог раннего развития",
                experience: "8 лет опыта",
                specialization: "Монтессори-педагогика"
              },
              {
                name: "Елена Сидорова",
                role: "Преподаватель английского",
                experience: "10 лет опыта", 
                specialization: "Игровые методики"
              },
              {
                name: "Дмитрий Козлов",
                role: "Аниматор и ведущий",
                experience: "5 лет опыта",
                specialization: "Праздничные программы"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-none shadow-lg bg-white/80">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-coral to-turquoise rounded-full flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="font-comic text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-coral font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-turquoise font-medium">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section id="schedule" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comic font-bold text-center text-gray-800 mb-12">
            Расписание занятий и мероприятий 📅
          </h2>
          <Tabs defaultValue="weekdays" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="weekdays" className="font-comic text-lg">Будние дни</TabsTrigger>
              <TabsTrigger value="weekends" className="font-comic text-lg">Выходные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekdays">
              <div className="grid gap-4">
                {[
                  { time: "9:00 - 10:00", activity: "Раннее развитие (1-3 года)", room: "Комната 1" },
                  { time: "10:30 - 11:30", activity: "Подготовка к школе (4-6 лет)", room: "Комната 2" },
                  { time: "12:00 - 13:00", activity: "Творческая мастерская (3-8 лет)", room: "Арт-студия" },
                  { time: "15:00 - 16:00", activity: "Английский язык (3-6 лет)", room: "Комната 1" },
                  { time: "16:30 - 17:30", activity: "Музыка и танцы (4-8 лет)", room: "Зал" },
                  { time: "18:00 - 19:00", activity: "Подготовка к школе (5-7 лет)", room: "Комната 2" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border-l-4 border-coral">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-turquoise/10 text-turquoise border-turquoise font-comic">
                        {item.time}
                      </Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.activity}</h4>
                        <p className="text-sm text-gray-600">{item.room}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Записаться</Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="weekends">
              <div className="grid gap-4">
                {[
                  { time: "10:00 - 11:30", activity: "Семейные мастер-классы", room: "Арт-студия" },
                  { time: "12:00 - 14:00", activity: "Детские дни рождения", room: "Праздничный зал" },
                  { time: "15:00 - 16:00", activity: "Музыкальные занятия", room: "Зал" },
                  { time: "16:30 - 17:30", activity: "Открытые уроки для родителей", room: "Комната 1" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border-l-4 border-sunny">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-lavender/10 text-purple-600 border-purple-300 font-comic">
                        {item.time}
                      </Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.activity}</h4>
                        <p className="text-sm text-gray-600">{item.room}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Узнать больше</Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Фото галерея */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comic font-bold text-center text-gray-800 mb-12">
            Фото и видео с занятий 📸
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/img/72c363f4-1e35-4bfb-a31a-5924176aec60.jpg" 
                alt="Дети на занятиях" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-comic text-lg">Творческие занятия</h4>
                </div>
              </div>
            </div>
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-coral/20 to-turquoise/20">
                <div className="w-full h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Image" size={48} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-comic">Фото занятий #{i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты и форма записи */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-comic font-bold text-center text-gray-800 mb-12">
            Контакты и запись на занятия 📞
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div>
              <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-comic text-2xl text-center">
                    Как нас найти? 🗺️
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Адрес</h4>
                      <p className="text-gray-600">ул. Солнечная, 15, г. Москва, 123456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Телефон</h4>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-sunny rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@solnyshko-center.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-lavender rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Режим работы</h4>
                      <p className="text-gray-600">
                        Пн-Пт: 9:00 - 19:00<br/>
                        Сб-Вс: 10:00 - 16:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Форма записи */}
            <div>
              <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-comic text-2xl text-center">
                    Записаться на занятие ✍️
                  </CardTitle>
                  <CardDescription className="text-center">
                    Оставьте заявку и мы свяжемся с вами в течение 15 минут!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Имя родителя</label>
                      <Input placeholder="Ваше имя" className="mt-1" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" className="mt-1" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Имя ребенка</label>
                      <Input placeholder="Имя вашего малыша" className="mt-1" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Возраст ребенка</label>
                      <Input placeholder="Сколько лет?" className="mt-1" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Программа</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md mt-1">
                        <option>Раннее развитие (1-3 года)</option>
                        <option>Подготовка к школе (4-6 лет)</option>
                        <option>Творческая мастерская (3-8 лет)</option>
                        <option>Английский язык (3-10 лет)</option>
                        <option>Музыка и танцы (2-8 лет)</option>
                        <option>День рождения</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите о ваших пожеланиях или задайте вопрос" 
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-coral hover:bg-coral/90 text-lg py-6">
                      <Icon name="Send" className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-coral to-sunny rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={16} className="text-white" />
                </div>
                <h3 className="text-xl font-comic font-bold">Солнышко</h3>
              </div>
              <p className="text-gray-400">
                Развлекательный центр для детей. 
                Растем и развиваемся вместе!
              </p>
            </div>
            
            <div>
              <h4 className="font-comic text-lg mb-4">Программы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Раннее развитие</li>
                <li>Подготовка к школе</li>
                <li>Творчество</li>
                <li>Английский язык</li>
              </ul>
            </div>

            <div>
              <h4 className="font-comic text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@solnyshko-center.ru</li>
                <li>ул. Солнечная, 15</li>
              </ul>
            </div>

            <div>
              <h4 className="font-comic text-lg mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center cursor-pointer hover:bg-coral/80 transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-turquoise rounded-full flex items-center justify-center cursor-pointer hover:bg-turquoise/80 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 bg-sunny rounded-full flex items-center justify-center cursor-pointer hover:bg-sunny/80 transition-colors">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Детский центр "Солнышко". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index