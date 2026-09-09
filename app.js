
const equipment = [
 {cat:"poultry",icon:"🐔",en:["Broiler House Systems","Housing, feeding, drinking, climate and automation solutions."],ru:["Системы для бройлерных птичников","Содержание, кормление, поение, климат и автоматизация."],uz:["Broyler parrandaxona tizimlari","Saqlash, oziqlantirish, sug‘orish, iqlim va avtomatlashtirish yechimlari."]},
 {cat:"poultry",icon:"🥚",en:["Layer Cage Systems","Layer housing, egg collection, manure removal and climate systems."],ru:["Клеточные системы для несушек","Содержание несушек, сбор яиц, удаление помёта и климатические системы."],uz:["Tuxumchi tovuqlar uchun qafas tizimlari","Tuxumchi tovuqlarni saqlash, tuxum yig‘ish, go‘ng chiqarish va iqlim tizimlari."]},
 {cat:"poultry",icon:"🐣",en:["Hatchery Equipment","Incubators, hatchers and chick handling systems."],ru:["Инкубационное оборудование","Инкубаторы, выводные шкафы и системы обработки цыплят."],uz:["Inkubatsiya uskunalari","Inkubatorlar, jo‘ja chiqarish va jo‘jalarni qayta ishlash tizimlari."]},
 {cat:"processing",icon:"🏭",en:["Poultry Processing Lines","Slaughter, chilling, cutting, packing and cold-chain lines."],ru:["Линии переработки птицы","Убой, охлаждение, разделка, упаковка и холодовая цепь."],uz:["Parrandani qayta ishlash liniyalari","So‘yish, sovitish, bo‘laklash, qadoqlash va sovuq zanjir liniyalari."]},
 {cat:"agriculture",icon:"🚜",en:["Tractors & Implements","Tractors, tillage, seeding, spraying and harvesting equipment."],ru:["Тракторы и навесное оборудование","Тракторы, обработка почвы, посев, опрыскивание и уборочная техника."],uz:["Traktorlar va agregatlar","Tuproqqa ishlov berish, ekish, purkash va yig‘im-terim texnikasi."]},
 {cat:"agriculture",icon:"💧",en:["Irrigation Systems","Drip, sprinkler, pumps, filtration and fertigation systems."],ru:["Системы орошения","Капельное и дождевальное орошение, насосы, фильтрация и фертигация."],uz:["Sug‘orish tizimlari","Tomchilatib va yomg‘irlatib sug‘orish, nasoslar, filtrlash va fertigasiyа."]},
 {cat:"processing",icon:"🌾",en:["Feed Mill Equipment","Grinding, mixing, pelleting, conveying and storage systems."],ru:["Оборудование комбикормовых заводов","Измельчение, смешивание, гранулирование, транспортировка и хранение."],uz:["Yem zavodi uskunalari","Maydalash, aralashtirish, granulalash, tashish va saqlash tizimlari."]},
 {cat:"processing",icon:"🥛",en:["Dairy Processing Lines","Milk reception, pasteurization, fermentation, filling and CIP."],ru:["Линии переработки молока","Приём молока, пастеризация, ферментация, розлив и CIP-мойка."],uz:["Sutni qayta ishlash liniyalari","Sut qabul qilish, pasterizatsiya, fermentatsiya, quyish va CIP yuvish."]},
 {cat:"industrial",icon:"❄️",en:["Cold Storage Solutions","Cold rooms, refrigeration units, insulated panels and controls."],ru:["Холодильные решения","Холодильные камеры, агрегаты, сэндвич-панели и системы управления."],uz:["Sovuq saqlash yechimlari","Sovutish kameralari, agregatlar, izolyatsion panellar va boshqaruv tizimlari."]},
 {cat:"industrial",icon:"⚡",en:["Generators & Power Systems","Diesel generators, backup power and industrial energy systems."],ru:["Генераторы и энергосистемы","Дизельные генераторы, резервное питание и промышленные энергосистемы."],uz:["Generatorlar va energiya tizimlari","Dizel generatorlar, zaxira quvvati va sanoat energiya tizimlari."]},
 {cat:"energy",icon:"☀️",en:["Solar Energy Systems","Solar modules, inverters, storage and project components."],ru:["Солнечные энергосистемы","Солнечные модули, инверторы, накопители и компоненты проектов."],uz:["Quyosh energiyasi tizimlari","Quyosh modullari, invertorlar, akkumulyatorlar va loyiha komponentlari."]},
 {cat:"industrial",icon:"💧",en:["Water Treatment","Filtration, RO, treatment and industrial water systems."],ru:["Водоочистка","Фильтрация, обратный осмос и промышленные системы водоподготовки."],uz:["Suvni tozalash","Filtrlash, teskari osmos va sanoat suv tayyorlash tizimlari."]}
];
const translations = {"en": {}, "ru": {"nav_industries": "Отрасли", "nav_poultry": "Птицеводство", "nav_equipment": "Оборудование", "nav_finance": "Финансирование", "nav_turnkey": "Проекты под ключ", "nav_partners": "Партнёры", "nav_contact": "Контакты", "request_quote": "Запросить предложение", "hero_eyebrow": "УЗБЕКИСТАН — ГЛОБАЛЬНЫЕ ВОЗМОЖНОСТИ", "hero_title": "МИРОВОЕ ОБОРУДОВАНИЕ.<br>УМНОЕ ФИНАНСИРОВАНИЕ.<br><em>ЛОКАЛЬНЫЙ УСПЕХ.</em>", "hero_subtitle": "Из Бухары в мир — и из мира в Узбекистан.", "hero_text": "Мы соединяем компании Узбекистана с мировыми производителями оборудования, технологиями, вариантами финансирования, логистикой и проектной поддержкой.", "request_equipment": "Запросить оборудование", "get_financing": "Получить финансирование", "become_partner": "Стать партнёром", "svc_source": "Глобальный поиск", "svc_source_s": "Производители по всему миру", "svc_supply": "Поставка оборудования", "svc_supply_s": "Новое и отобранное б/у", "svc_fin": "Лизинг и кредит", "svc_fin_s": "Структурированные варианты", "svc_log": "Логистика и доставка", "svc_log_s": "В Узбекистан", "svc_support": "Поддержка проекта", "svc_support_s": "От заявки до запуска", "industries_kicker": "НАШИ ОТРАСЛИ", "industries_title": "Оборудование и технологии для реальных бизнес-проектов", "industries_desc": "TWB подбирает оборудование для сельского хозяйства, животноводства, пищевого производства, инфраструктуры и промышленности.", "ind_poultry": "Птицеводство и животноводство", "ind_poultry_desc": "Бройлер · Несушка · Инкубатор · Молочное скотоводство · КРС · Овцы · Козы", "ind_agri": "Сельское хозяйство", "ind_agri_desc": "Тракторы · Орошение · Теплицы · Уборка · Хранение · Сельхозтехника", "ind_food": "Пищевая переработка", "ind_food_desc": "Мясо · Молоко · Напитки · Упаковка · Холодовая цепь · HoReCa", "ind_industry": "Промышленное оборудование", "ind_industry_desc": "Генераторы · Насосы · Компрессоры · Строительство · ВИЭ · Производственные линии", "ind_energy": "Энергетика и коммунальные системы", "ind_energy_desc": "Солнечная энергия · Резервное питание · Водоочистка · Насосы · Охлаждение", "ind_cold": "Холодовая цепь и склады", "ind_cold_desc": "Холодильные камеры · Склады · Холодильное оборудование · Погрузка · Упаковка", "poultry_kicker": "РЕШЕНИЯ ДЛЯ ПТИЦЕВОДСТВА", "poultry_title": "От инкубатора до переработки — единая цепочка проекта", "poultry_desc": "Решения для бройлеров, несушек, инкубаторов, кормопроизводства, климата, сортировки яиц и переработки птицы.", "p1": "Инкубатор", "p1s": "Инкубаторы и обработка цыплят", "p2": "Содержание", "p2s": "Системы для бройлеров и несушек", "p3": "Кормление", "p3s": "Кормление и поение", "p4": "Климат", "p4s": "Вентиляция и охлаждение", "p5": "Яйцо", "p5s": "Сортировка и упаковка", "p6": "Переработка", "p6s": "Убой и холодовая цепь", "poultry_project": "Нужен проект птицефабрики?", "poultry_project_desc": "Укажите мощность, технологию и потребность в финансировании.", "request_poultry": "Запросить проект", "catalog_kicker": "КАТАЛОГ ОБОРУДОВАНИЯ", "catalog_title": "Категории решений TWB", "catalog_desc": "Каталог работает как инструмент запроса: TWB может искать конкретные бренды или эквивалентных производителей по всему миру.", "search_placeholder": "Поиск оборудования...", "all_categories": "Все категории", "cat_poultry": "Птицеводство", "cat_agri": "Сельское хозяйство", "cat_processing": "Переработка", "cat_industrial": "Промышленность", "cat_energy": "Энергетика", "sourcing_kicker": "ГЛОБАЛЬНЫЙ ПОИСК", "sourcing_title": "Любое оборудование. Любой производитель. Любая страна.", "sourcing_desc": "TWB может найти поставщиков, сравнить технические и коммерческие предложения, координировать переговоры и организовать доставку в Узбекистан.", "world_card": "От поиска производителя до сравнения предложений и координации доставки", "finance_kicker": "ФИНАНСИРОВАНИЕ И ЛИЗИНГ", "finance_title": "Оборудование без полной предоплаты", "finance_desc": "TWB помогает изучать коммерческие схемы с производителями, банками, лизинговыми компаниями и экспортно-финансовыми партнёрами.", "f1": "Лизинг", "f1d": "Лизинговые схемы через соответствующих провайдеров.", "f2": "Кредит поставщика", "f2d": "Частичная предоплата и отсрочка платежа.", "f3": "Экспортное финансирование", "f3d": "Экспортные и ECA-инструменты, где доступны.", "f4": "Банковское финансирование", "f4d": "Помощь в структурировании и документации.", "f5": "Отсрочка платежа", "f5d": "Гибкие условия поставщика при одобрении.", "finance_apply": "Нужно финансирование?", "finance_apply_desc": "Укажите стоимость оборудования, доступный аванс и желаемый срок.", "request_financing": "Запросить анализ финансирования", "finance_legal": "Финансирование и лизинг предоставляются только после одобрения соответствующим банком, лизинговой компанией, производителем или финансовой организацией. TWB выступает коммерческим посредником и координатором проекта, если иное не согласовано.", "turnkey_kicker": "ПРОЕКТЫ ПОД КЛЮЧ", "turnkey_title": "От идеи до работающего бизнеса", "discuss_project": "Обсудить проект", "t1": "Запрос проекта", "t2": "Поиск поставщиков", "t3": "Техническое сравнение", "t4": "Финансовая структура", "t5": "Контракт и логистика", "t6": "Монтаж и поддержка", "partners_kicker": "СТАТЬ ПАРТНЁРОМ TWB", "partners_title": "Локальный B2B-мост на рынок Узбекистана", "partners_desc": "Приглашаем международных производителей и технологические компании изучать коммерческие возможности в Узбекистане.", "partner_market": "Выход на рынок", "partner_b2b": "B2B-развитие", "partner_rep": "Локальное представительство", "partner_coord": "Координация проектов", "partner_logistics": "Логистическая поддержка", "rfq_kicker": "ЗАПРОС КОММЕРЧЕСКОГО ПРЕДЛОЖЕНИЯ", "rfq_title": "Расскажите, что вам нужно", "rfq_desc": "Отправьте основные технические и коммерческие требования. TWB использует их для поиска подходящих производителей и предложений.", "form_company": "Имя / Компания", "form_country": "Страна", "form_contact": "Email / WhatsApp", "form_equipment": "Необходимое оборудование", "form_qty": "Количество", "form_budget": "Бюджет", "form_finance": "Покупка / вариант финансирования", "form_upload": "Техническое задание / файл", "opt_purchase": "Покупка", "opt_leasing": "Лизинг", "opt_supplier": "Кредит поставщика", "opt_bank": "Банковское финансирование", "opt_help": "Помогите выбрать", "send_request": "Отправить запрос", "footer_business": "БИЗНЕС", "footer_contact": "КОНТАКТЫ", "footer_global": "Узбекистан — глобальные возможности"}, "uz": {"nav_industries": "Yo‘nalishlar", "nav_poultry": "Parrandachilik", "nav_equipment": "Uskunalar", "nav_finance": "Moliyalashtirish", "nav_turnkey": "Tayyor loyihalar", "nav_partners": "Hamkorlar", "nav_contact": "Aloqa", "request_quote": "Taklif so‘rash", "hero_eyebrow": "O‘ZBEKISTON — GLOBAL IMKONIYATLAR", "hero_title": "GLOBAL USKUNALAR.<br>AQILLI MOLIYALASHTIRISH.<br><em>MAHALLIY MUVAFFAQIYAT.</em>", "hero_subtitle": "Buxorodan dunyoga — dunyodan O‘zbekistonga.", "hero_text": "Biz O‘zbekistondagi kompaniyalarni xalqaro ishlab chiqaruvchilar, uskunalar, texnologiyalar, moliyalashtirish, logistika va loyiha ko‘magi bilan bog‘laymiz.", "request_equipment": "Uskuna so‘rash", "get_financing": "Moliyalashtirish", "become_partner": "Hamkor bo‘lish", "industries_kicker": "BIZNING YO‘NALISHLAR", "industries_title": "Real biznes loyihalari uchun uskunalar va texnologiyalar", "industries_desc": "TWB qishloq xo‘jaligi, chorvachilik, oziq-ovqat, infratuzilma va sanoat loyihalari uchun uskunalar topadi.", "poultry_kicker": "PARRANDACHILIK YECHIMLARI", "poultry_title": "Inkubatordan qayta ishlashgacha — yagona loyiha zanjiri", "poultry_desc": "Broyler, tuxumchi tovuq, inkubatsiya, yem, iqlim nazorati, tuxum saralash va qayta ishlash yechimlari.", "catalog_kicker": "USKUNALAR KATALOGI", "catalog_title": "TWB yechimlar kategoriyalari", "catalog_desc": "Katalog so‘rov asosida ishlaydi. TWB aniq brend yoki muqobil ishlab chiqaruvchini dunyo bo‘ylab qidirishi mumkin.", "search_placeholder": "Uskuna qidirish...", "all_categories": "Barcha kategoriyalar", "sourcing_kicker": "GLOBAL SOURCING", "sourcing_title": "Istalgan uskuna. Istalgan ishlab chiqaruvchi. Istalgan davlat.", "sourcing_desc": "TWB yetkazib beruvchilarni topadi, texnik va tijoriy takliflarni taqqoslaydi, muzokara va O‘zbekistonga yetkazishni muvofiqlashtiradi.", "finance_kicker": "MOLIYALASHTIRISH VA LIZING", "finance_title": "To‘liq oldindan to‘lovsiz uskuna", "finance_desc": "TWB ishlab chiqaruvchilar, banklar, lizing kompaniyalari va eksport moliyalashtirish hamkorlari bilan tijoriy variantlarni o‘rganishga yordam beradi.", "finance_apply": "Moliyalashtirish kerakmi?", "finance_apply_desc": "Uskuna qiymati, mavjud boshlang‘ich to‘lov va kerakli muddatni ko‘rsating.", "request_financing": "Moliyalashtirish tahlili", "finance_legal": "Moliyalashtirish va lizing tegishli bank, lizing kompaniyasi, ishlab chiqaruvchi yoki moliyaviy tashkilot tasdig‘iga bog‘liq. TWB, alohida kelishilmagan bo‘lsa, tijoriy koordinator sifatida ishlaydi.", "turnkey_kicker": "TAYYOR LOYIHALAR", "turnkey_title": "G‘oyadan ishlaydigan biznesgacha", "discuss_project": "Loyihani muhokama qilish", "partners_kicker": "TWB HAMKORI BO‘LING", "partners_title": "O‘zbekiston bozoriga mahalliy B2B ko‘prik", "partners_desc": "Xalqaro ishlab chiqaruvchilar va texnologik kompaniyalarni O‘zbekistondagi tijoriy imkoniyatlarni o‘rganishga taklif qilamiz.", "rfq_kicker": "TIJORIY TAKLIF SO‘ROVI", "rfq_title": "Sizga nima kerakligini yozing", "rfq_desc": "Asosiy texnik va tijoriy talablarni yuboring. TWB mos ishlab chiqaruvchilar va takliflarni topish uchun foydalanadi.", "form_company": "Ism / Kompaniya", "form_country": "Davlat", "form_contact": "Email / WhatsApp", "form_equipment": "Kerakli uskuna", "form_qty": "Miqdor", "form_budget": "Byudjet", "form_finance": "Xarid / moliyalashtirish turi", "form_upload": "Texnik topshiriq / fayl", "opt_purchase": "Xarid", "opt_leasing": "Lizing", "opt_supplier": "Yetkazib beruvchi krediti", "opt_bank": "Bank moliyalashtirishi", "opt_help": "Tanlashga yordam bering", "send_request": "So‘rov yuborish", "footer_business": "BIZNES", "footer_contact": "ALOQA", "footer_global": "O‘zbekiston — global imkoniyatlar"}};

