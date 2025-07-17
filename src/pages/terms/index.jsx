import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto py-16 px-4 text-center space-y-12">
        <h2 className="text-3xl font-bold">Условия сотрудничества</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Шаг 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative">
              <img
                src="/about/img1.png"
                alt="Шаг 1"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <span className="w-[25%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                Шаг 1
              </span>
              <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <h3 className="text-xl font-bold">
                  Знакомство с аппаратной медициной
                </h3>
                <p className="text-gray-700">
                  Мы предлагаем особенную возможность. Вы предлагаете основную
                  возможность ознакомиться с последними технологиями в области
                  аппаратной медицины.
                </p>
              </div>
            </div>
          </div>

          {/* Шаг 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative">
              <span className="w-[25%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                Шаг 2
              </span>
              <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <h3 className="text-xl font-bold">
                  Знакомство с аппаратной медициной
                </h3>
                <p className="text-gray-700">
                  Мы предлагаем особенную возможность. Вы предлагаете основную
                  возможность ознакомиться с последними технологиями в области
                  аппаратной медицины.
                </p>
              </div>
              <img
                src="/about/img1.png"
                alt="Шаг 2"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
            </div>
          </div>

          {/* Шаг 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col relative">
              <img
                src="/about/img1.png"
                alt="Шаг 1"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <span className="w-[25%] mt-4 flex self-center justify-center bg-[#6DA950] text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                Шаг 3
              </span>
              <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <h3 className="text-xl font-bold">
                  Знакомство с аппаратной медициной
                </h3>
                <p className="text-gray-700">
                  Мы предлагаем особенную возможность. Вы предлагаете основную
                  возможность ознакомиться с последними технологиями в области
                  аппаратной медицины.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default TermsPage;
