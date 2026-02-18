"use client";
import "./globals.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => changeLanguage("en")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          English
        </button>

        <button
          onClick={() => changeLanguage("da")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Danish
        </button>
      </div>

      <h1 className="text-4xl font-bold">
        {t("welcome")}
      </h1>

      <p className="text-gray-600">
        {t("description")}
      </p>
    </div>
  );
}
