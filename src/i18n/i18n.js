import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("i18nextLng") || "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    uz: {
      translation: {
        loading: "Yuklanmoqda...",
        Boglanish: "Bog‘lanish",
        Qoldirish: "Ariza qoldirish",
        Batafsil: "Batafsil",
        BuyurtmaBerish: "Buyurtma berish",
        Jonatish: "Yuborish",

        navbar: {
          logoAlt: "Logotip",
          phoneNumber: "+998 99 306 20 20",
          languageAlt: "Joriy til",
          lang: {
            uz: "O‘zbek",
            ru: "Rus",
            en: "Ingliz",
          },
        },

        links: {
          home: "Bosh sahifa",
          about_us: "Kompaniya haqida",
          portfolio: "Portfel",
          services: "Xizmatlar",
          contacts: "Aloqa",
          terms: "Shartlar",
          news: "Yangiliklar",
          partners: "Hamkorlar",
          catalog: "Katalog",
          advantages: "Afzalliklar",
        },

        products: {
          title_1: "Mahsulotlarimiz",
          title_2: "assortimenti",
        },

        news: {
          title_1: "Kosmetologiya va dermatologiya uchun uskunalar va yechimlar",
          title_2: "Barcha yangiliklar",
        },

        partners: {
          title_1: "Bizning hamkorlarimiz — umumiy qadriyatlar va ko‘p yillik ishonch asosida bog‘langan kompaniyalar va insonlar.",
        },

        contacts: {
          title_1: "Aloqa",
          title_2: "va ma'lumotlar",
          title_3: "Savolingiz yoki murojaatingizni yozing",
          title_4: "Ismingizni kiriting",
          send: "Yuborish",
          success: "Murojaatingiz muvaffaqiyatli yuborildi!",
          error: "Yuborishda xatolik yuz berdi!",
          address_label: "Manzil",
          address: "Shayxontohur tumani, Samarqand Darvoza ko‘chasi, 3/48",
          email_label: "Elektron pochta",
          socials_label: "Ijtimoiy tarmoqlar",
          phone_label: "Telefon",
        },

        advantages: {
          title_1: "BIZNING",
          title_2: "AFZALLIKLARIMIZ",
          guarantee: {
            title: "Muhri qo‘yilgan shartnoma asosida ishlaymiz va 10 yillik kafolat beramiz",
            description: "Har bir loyiha aniq muddatlar va majburiyatlar ko‘rsatilgan rasmiy shartnoma asosida bajariladi. Biz sifatga ishonamiz va 10 yillik kafolat beramiz — bu ishonchli materiallar va sinovdan o‘tgan texnologiyalarga tayanadi.",
          },
          materials: {
            title: "Premium materiallar",
            description: "Tabiiy kvartsli travertin va sifatli yopishtiruvchi ishlatiladi.",
          },
          price: {
            title: "Shaffof narx",
            description: "Yashirin to‘lovlarsiz adolatli narx taklif qilamiz.",
          },
          button: "Batafsil",
          imageAlt: "Afzalliklar",
        },

        abouts: {
          statsTitle: "Biz haqimizda raqamlarda",
          clientsTitle: "Yillar davomida mijozlar",
          clientsLabel: "Mijozlar soni",
          experienceTitle: "Rivojlanish yo‘li",
          experienceLabel: "Ish tajribasi",
          countriesTitle: "Hamkorlik mamlakatlari",
          countriesLabel: "Xalqaro hamkorlar",
          specialistsTitle: "Soha mutaxassislari",
          specialistsLabel: "Rasmiy sertifikatlar",
          purchase: {
            title: "Mahsulot xarid qilish shartlari",
            paymentTitle: "Qulay to‘lov:",
            paymentDesc: "Naqd, karta yoki hisob orqali to‘lov imkoniyati",
            deliveryTitle: "Yetkazib berish:",
            deliveryDesc: "Belgilangan summadan ortiq buyurtmalarga bepul yetkazib berish",
            guaranteeTitle: "Mahsulot kafolati:",
            guaranteeDesc: "Ekspluatatsiya shartlariga amal qilinganda 12 oylik kafolat",
            samplesTitle: "Sinov namunalar:",
            samplesDesc: "Yirik xarid oldidan sifatni tekshirish uchun namunalar buyurtma qilish mumkin"
          }
        },

        footer: {
          description: "INNOCARE — Barcha mahsulotlar sertifikatlangan, xizmatlar litsenziyalangan.",
          links: {
            partners: "Hamkorlar",
            advantages: "Afzalliklarimiz",
            terms: "Hamkorlik shartlari",
            contacts: "Aloqa",
            catalog: "Katalog",
            news: "Yangiliklar",
          },
          legal: "Barcha mahsulotlar ro‘yxatdan o‘tgan, xizmatlar litsenziyalangan.",
          call_us: "Bizga qo‘ng‘iroq qiling",
          copyright: "Mualliflik huquqi © {{year}} Innocare. Barcha huquqlar himoyalangan.",
          developed_by: "Ishlab chiqqan jamoa",
        },

        notfound: {
          imageAlt: "404 xatolik",
          title: "Sahifa topilmadi",
          button: "Bosh sahifa",
        },

        catalog: {
          title_1: "BIZNING",
          title_2: "XIZMATLARIMIZ",
          more: "Batafsil",
        },

        contact_form: {
          heading: "Biz bilan bog‘laning",
          short_about: "Qisqacha biz haqimizda",
          company_description: "«Fasad Master» MCHJ — 10 yillik tajribaga ega fasad ishlari bo‘yicha kompaniya. Butun O‘zbekiston bo‘ylab 400+ obyekt, 90+ mutaxassis. Rasmiy shartnoma asosida ishlaymiz.",
          form_heading: "Kontaktlaringizni qoldiring",
          thanks: "Rahmat! Tez orada siz bilan bog‘lanamiz.",
          name: "Ism",
          phone: "Telefon",
          send: "Yuborish",
          privacy: "Ma’lumotlaringiz maxfiy saqlanadi.",
        },
        terms: {
          title: "Hamkorlik shartlari",
          flex_delivery_title: "Moslashuvchan yetkazib berish shartlari",
          flex_delivery_desc: "Mijoz ehtiyojlariga mos ravishda individual muddat va hajmlar.",
          support_title: "Maslahat va qo‘llab-quvvatlash",
          support_desc: "Barcha hamkorlar uchun bepul maslahatlar va texnik yordam.",
          quality_title: "Sifat kafolati",
          quality_desc: "Ishlab chiqarishdagi nuqsonlar aniqlansa, 30 kun ichida tovarni qaytarish yoki almashtirish.",
          discounts_title: "Chegirmalar va bonuslar",
          discounts_desc: "Doimiy mijozlar uchun maxsus chegirmalar va yirik buyurtmalar uchun bonuslar."
        },
        qadam: "qadam",
        categories: "Kategoriya",
        Tozalash: "Tozalash",
        otziv: {
          title_1: "Mijozlarimiz",
          title_2: "fikrlari",
        },
        product: {
          annotation_file: "Yuklab olish",
          details: "Mahsulot haqida"
        },
        narxi: "Narxi",
        summ2: "so‘m/m²",
        partners: {
          title_1: "Bizning xalqaro hamkorlarimiz",
          description: "Dermatologiya, trixologiya va go‘zallik sohasida yetakchi xalqaro kompaniyalar bilan hamkorlik qilamiz.",
          list_title: "Hamkorlar ro‘yxati:",
        },
        why: {
          title_1: "NEGA",
          title_2: "BIZNI TANLAYDI",
          reason1: {
            title: "Tajriba",
            text: "Bizning qoidalarimizga ko‘ra, sertifikatlangan materiallardan foydalanish, shartnomalarga qat’iy rioya qilish, oqilona narx siyosati va to‘liq o‘z-o‘zini ta’minlash tamoyiliga asoslanamiz.",
          },
          reason2: {
            title: "Sifat va ishonchlilik",
            text: "Ishonchli materiallar, qat’iy shartnoma va adolatli narx — sifat kafolati.",
          },
          reason3: {
            title: "Individual yondashuv",
            text: "Har bir mijozga mos individual yechimlarni taklif qilamiz.",
          },
          reason4: {
            title: "Shaffoflik",
            text: "Narxlar va xizmatlarda to‘liq shaffoflik tamoyiliga amal qilamiz.",
          }
        }
      }
    },
    en: {
      translation: {
        loading: "Loading...",
        Boglanish: "Contact",
        Qoldirish: "Leave a request",
        Batafsil: "More details",
        BuyurtmaBerish: "Order now",
        Jonatish: "Send",

        navbar: {
          logoAlt: "Logo",
          phoneNumber: "+998 99 306 20 20",
          languageAlt: "Current language",
          lang: {
            uz: "Uzbek",
            ru: "Russian",
            en: "English",
          },
        },

        links: {
          home: "Home",
          about_us: "About Company",
          portfolio: "Portfolio",
          services: "Services",
          contacts: "Contact",
          terms: "Terms",
          news: "News",
          partners: "Partners",
          catalog: "Catalog",
          advantages: "Advantages",
        },

        products: {
          title_1: "Our",
          title_2: "Products",
        },

        news: {
          title_1: "Equipment and solutions for cosmetology and dermatology",
          title_2: "All news",
        },

        partners: {
          title_1: "Our partners are companies and people connected by shared values and long-term trust.",
        },

        contacts: {
          title_1: "Contact",
          title_2: "Information",
          title_3: "Write your question or message",
          title_4: "Enter your name",
          send: "Send",
          success: "Your message was sent successfully!",
          error: "An error occurred while sending!",
          address_label: "Address",
          address: "Shaykhontohur district, Samarqand Darvoza street, 3/48",
          email_label: "Email",
          socials_label: "Social media",
          phone_label: "Phone",
        },

        advantages: {
          title_1: "OUR",
          title_2: "ADVANTAGES",
          guarantee: {
            title: "We work under a signed contract and give a 10-year warranty",
            description: "Each project is executed under an official contract with exact deadlines and obligations. We believe in quality and provide a 10-year warranty — based on reliable materials and proven technologies.",
          },
          materials: {
            title: "Premium materials",
            description: "Natural quartz travertine and high-quality adhesives are used.",
          },
          price: {
            title: "Transparent pricing",
            description: "We offer fair pricing without hidden fees.",
          },
          button: "Learn more",
          imageAlt: "Advantages",
        },

        abouts: {
          statsTitle: "Our achievements in numbers",
          clientsTitle: "Clients over the years",
          clientsLabel: "Number of clients",
          experienceTitle: "Experience path",
          experienceLabel: "Years of experience",
          countriesTitle: "Partner countries",
          countriesLabel: "International partners",
          specialistsTitle: "Field specialists",
          specialistsLabel: "Certified professionals",
          purchase: {
            title: "Product purchase terms",
            paymentTitle: "Convenient payment:",
            paymentDesc: "Payment via cash, card or invoice",
            deliveryTitle: "Delivery:",
            deliveryDesc: "Free delivery for orders above a specified amount",
            guaranteeTitle: "Product warranty:",
            guaranteeDesc: "12-month warranty under correct usage",
            samplesTitle: "Samples:",
            samplesDesc: "You can order samples before a major purchase",
          }
        },

        footer: {
          description: "INNOCARE — All products are certified, services are licensed.",
          links: {
            partners: "Partners",
            advantages: "Our advantages",
            terms: "Cooperation terms",
            contacts: "Contact",
            catalog: "Catalog",
            news: "News",
          },
          legal: "All products are registered, services are licensed.",
          call_us: "Call us",
          copyright: "Copyright © {{year}} Innocare. All rights reserved.",
          developed_by: "Developed by team",
        },

        notfound: {
          imageAlt: "404 error",
          title: "Page not found",
          button: "Home",
        },

        catalog: {
          title_1: "OUR",
          title_2: "SERVICES",
          more: "Learn more",
        },

        contact_form: {
          heading: "Contact us",
          short_about: "About us",
          company_description: "“Fasad Master” LLC — a facade service company with 10 years of experience. 400+ objects across Uzbekistan, 90+ specialists. We work based on official contracts.",
          form_heading: "Leave your contact info",
          thanks: "Thank you! We’ll contact you shortly.",
          name: "Name",
          phone: "Phone",
          send: "Send",
          privacy: "Your data will remain confidential.",
        },

        terms: {
          title: "Cooperation Terms",
          flex_delivery_title: "Flexible delivery conditions",
          flex_delivery_desc: "Individual deadlines and volumes based on client needs.",
          support_title: "Support and consultation",
          support_desc: "Free consultations and technical support for all partners.",
          quality_title: "Quality guarantee",
          quality_desc: "If a manufacturing defect is found, the product can be returned or exchanged within 30 days.",
          discounts_title: "Discounts and bonuses",
          discounts_desc: "Special discounts for regular clients and bonuses for large orders.",
        },

        qadam: "step",
        categories: "Category",
        Tozalash: "Cleaning",

        otziv: {
          title_1: "Our clients",
          title_2: "opinions",
        },

        product: {
          annotation_file: "Download",
          details: "Product details"
        },

        narxi: "Price",
        summ2: "UZS/m²",

        partners: {
          title_1: "Our international partners",
          description: "We cooperate with leading international companies in dermatology, trichology, and beauty.",
          list_title: "List of partners:",
        },

        why: {
          title_1: "WHY",
          title_2: "CHOOSE US",
          reason1: {
            title: "Experience",
            text: "We use certified materials, strictly follow contracts, maintain fair pricing, and ensure full self-sufficiency.",
          },
          reason2: {
            title: "Quality and reliability",
            text: "Reliable materials, strict contracts, and fair pricing — that’s our quality guarantee.",
          },
          reason3: {
            title: "Individual approach",
            text: "We offer tailored solutions for each client.",
          },
          reason4: {
            title: "Transparency",
            text: "We ensure complete transparency in pricing and services.",
          }
        }
      }
    },
    ru: {
      translation: {
        loading: "Загрузка...",
        Boglanish: "Связаться",
        Qoldirish: "Оставить заявку",
        Batafsil: "Подробнее",
        BuyurtmaBerish: "Оформить заказ",
        Jonatish: "Отправить",

        navbar: {
          logoAlt: "Логотип",
          phoneNumber: "+998 99 306 20 20",
          languageAlt: "Текущий язык",
          lang: {
            uz: "Узбекский",
            ru: "Русский",
            en: "Английский",
          },
        },

        links: {
          home: "Главная",
          about_us: "О компании",
          portfolio: "Портфолио",
          services: "Услуги",
          contacts: "Контакты",
          terms: "Условия",
          news: "Новости",
          partners: "Партнеры",
          catalog: "Каталог",
          advantages: "Преимущества",
        },

        products: {
          title_1: "Наши",
          title_2: "товары",
        },

        news: {
          title_1: "Оборудование и решения для косметологии и дерматологии",
          title_2: "Все новости",
        },

        partners: {
          title_1: "Наши партнеры — компании и люди, объединённые общими ценностями и многолетним доверием.",
        },

        contacts: {
          title_1: "Контакты",
          title_2: "и информация",
          title_3: "Напишите ваш вопрос или обращение",
          title_4: "Введите ваше имя",
          send: "Отправить",
          success: "Ваше сообщение успешно отправлено!",
          error: "Произошла ошибка при отправке!",
          address_label: "Адрес",
          address: "Шайхантахурский район, улица Самарканд Дарвоза, 3/48",
          email_label: "Электронная почта",
          socials_label: "Социальные сети",
          phone_label: "Телефон",
        },

        advantages: {
          title_1: "НАШИ",
          title_2: "ПРЕИМУЩЕСТВА",
          guarantee: {
            title: "Работаем по официальному договору и даем 10-летнюю гарантию",
            description: "Каждый проект выполняется по официальному договору с четкими сроками и обязательствами. Мы уверены в качестве и предоставляем 10-летнюю гарантию — на основе надёжных материалов и проверенных технологий.",
          },
          materials: {
            title: "Премиальные материалы",
            description: "Используются натуральный кварцевый травертин и качественный клей.",
          },
          price: {
            title: "Прозрачная цена",
            description: "Предлагаем честную цену без скрытых платежей.",
          },
          button: "Подробнее",
          imageAlt: "Преимущества",
        },

        abouts: {
          statsTitle: "О нас в цифрах",
          clientsTitle: "Клиенты за годы",
          clientsLabel: "Количество клиентов",
          experienceTitle: "Путь развития",
          experienceLabel: "Опыт работы",
          countriesTitle: "Страны-партнеры",
          countriesLabel: "Международные партнеры",
          specialistsTitle: "Отраслевые специалисты",
          specialistsLabel: "Официальные сертификаты",
          purchase: {
            title: "Условия покупки продукции",
            paymentTitle: "Удобная оплата:",
            paymentDesc: "Оплата наличными, по карте или счёту",
            deliveryTitle: "Доставка:",
            deliveryDesc: "Бесплатная доставка при заказе на сумму выше установленной",
            guaranteeTitle: "Гарантия на продукцию:",
            guaranteeDesc: "12 месяцев при соблюдении условий эксплуатации",
            samplesTitle: "Образцы:",
            samplesDesc: "Можно заказать образцы перед крупной покупкой",
          }
        },

        footer: {
          description: "INNOCARE — Вся продукция сертифицирована, услуги лицензированы.",
          links: {
            partners: "Партнеры",
            advantages: "Наши преимущества",
            terms: "Условия сотрудничества",
            contacts: "Контакты",
            catalog: "Каталог",
            news: "Новости",
          },
          legal: "Вся продукция зарегистрирована, услуги лицензированы.",
          call_us: "Позвоните нам",
          copyright: "Авторские права © {{year}} Innocare. Все права защищены.",
          developed_by: "Разработано командой",
        },

        notfound: {
          imageAlt: "Ошибка 404",
          title: "Страница не найдена",
          button: "Главная",
        },

        catalog: {
          title_1: "НАШИ",
          title_2: "УСЛУГИ",
          more: "Подробнее",
        },

        contact_form: {
          heading: "Свяжитесь с нами",
          short_about: "Кратко о нас",
          company_description: "ООО «Fasad Master» — компания с 10-летним опытом в фасадных работах. Более 400 объектов по всему Узбекистану, более 90 специалистов. Работаем по официальному договору.",
          form_heading: "Оставьте свои контакты",
          thanks: "Спасибо! Мы свяжемся с вами в ближайшее время.",
          name: "Имя",
          phone: "Телефон",
          send: "Отправить",
          privacy: "Ваши данные будут храниться конфиденциально.",
        },

        terms: {
          title: "Условия сотрудничества",
          flex_delivery_title: "Гибкие условия доставки",
          flex_delivery_desc: "Индивидуальные сроки и объёмы в зависимости от потребностей клиента.",
          support_title: "Консультации и поддержка",
          support_desc: "Бесплатные консультации и техническая поддержка для всех партнёров.",
          quality_title: "Гарантия качества",
          quality_desc: "В случае брака можно вернуть или обменять товар в течение 30 дней.",
          discounts_title: "Скидки и бонусы",
          discounts_desc: "Специальные скидки для постоянных клиентов и бонусы для крупных заказов.",
        },

        qadam: "шаг",
        categories: "Категория",
        Tozalash: "Очистить",

        otziv: {
          title_1: "Отзывы",
          title_2: "наших клиентов",
        },

        product: {
          annotation_file: "Скачать",
          details: "О товаре"
        },

        narxi: "Цена",
        summ2: "сум/м²",

        partners: {
          title_1: "Наши международные партнёры",
          description: "Мы сотрудничаем с ведущими международными компаниями в области дерматологии, трихологии и красоты.",
          list_title: "Список партнёров:",
        },

        why: {
          title_1: "ПОЧЕМУ",
          title_2: "ВЫБИРАЮТ НАС",
          reason1: {
            title: "Опыт",
            text: "Наши принципы — сертифицированные материалы, строгое соблюдение договоров, справедливая ценовая политика и полная автономность.",
          },
          reason2: {
            title: "Качество и надёжность",
            text: "Надёжные материалы, строгий договор и честная цена — гарантия качества.",
          },
          reason3: {
            title: "Индивидуальный подход",
            text: "Мы предлагаем индивидуальные решения, подходящие каждому клиенту.",
          },
          reason4: {
            title: "Прозрачность",
            text: "Мы придерживаемся принципа полной прозрачности в ценах и услугах.",
          }
        }
      }
    }
  }
});

export default i18n;
