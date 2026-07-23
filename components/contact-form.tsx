"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Mail, MessageCircle, Send } from "lucide-react";

const initialState = { name: "", phone: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);
  const [method, setMethod] = useState<"email" | "whatsapp" | "both">("email");
  const t = useTranslations("Contact.form");

  const handleChange =
    (field: keyof typeof initialState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      const whatsappMessage = `
        Nom : ${form.name}
        Téléphone : ${form.phone}
        Email : ${form.email}
        Sujet : ${form.subject}

        Message :
        ${form.message}
        `;

      try {
        switch (method) {
          case "email":
            await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            });
            break;

          case "whatsapp":
            window.open(
              `https://wa.me/237689139922?text=${encodeURIComponent(
                whatsappMessage
              )}`,
              "_blank"
            );
            break;

          case "both":
            await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            });

            window.open(
              `https://wa.me/237689139922?text=${encodeURIComponent(
                whatsappMessage
              )}`,
              "_blank"
            );
            break;
        }

        setSent(true);
        setForm(initialState);
      } catch (error) {
        console.error(error);
        alert("Une erreur est survenue lors de l'envoi.");
      }
    };

  const inputClass =
    "w-full border-[1.4px] border-line rounded-lg px-3.5 py-3 text-sm text-ink bg-[#FCFAF5] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-line rounded-organic-lg p-6 sm:p-10"
    >
      <div className="grid sm:grid-cols-2 gap-4.5 mb-4.5">
        <div className="flex flex-col gap-1.5">
          <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="name">
            {t("name")}
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={handleChange("name")}
            placeholder={t("namePlaceholder")}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="phone">
            {t("phone")}
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder={t("phonePlaceholder")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-4.5">
        <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="email">
          {t("email")}
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange("email")}
          placeholder={t("emailPlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5 mb-4.5">
        <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="subject">
          {t("subject")}
        </label>
        <input
          id="subject"
          value={form.subject}
          onChange={handleChange("subject")}
          placeholder={t("subjectPlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5 mb-6">
        <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="message">
          {t("message")}
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={handleChange("message")}
          placeholder={t("messagePlaceholder")}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mb-6">
        <p className="font-display font-semibold text-[13px] text-ink mb-3">
          {t("deliveryMethod")}
        </p>

        <div className="grid grid-cols-3 gap-3">

          <button
            type="button"
            onClick={() => setMethod("email")}
            className={`rounded-xl border p-4 transition-all ${
              method === "email"
                ? "border-green-700 bg-green-50"
                : "border-line hover:border-green-400"
            }`}
          >
            <Mail
              className="mx-auto mb-2 text-green-700"
              size={22}
            />

            <p className="text-sm font-display font-semibold">
              {t("emailOption")}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setMethod("whatsapp")}
            className={`rounded-xl border p-4 transition-all ${
              method === "whatsapp"
                ? "border-green-700 bg-green-50"
                : "border-line hover:border-green-400"
            }`}
          >
            <MessageCircle
              className="mx-auto mb-2 text-green-700"
              size={22}
            />

            <p className="text-sm font-display font-semibold">
              WhatsApp
            </p>
          </button>

          <button
            type="button"
            onClick={() => setMethod("both")}
            className={`rounded-xl border p-4 transition-all ${
              method === "both"
                ? "border-green-700 bg-green-50"
                : "border-line hover:border-green-400"
            }`}
          >
            <Send
              className="mx-auto mb-2 text-green-700"
              size={22}
            />

            <p className="text-sm font-display font-semibold">
              {t("bothOption")}
            </p>
          </button>

        </div>
      </div>

      <Button type="submit" className="w-full" size="lg">
        {t("submit")}
      </Button>

      {sent && (
        <p className="text-green-700 text-sm mt-3.5 text-center">
          {t("success")}
        </p>
      )}
    </form>
  );
}