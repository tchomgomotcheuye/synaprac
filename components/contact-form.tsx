"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

const initialState = { name: "", phone: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);

  const handleChange =
    (field: keyof typeof initialState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: brancher sur une API route (/api/contact) ou un service d'e-mail (Resend, etc.)
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm(initialState);
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
            Nom complet
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="phone">
            Téléphone
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder="+237"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-4.5">
        <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange("email")}
          placeholder="votre@email.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5 mb-4.5">
        <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="subject">
          Sujet
        </label>
        <input
          id="subject"
          value={form.subject}
          onChange={handleChange("subject")}
          placeholder="Objet de votre message"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5 mb-6">
        <label className="font-display font-semibold text-[12.5px] text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Votre message..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        Envoyer le message
      </Button>

      {sent && (
        <p className="text-green-700 text-sm mt-3.5 text-center">
          Merci, votre message a bien été envoyé !
        </p>
      )}
    </form>
  );
}