const extraTranslations = {
  ru:{
    hero_values:"ЛЮДИ<br>ПАРТНЁРСТВО<br>ПРОГРЕСС",
    hero_script:"Из Бухары<br><span>к более светлому будущему</span>",
    eq_kicker:"ГЛОБАЛЬНЫЙ ПОИСК ОБОРУДОВАНИЯ",
    eq_title:"Оборудование и технологии<br>для реальных бизнес-проектов",
    eq_desc:"Надёжное оборудование и современные технологии для сельского хозяйства, птицеводства, пищевой переработки и промышленных проектов — от квалифицированных производителей со всего мира.",
    eq_explore:"Смотреть оборудование",
    eq_source_kicker:"ГЛОБАЛЬНЫЙ ПОИСК",
    eq_find:"Найдём правильное решение",
    eq_find_desc:"Укажите оборудование, мощность, бюджет и предпочтительную схему финансирования. TWB координирует поиск поставщиков, сравнение предложений и планирование поставки.",
    eq_quote:"Запросить предложение"
  },
  uz:{
    hero_values:"INSONLAR<br>HAMKORLIK<br>TARAQQIYOT",
    hero_script:"Buxorodan<br><span>yorqin kelajak sari</span>",
    eq_kicker:"GLOBAL USKUNA QIDIRUVI",
    eq_title:"Real biznes loyihalari uchun<br>uskunalar va texnologiyalar",
    eq_desc:"Qishloq xo‘jaligi, parrandachilik, oziq-ovqatni qayta ishlash va sanoat loyihalari uchun ishonchli uskunalar va zamonaviy texnologiyalar — dunyo bo‘ylab malakali ishlab chiqaruvchilardan.",
    eq_explore:"Uskunalarni ko‘rish",
    eq_source_kicker:"GLOBAL SOURCING",
    eq_find:"To‘g‘ri yechimni topamiz",
    eq_find_desc:"Uskuna, quvvat, byudjet va moliyalashtirish turini ko‘rsating. TWB yetkazib beruvchilarni qidirish, takliflarni solishtirish va yetkazib berishni rejalashtirishni muvofiqlashtiradi.",
    eq_quote:"Taklif so‘rash",
    svc_source:"Global qidiruv",svc_source_s:"Dunyo bo‘ylab ishlab chiqaruvchilar",
    svc_supply:"Uskuna yetkazib berish",svc_supply_s:"Yangi va saralangan ishlatilgan uskunalar",
    svc_fin:"Lizing va kredit",svc_fin_s:"Tuzilgan moliyaviy variantlar",
    svc_log:"Logistika va yetkazib berish",svc_log_s:"O‘zbekistonga",
    svc_support:"Loyiha ko‘magi",svc_support_s:"So‘rovdan ishga tushirishgacha",
    ind_poultry:"Parrandachilik va chorvachilik",ind_poultry_desc:"Broyler · Tuxumchi · Inkubator · Sut chorvachiligi · Qoramol · Qo‘y · Echki",
    ind_agri:"Qishloq xo‘jaligi",ind_agri_desc:"Traktorlar · Sug‘orish · Issiqxonalar · Yig‘im-terim · Saqlash · Ferma uskunalari",
    ind_food:"Oziq-ovqatni qayta ishlash",ind_food_desc:"Go‘sht · Sut · Ichimliklar · Qadoqlash · Sovuq zanjir · HoReCa",
    ind_industry:"Sanoat uskunalari",ind_industry_desc:"Generatorlar · Nasoslar · Kompressorlar · Qurilish · Qayta tiklanuvchi energiya · Ishlab chiqarish liniyalari",
    p1:"Inkubatsiya",p1s:"Inkubatorlar va jo‘jalarni qayta ishlash",
    p2:"Saqlash",p2s:"Broyler va tuxumchi tizimlari",
    p3:"Oziqlantirish",p3s:"Oziqlantirish va sug‘orish",
    p4:"Iqlim",p4s:"Ventilyatsiya va sovitish",
    p5:"Tuxum",p5s:"Saralash va qadoqlash",
    p6:"Qayta ishlash",p6s:"So‘yish va sovuq zanjir",
    poultry_project:"Parrandachilik loyihasi kerakmi?",poultry_project_desc:"Quvvat, texnologiya va moliyalashtirish ehtiyojini ko‘rsating.",request_poultry:"Loyiha so‘rash",
    cat_poultry:"Parrandachilik",cat_agri:"Qishloq xo‘jaligi",cat_processing:"Qayta ishlash",cat_industrial:"Sanoat",cat_energy:"Energetika",
    world_card:"Ishlab chiqaruvchini topishdan takliflarni solishtirish va yetkazib berishni muvofiqlashtirishgacha",
    f1:"Lizing",f1d:"Tegishli provayderlar orqali lizing sxemalari.",
    f2:"Yetkazib beruvchi krediti",f2d:"Qisman oldindan to‘lov va kechiktirilgan to‘lov.",
    f3:"Eksport moliyalashtirishi",f3d:"Mavjud bo‘lsa eksport va ECA vositalari.",
    f4:"Bank moliyalashtirishi",f4d:"Tuzilma va hujjatlarni tayyorlashda yordam.",
    f5:"Kechiktirilgan to‘lov",f5d:"Tasdiqlansa, yetkazib beruvchining moslashuvchan shartlari.",
    t1:"Loyiha so‘rovi",t2:"Yetkazib beruvchi qidiruvi",t3:"Texnik taqqoslash",t4:"Moliyaviy tuzilma",t5:"Shartnoma va logistika",t6:"O‘rnatish va qo‘llab-quvvatlash",
    partner_market:"Bozorga kirish",partner_b2b:"B2B rivojlantirish",partner_rep:"Mahalliy vakillik",partner_coord:"Loyihalarni muvofiqlashtirish",partner_logistics:"Logistika ko‘magi"
  }
};
Object.keys(extraTranslations).forEach(lang=>Object.assign(translations[lang],extraTranslations[lang]));

