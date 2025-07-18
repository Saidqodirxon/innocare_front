import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Send,
  Globe,
} from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const Contacts = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://back.innocare.uz/contacts", formData);
      toast.success(t("contacts.success") || "Muvaffaqiyatli yuborildi!");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      toast.error(t("contacts.error") || "Xatolik yuz berdi");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        <span className="text-[#71914B]">Контакты</span> и обратная связь
      </h2>

      {/* Form & Map */}
      <div className="flex flex-col md:flex-row gap-10 mb-12 items-start jus">
        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Ваша имя *"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 border border-[#71914B] rounded-full px-4 py-2"
            />
            <PhoneInput
              country={"uz"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="!w-full !h-10 !pl-14 !pr-4 !border !border-[#71914B] !rounded-full"
              containerClass="!w-full flex-1"
              buttonClass="!bg-white !border-r !border-[#71914B] !rounded-l h-10"
              specialLabel=""
              inputProps={{ required: true }}
            />
          </div>

          <textarea
            name="message"
            placeholder="Опишите суть Вашего вопроса или обращения"
            value={formData.message}
            onChange={handleChange}
            rows={7}
            className="w-full border border-[#71914B] rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="bg-[#71914B] hover:bg-[#72914bb0] text-white px-8 py-2 rounded-full transition flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Отправить
          </button>
        </form>

        <div className="flex-1 w-full">
          <iframe
            src="https://yandex.uz/map-widget/v1/-/CHDqMC8T"
            width="100%"
            height="100%"
            className="rounded-xl min-h-[200px] md:min-h-[300px]"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
        <div className="flex-1 min-w-[180px] rounded-xl bg-[#F8F8F8] p-4 space-y-2">
          <p className="flex items-center gap-2 text-sm text-[#71914B] font-medium bg-white px-2 py-1 rounded-full w-fit">
            <MapPin className="w-5 h-5 text-[#fff] bg-[#71914B] rounded-full p-1" />
            Адрес
          </p>
          <p className="text-[13px] text-[#71914B] font-semibold">
            Шайхонтохурский район, улица Самарканд Дарвоза, 3/48
          </p>
        </div>

        <div className="flex-1 min-w-[180px] rounded-xl bg-[#F8F8F8] p-4 space-y-2">
          <p className="flex items-center gap-2 text-sm text-[#71914B] font-medium bg-white px-2 py-1 rounded-full w-fit">
            <Mail className="w-5 h-5 text-[#fff] bg-[#71914B] rounded-full p-1" />
            Почта
          </p>
          <p className="text-[13px] text-[#71914B] font-semibold">
            Supersite.uz@gmail.com
          </p>
        </div>

        <div className="flex-1 min-w-[180px] rounded-xl bg-[#F8F8F8] p-4 space-y-3">
          <p className="flex items-center gap-2 text-sm font-medium bg-white px-2 py-1 rounded-full w-fit">
            <Globe className="w-5 h-5 text-[#fff] bg-[#71914B] rounded-full p-1" />
            Соц. сети
          </p>
          <div className="flex gap-3 text-[#71914B] text-xl">
            <FaTelegramPlane />
            <Instagram />
            <Youtube />
            <Facebook />
          </div>
        </div>

        <div className="flex-1 min-w-[180px] rounded-xl bg-[#F8F8F8] p-4 space-y-2">
          <p className="flex items-center gap-2 text-sm font-medium bg-white px-2 py-1 rounded-full w-fit">
            <Phone className="w-5 h-5 text-[#fff] bg-[#71914B] rounded-full p-1" />
            Телефон
          </p>
          <p className="text-[13px] text-[#71914B] font-semibold">
            +998 (97) 032-23-32
          </p>
        </div>
      </div>

      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default Contacts;
