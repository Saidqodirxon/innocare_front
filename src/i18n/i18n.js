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
          phoneNumber: "+998 (97) 032-23-32",
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
          terms: "Hamkorlik shartlari",
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
          phone_label: "Telefon",
          time_label: "Ish vaqti",
          working_hours: "Dushanba–shanba, 9:00–18:00",
          socials_label: "Ijtimoiy tarmoqlar",
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

          cooperation: {
            title: "Hamkorlik shartlari",
            termTitle: "Moslashuvchan yetkazib berish shartlari:",
            termDesc: "Mijoz ehtiyojlariga mos ravishda individual muddat va hajmlar.",
            supportTitle: "Maslahat va qo‘llab-quvvatlash:",
            supportDesc: "Barcha hamkorlar uchun bepul maslahatlar va texnik yordam.",
            qualityTitle: "Sifat kafolati:",
            qualityDesc: "Ishlab chiqarishdagi nuqsonlar aniqlansa, 30 kun ichida tovarni qaytarish yoki almashtirish.",
            discountTitle: "Chegirmalar va bonuslar:",
            discountDesc: "Doimiy mijozlar uchun maxsus chegirmalar va yirik buyurtmalar uchun bonuslar."
          },
          innocare: {
            title: "INNOCARE bilan ishlash shartlari",
            trainingTitle: "Xodimlarni o‘qitish:",
            trainingDesc: "Hamkorlar xodimlari uchun mahsulot va texnologiyalar bo‘yicha bepul treninglar va seminarlar.",
            programTitle: "Hamkorlik dasturi:",
            programDesc: "Yangi mijozlarni jalb qilish va tarmoqni kengaytirish uchun qo‘shimcha daromad.",
            updateTitle: "Doimiy yangilanishlar:",
            updateDesc: "Har oylik xat orqali kompaniya yangiliklari va aksiyalariga kirish imkoniyati.",
            managerTitle: "Shaxsiy menejer:",
            managerDesc: "Har bir hamkor uchun tezkor muammolarni hal qilishga mas’ul dedicated menejer tayinlanadi."
          },
          purchase: {
            title: "Mahsulot xarid qilish shartlari",
            paymentTitle: "Qulay to‘lov:",
            paymentDesc: "Naqd pul, bank kartasi yoki bank o'tkazmasi orqali to‘lov imkoniyati.",
            deliveryTitle: "Yetkazib berish:",
            deliveryDesc: "Ma’lum summadan ortiq buyurtmalarda bepul yetkazib berish (buyurtma paytida aniqlanadi).",
            guaranteeTitle: "Mahsulot kafolati:",
            guaranteeDesc: "Ekspluatatsiya qoidalariga amal qilinganda barcha mahsulotlarga 12 oylik kafolat.",
            samplesTitle: "Sinov namunalar:",
            samplesDesc: "Yirik xariddan oldin sifatni baholash uchun test namunalarini buyurtma qilish imkoniyati."
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
            work_time: "Ish vaqti: Dushanba - Shanba, 9:00 - 18:00",
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
          about_us: "About Us",
          portfolio: "Portfolio",
          services: "Services",
          contacts: "Contact",
          terms: "Cooperation Terms",
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
          title_1: "Our partners — companies and people united by shared values and long-term trust.",
        },

        contacts: {
          title_1: "Contact",
          title_2: "and information",
          title_3: "Write your question or message",
          title_4: "Enter your name",
          send: "Send",
          success: "Your message has been successfully sent!",
          error: "An error occurred while sending!",
          address_label: "Address",
          address: "Shaykhontohur district, Samarqand Darvoza street, 3/48",
          email_label: "Email",
          phone_label: "Phone",
          time_label: "Working hours",
          working_hours: "Monday–Saturday, 9:00–18:00",
          socials_label: "Social Media",
        },

        advantages: {
          title_1: "OUR",
          title_2: "ADVANTAGES",
          guarantee: {
            title: "We work based on a signed contract and provide a 10-year warranty",
            description: "Each project is carried out under an official contract with clear deadlines and commitments. We trust in quality and provide a 10-year warranty — based on reliable materials and tested technologies.",
          },
          materials: {
            title: "Premium materials",
            description: "Natural quartz travertine and quality adhesive are used.",
          },
          price: {
            title: "Transparent pricing",
            description: "We offer fair pricing without hidden fees.",
          },
          button: "More",
          imageAlt: "Advantages",
        },

        abouts: {
          statsTitle: "About Us in Numbers",
          clientsTitle: "Clients over the years",
          clientsLabel: "Number of clients",
          experienceTitle: "Development path",
          experienceLabel: "Years of experience",
          countriesTitle: "Countries of cooperation",
          countriesLabel: "International partners",
          specialistsTitle: "Industry specialists",
          specialistsLabel: "Official certificates",

          cooperation: {
            title: "Cooperation terms",
            termTitle: "Flexible delivery terms:",
            termDesc: "Individual deadlines and volumes tailored to client needs.",
            supportTitle: "Consultation and support:",
            supportDesc: "Free consultations and technical support for all partners.",
            qualityTitle: "Quality guarantee:",
            qualityDesc: "If manufacturing defects are found, return or exchange within 30 days.",
            discountTitle: "Discounts and bonuses:",
            discountDesc: "Special discounts for regular clients and bonuses for large orders."
          },
          innocare: {
            title: "Terms of working with INNOCARE",
            trainingTitle: "Staff training:",
            trainingDesc: "Free training and seminars on products and technologies for partner staff.",
            programTitle: "Partnership program:",
            programDesc: "Additional income for attracting new clients and expanding the network.",
            updateTitle: "Regular updates:",
            updateDesc: "Access to company news and promotions via monthly email.",
            managerTitle: "Personal manager:",
            managerDesc: "A dedicated manager is assigned to each partner for quick issue resolution."
          },
          purchase: {
            title: "Product purchase terms",
            paymentTitle: "Convenient payment:",
            paymentDesc: "Payment via cash, bank card, or bank transfer.",
            deliveryTitle: "Delivery:",
            deliveryDesc: "Free delivery for orders above a certain amount (determined during the order).",
            guaranteeTitle: "Product warranty:",
            guaranteeDesc: "12-month warranty on all products if usage guidelines are followed.",
            samplesTitle: "Sample products:",
            samplesDesc: "Option to order test samples to evaluate quality before large purchase."
          }
        },

        footer: {
          description: "INNOCARE — All products are certified, and services are licensed.",
          links: {
            partners: "Partners",
            advantages: "Our Advantages",
            terms: "Cooperation Terms",
            contacts: "Contact",
            catalog: "Catalog",
            news: "News",
            work_time: "Work Time: Mon-Sat 9:00-18:00"
          },
          legal: "All products are registered, services are licensed.",
          call_us: "Call us",
          copyright: "Copyright © {{year}} Innocare. All rights reserved.",
          developed_by: "Developed by team",
        },

        notfound: {
          imageAlt: "404 Error",
          title: "Page not found",
          button: "Home",
        },

        catalog: {
          title_1: "OUR",
          title_2: "SERVICES",
          more: "More",
        },

        contact_form: {
          heading: "Contact us",
          short_about: "About us briefly",
          company_description: "LLC “Fasad Master” — a company with 10 years of experience in facade work. 400+ objects across Uzbekistan, 90+ specialists. We work based on official contracts.",
          form_heading: "Leave your contact details",
          thanks: "Thank you! We’ll contact you soon.",
          name: "Name",
          phone: "Phone",
          send: "Send",
          privacy: "Your data will be kept confidential.",
        },

        terms: {
          title: "Cooperation terms",
          flex_delivery_title: "Flexible delivery terms",
          flex_delivery_desc: "Individual deadlines and volumes based on client needs.",
          support_title: "Consultation and support",
          support_desc: "Free consultations and technical support for all partners.",
          quality_title: "Quality guarantee",
          quality_desc: "If manufacturing defects are found, return or exchange within 30 days.",
          discounts_title: "Discounts and bonuses",
          discounts_desc: "Special discounts for regular customers and bonuses for large orders."
        },

        qadam: "step",
        categories: "Category",
        Tozalash: "Clear",

        otziv: {
          title_1: "Our",
          title_2: "Clients’ Feedback",
        },

        product: {
          annotation_file: "Download",
          details: "About the product"
        },

        narxi: "Price",
        summ2: "UZS/m²",

        partners: {
          title_1: "Our international partners",
          description: "We cooperate with leading international companies in dermatology, trichology, and beauty.",
          list_title: "Partner list:",
        },

        why: {
          title_1: "WHY",
          title_2: "CHOOSE US",
          reason1: {
            title: "Experience",
            text: "We use certified materials, strictly follow contracts, maintain fair pricing, and operate with full autonomy.",
          },
          reason2: {
            title: "Quality and reliability",
            text: "Reliable materials, strict contracts, and fair pricing — a guarantee of quality.",
          },
          reason3: {
            title: "Individual approach",
            text: "We offer individual solutions tailored to each customer.",
          },
          reason4: {
            title: "Transparency",
            text: "We follow full transparency in pricing and services.",
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
        BuyurtmaBerish: "Сделать заказ",
        Jonatish: "Отправить",

        navbar: {
          logoAlt: "Логотип",
          phoneNumber: "+998 (97) 032-23-32",
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
          terms: "Условия сотрудничества",
          news: "Новости",
          partners: "Партнеры",
          catalog: "Каталог",
          advantages: "Преимущества",
        },

        products: {
          title_1: "Наша",
          title_2: "продукция",
        },

        news: {
          title_1: "Оборудование и решения для косметологии и дерматологии",
          title_2: "Все новости",
        },

        partners: {
          title_1: "Наши партнеры — это компании и люди, связанные общими ценностями и многолетним доверием.",
        },

        contacts: {
          title_1: "Контакты",
          title_2: "и информация",
          title_3: "Напишите свой вопрос или сообщение",
          title_4: "Введите ваше имя",
          send: "Отправить",
          success: "Ваше сообщение успешно отправлено!",
          error: "Произошла ошибка при отправке!",
          address_label: "Адрес",
          address: "Шайхантахурский район, улица Самарканд Дарвоза, 3/48",
          email_label: "Электронная почта",
          phone_label: "Телефон",
          time_label: "Часы работы",
          working_hours: "Понедельник–суббота, 9:00–18:00",
          socials_label: "Социальные сети",
        },

        advantages: {
          title_1: "НАШИ",
          title_2: "ПРЕИМУЩЕСТВА",
          guarantee: {
            title: "Работаем на основании подписанного договора и даем гарантию 10 лет",
            description: "Каждый проект реализуется на основании официального договора с четкими сроками и обязательствами. Мы уверены в качестве и предоставляем 10-летнюю гарантию — это основано на надежных материалах и проверенных технологиях.",
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
          countriesTitle: "Страны сотрудничества",
          countriesLabel: "Международные партнеры",
          specialistsTitle: "Специалисты отрасли",
          specialistsLabel: "Официальные сертификаты",

          cooperation: {
            title: "Условия сотрудничества",
            termTitle: "Гибкие условия поставки:",
            termDesc: "Индивидуальные сроки и объемы в зависимости от потребностей клиента.",
            supportTitle: "Консультации и поддержка:",
            supportDesc: "Бесплатные консультации и техническая поддержка для всех партнеров.",
            qualityTitle: "Гарантия качества:",
            qualityDesc: "При выявлении дефектов производства возврат или обмен товара в течение 30 дней.",
            discountTitle: "Скидки и бонусы:",
            discountDesc: "Специальные скидки для постоянных клиентов и бонусы за крупные заказы."
          },
          innocare: {
            title: "Условия работы с INNOCARE",
            trainingTitle: "Обучение персонала:",
            trainingDesc: "Бесплатные тренинги и семинары по продукции и технологиям для сотрудников партнеров.",
            programTitle: "Партнерская программа:",
            programDesc: "Дополнительный доход за привлечение новых клиентов и расширение сети.",
            updateTitle: "Постоянные обновления:",
            updateDesc: "Доступ к новостям и акциям компании через ежемесячную рассылку.",
            managerTitle: "Личный менеджер:",
            managerDesc: "Каждому партнеру назначается персональный менеджер для быстрого решения вопросов."
          },
          purchase: {
            title: "Условия покупки продукции",
            paymentTitle: "Удобная оплата:",
            paymentDesc: "Оплата наличными, банковской картой или по безналичному расчету.",
            deliveryTitle: "Доставка:",
            deliveryDesc: "Бесплатная доставка при заказе на определенную сумму (уточняется при заказе).",
            guaranteeTitle: "Гарантия на продукцию:",
            guaranteeDesc: "Гарантия 12 месяцев на всю продукцию при соблюдении условий эксплуатации.",
            samplesTitle: "Образцы продукции:",
            samplesDesc: "Возможность заказать тестовые образцы для оценки качества перед крупной покупкой."
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
            work_time: "Время работы: Пн-Суб 9:00-18:00"
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
          company_description: "ООО «Fasad Master» — компания с 10-летним опытом в сфере фасадных работ. Более 400 объектов по всему Узбекистану, 90+ специалистов. Работаем на основании официального договора.",
          form_heading: "Оставьте ваши контакты",
          thanks: "Спасибо! Мы скоро свяжемся с вами.",
          name: "Имя",
          phone: "Телефон",
          send: "Отправить",
          privacy: "Ваши данные сохраняются в конфиденциальности.",
        },

        terms: {
          title: "Условия сотрудничества",
          flex_delivery_title: "Гибкие условия поставки",
          flex_delivery_desc: "Индивидуальные сроки и объемы в зависимости от потребностей клиента.",
          support_title: "Консультации и поддержка",
          support_desc: "Бесплатные консультации и техническая поддержка для всех партнеров.",
          quality_title: "Гарантия качества",
          quality_desc: "При выявлении дефектов возврат или обмен в течение 30 дней.",
          discounts_title: "Скидки и бонусы",
          discounts_desc: "Скидки для постоянных клиентов и бонусы за крупные заказы."
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
          title_1: "Наши международные партнеры",
          description: "Сотрудничаем с ведущими международными компаниями в области дерматологии, трихологии и красоты.",
          list_title: "Список партнеров:",
        },

        why: {
          title_1: "ПОЧЕМУ",
          title_2: "ВЫБИРАЮТ НАС",
          reason1: {
            title: "Опыт",
            text: "Мы используем сертифицированные материалы, строго соблюдаем договоренности, придерживаемся разумной ценовой политики и обеспечиваем полную автономность.",
          },
          reason2: {
            title: "Качество и надежность",
            text: "Надежные материалы, строгий договор и справедливая цена — гарантия качества.",
          },
          reason3: {
            title: "Индивидуальный подход",
            text: "Предлагаем индивидуальные решения, подходящие каждому клиенту.",
          },
          reason4: {
            title: "Прозрачность",
            text: "Соблюдаем полную прозрачность в ценах и услугах.",
          }
        }
      }
    }
  }
});

export default i18n;
