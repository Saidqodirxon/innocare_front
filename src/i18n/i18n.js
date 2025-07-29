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

        otziv: {
          title_1: "Mijozlarimiz",
          title_2: "fikrlari",
        },

        narxi: "Narxi",
        summ2: "so‘m/m²",

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
    }
  }
});

export default i18n;