const englishOriginal = {};
document.querySelectorAll("[data-i18n]").forEach(el=>englishOriginal[el.dataset.i18n]=el.innerHTML);
const englishPlaceholders = {};
document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>englishPlaceholders[el.dataset.i18nPlaceholder]=el.placeholder);
translations.en = Object.assign({}, englishOriginal);

let currentLang="en";

function renderEquipment(){
  const q=(document.getElementById("searchEquipment").value||"").toLowerCase();
  const cat=document.getElementById("categoryFilter").value;
  const lang=currentLang || "en";
  const list=equipment.filter(x=>{
    const txt=x[lang]||x.en;
    return (cat==="all"||x.cat===cat) && (txt[0].toLowerCase().includes(q)||txt[1].toLowerCase().includes(q));
  });
  const requestLabel = lang==="ru" ? "Запросить это оборудование →" : lang==="uz" ? "Bu uskunani so‘rash →" : "Request this equipment →";
  document.getElementById("equipmentGrid").innerHTML=list.map(x=>{
    const txt=x[lang]||x.en;
    return `<article class="equipment-card">
      <div class="equipment-icon">${x.icon}</div>
      <h3>${txt[0]}</h3>
      <p>${txt[1]}</p>
      <button onclick="prefill('${txt[0].replace(/'/g,"\\'")}')">${requestLabel}</button>
    </article>`;
  }).join("");
}
function prefill(name){
  document.querySelector('textarea[name="equipment"]').value=name;
  location.hash="#rfq";
}
document.getElementById("searchEquipment").addEventListener("input",renderEquipment);
document.getElementById("categoryFilter").addEventListener("change",renderEquipment);
renderEquipment();

function setLanguage(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  const dict=translations[lang]||{};
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(dict[k]) el.innerHTML=dict[k];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const k=el.dataset.i18nPlaceholder;
    if(dict[k]) el.placeholder=dict[k];
  });
  renderEquipment();
}
document.querySelectorAll(".lang").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));

document.querySelector(".mobile-menu").addEventListener("click",()=>{
  const n=document.getElementById("nav");
  if(getComputedStyle(n).display==="none"){
    n.style.display="flex";n.style.position="absolute";n.style.top="78px";n.style.left="0";n.style.right="0";
    n.style.flexDirection="column";n.style.background="#032a4f";n.style.padding="20px 24px";
  } else n.style.display="none";
});

document.getElementById("quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const msg=document.getElementById("formMessage");
  msg.textContent=currentLang==="ru" ? "Прототип: заявка заполнена. Следующий этап — подключение отправки на email/CRM." :
                  currentLang==="uz" ? "Prototip: so‘rov to‘ldirildi. Keyingi bosqich — email/CRM ga ulash." :
                  "Prototype: request completed. Next step is connecting this form to email/CRM.";
});
