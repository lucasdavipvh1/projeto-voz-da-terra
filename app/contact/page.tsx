"use client"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useLocale } from "@/context/locale-context"

export default function ContactPage() {
  const { t } = useLocale()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="backdrop-blur-xl bg-black/20 min-h-screen">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">{t("contact")}</h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">{t("contact")}</h2>
                <form className="space-y-6">
                  <div>
                    <Input placeholder={t("yourName")} className="bg-white/10 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t("yourEmail")}
                      className="bg-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input placeholder={t("subject")} className="bg-white/10 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t("yourMessage")}
                      rows={6}
                      className="bg-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">{t("sendMessage")}</Button>
                </form>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">{t("information")}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-emerald-400 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">{t("address")}</h3>
                      <p className="text-gray-300">
                        Porto Velho, Rondônia
                        <br />
                        Região Norte do Brasil
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-emerald-400 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">{t("email")}</h3>
                      <p className="text-gray-300">contato@vozdaterra.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-emerald-400 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">{t("phone")}</h3>
                      <p className="text-gray-300">(69) 9999-9999</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h3 className="text-white font-medium mb-4">{t("complaintsSuggestions")}</h3>
                  <p className="text-gray-300 text-sm">{t("confidentiality")}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
