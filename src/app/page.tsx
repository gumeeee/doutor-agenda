import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Shield,
  Smartphone,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">dr.agenda</span>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#features"
              className="text-slate-600 transition-colors hover:text-blue-600"
            >
              Recursos
            </Link>
            <Link
              href="/new-subscription"
              className="text-slate-600 transition-colors hover:text-blue-600"
            >
              Preços
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/authentication">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">Ver Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="border-blue-200 bg-blue-50 text-blue-700"
                >
                  Gestão Clínica Inteligente
                </Badge>
                <h1 className="text-4xl leading-tight font-bold text-slate-900 lg:text-5xl">
                  Transforme sua clínica com{" "}
                  <span className="text-blue-600">dr.agenda</span>
                </h1>
                <p className="text-xl leading-relaxed text-slate-600">
                  Plataforma completa para registro de médicos e pacientes,
                  agendamento de consultas e análise de métricas de desempenho.
                  Simplifique sua gestão clínica.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/authentication">
                    Começar Gratuitamente
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/dashboard">Ver Demo</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Setup em 5 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Suporte 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Dados seguros</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border bg-white shadow-2xl">
                <Image
                  src="/preview.png"
                  alt="Dashboard Preview"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-100 opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-teal-100 opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-50 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
              Recursos Completos para sua Clínica
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              Tudo que você precisa para gerenciar sua clínica de forma
              eficiente e profissional
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Gestão de Pacientes</CardTitle>
                <CardDescription>
                  Cadastro completo de pacientes com histórico médico, dados
                  pessoais e acompanhamento
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Stethoscope className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Registro de Médicos</CardTitle>
                <CardDescription>
                  Sistema completo para cadastro e gerenciamento de médicos,
                  especialidades e horários
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Agendamento Inteligente</CardTitle>
                <CardDescription>
                  Agenda online com confirmação automática, lembretes e gestão
                  de horários
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Métricas e Relatórios</CardTitle>
                <CardDescription>
                  Análise detalhada de performance, faturamento e indicadores da
                  clínica
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Segurança LGPD</CardTitle>
                <CardDescription>
                  Proteção total dos dados com criptografia e conformidade com
                  regulamentações
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                  <Smartphone className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Acesso Mobile</CardTitle>
                <CardDescription>
                  Interface responsiva para acesso em qualquer dispositivo, a
                  qualquer hora
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 lg:text-4xl">
                500+
              </div>
              <div className="text-slate-600">Clínicas Ativas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600 lg:text-4xl">
                50k+
              </div>
              <div className="text-slate-600">Consultas Agendadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600 lg:text-4xl">
                99.9%
              </div>
              <div className="text-slate-600">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600 lg:text-4xl">
                4.9
              </div>
              <div className="flex items-center justify-center gap-1 text-slate-600">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                Avaliação
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Pronto para transformar sua clínica?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-blue-100">
              Junte-se a centenas de clínicas que já confiam no dr.agenda para
              gerenciar seus pacientes e otimizar seus processos
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/authentication">
                  Acessar Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-4 py-12 text-slate-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">dr.agenda</span>
              </div>
              <p className="text-slate-400">
                Plataforma completa para gestão de clínicas médicas
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Produto</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Recursos
                </Link>
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Preços
                </Link>
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Segurança
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Suporte</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Central de Ajuda
                </Link>
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Contato
                </Link>
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Status
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Legal</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Privacidade
                </Link>
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  Termos
                </Link>
                <Link
                  href="#"
                  className="block transition-colors hover:text-white"
                >
                  LGPD
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 dr.agenda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
