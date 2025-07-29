import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";

const ContactsPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
      toast.success(t("contacts.success"));
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast.error(t("contacts.error"));
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12 text-[#2c2c2c]">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          <span className="text-[#71914B]">{t("contacts.title_1")}</span>{" "}
          {t("contacts.title_2")}
        </h2>

        {/* Top Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">
          {/* Address */}
          <div className="space-y-2">
            <div className="flex justify-center">
              <MapPin className="w-20 h-20 text-[#71914B]" />
            </div>
            <h4 className="font-semibold">{t("contacts.address_label")}</h4>
            <p className="text-sm">{t("contacts.address")}</p>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <div className="flex justify-center">
              <Mail className="w-20 h-20 text-[#71914B]" />
            </div>
            <h4 className="font-semibold">{t("contacts.email_label")}</h4>
            <p className="text-sm">supersite.office@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <div className="flex justify-center">
              <Phone className="w-20 h-20 text-[#71914B]" />
            </div>
            <h4 className="font-semibold">{t("contacts.phone_label")}</h4>
            <p className="text-sm">+998 (97) 032-23-32</p>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <div className="flex justify-center">
              <Clock className="w-20 h-20 text-[#71914B]" />
            </div>
            <h4 className="font-semibold">{t("contacts.time_label")}</h4>
            <p className="text-sm">{t("contacts.working_hours")}</p>
          </div>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="name"
                placeholder={t("contacts.title_4")}
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
              placeholder={t("contacts.title_3")}
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full border border-[#71914B] rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="bg-[#71914B] hover:bg-[#5a7a3c] text-white px-8 py-2 rounded-full transition flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t("contacts.send")}
            </button>
          </form>

          {/* Map */}
          <div className="w-full h-full">
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.200379%2C41.339806&z=16&pt=69.200379,41.339806"
              width="100%"
              height="100%"
              className="rounded-xl min-h-[200px] md:min-h-[300px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
