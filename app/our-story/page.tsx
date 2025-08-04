import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import Image from "next/image" // Importar Image para a imagem da ONU

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-[#000000] dark:via-[#000000] dark:to-[#000000]">
      <div className="backdrop-blur-xl bg-white/40 dark:bg-black/20 min-h-screen">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">QUEM SOMOS</h1>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-200">
                <p className="leading-relaxed mb-4 font-semibold">
                  <strong>VOZ DA TERRA</strong> é um veículo de comunicação plural e independente, sem fins lucrativos e
                  em defesa de tod@s as formas de vida. Produzimos jornalismo popular e socioambiental.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Nossos conteúdos abordam temas como meio ambiente, povos originários, direitos humanos, poder. A cada
                  semana publicamos textos, fotos, vídeo reportagem, vídeo jornalismo, contamos histórias.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">PROPOSTA</h2>
                <p className="leading-relaxed mb-4 font-semibold">
                  Falar é um direito e ninguém deve ser silenciado! Quando a verdade ressoa, a consciência floresce.
                  Nosso propósito é compartilhar vozes dos invisibilizados no território que é um deserto de notícias: a
                  Amazônia.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  O VOZ DA TERRA é uma iniciativa plural de comunicação e conexão direta com o planeta, natureza e sua
                  rica ancestralidade. Nossa missão é transmitir a ideia de consequências e um compromisso firme com as
                  questões ambientais.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  O termo "Voz" simboliza nossa determinação em garantir a inclusão e o direito à liberdade de expressão
                  de comunidades, grupos, coletivos permitindo que compartilhem suas lutas, desafios e necessidades de
                  forma aberta e sincera.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  A palavra "Terra" foi cuidadosamente incorporada para enfatizar nosso propósito de fornecer cobertura
                  jornalística abrangente das questões ambientais em diferentes regiões, abordando tanto os desafios
                  globais quanto as preocupações locais para sua preservação.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  O coração do VOZ DA TERRA é o compromisso inabalável com a transparência nas reportagens, ressaltando
                  a importância de relatar a verdade sobre questões etnoambientais e socioambientais.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Buscamos ser uma fonte confiável de informação, conscientes da responsabilidade de divulgar fatos e
                  dados precisos.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Queremos ressoar vozes da terra, floresta, mananciais, quilombos, povos indígenas, seringueiros,
                  extrativistas, trabalhadores rurais, camponeses, ribeirinhos, pescadores, populações LGBTQIAP+ e
                  Pessoas Com Deficiências (PCDs).
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Nosso objetivo é transmitir uma mensagem poderosa e positiva relacionada à sustentabilidade e ao
                  jornalismo ambiental, inspirando ações que promovam um futuro mais harmonioso entre a humanidade e o
                  meio ambiente.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">QUEM FAZ</h2>
                <p className="leading-relaxed mb-4 font-semibold">
                  O projeto foi criado por profissionais com quase três décadas de dedicação à comunicação e ao
                  jornalismo na Amazônia e no Brasil.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  <strong>Josi Gonçalves</strong> é cofundadora. Ela é jornalista com trabalhos publicados para
                  emissoras de TV (Globo, Record, Rede TV), agências de notícias (BBC, UOL, EFE, Amazônia Real).
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Josi é uma defensora dos direitos humanos e da saúde mental, com foco em questões como o autismo e a
                  esquizofrenia.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Além de sua carreira no jornalismo, ela é ativista, feminista e mãe. Sua ascendência remonta a
                  imigrantes da região Nordeste do país, com raízes em uma família que vivenciou o trabalho escravo
                  moderno.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Josi também possui ampla experiência em assessoria de imprensa e consultoria em comunicação, atendendo
                  tanto ao setor público quanto ao privado, incluindo jornais impressos e digitais.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Possui reportagens investigativas especiais publicadas em vários meios de comunicação sobre direitos
                  humanos, povos tradicionais, cultura e história.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  O trabalho jornalístico dos jornalistas das equipes do Voz, já recebeu apoio de instituições como
                  Artigo 19, Repórter sem Fronteira, Iniciativa Defesa Legal da Mídia (MLDI), Google News Initiative,
                  Rory Peck Trust, Instituto Vladimir Herzog, Rede Cidadã InfoAmazônia, Centro Internacional para
                  Jornalistas (ICFJ)
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  A equipe do VOZ DA TERRA é comprometida com o jornalismo responsável e a promoção de narrativas que
                  abordam a pluralidade das questões cruciais da Amazônia e do Brasil.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">INÍCIO</h2>
                <p className="leading-relaxed mb-4 font-semibold">
                  Depois de acumular uma vasta experiência em comunicação, abrangendo rádio, televisão, jornais
                  impressos e online, bem como colaborações com agências de notícias nacionais e internacionais, os
                  jornalistas do Voz da Terra perceberam que muitos temas sociais de importância crucial não encontravam
                  espaço nas agendas dos veículos de comunicação tradicionais e que isso se devia a fatores como
                  interesses comerciais, considerações políticas e outros obstáculos à livre expressão.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Em 2013, os jornalistas iniciaram sua primeira plataforma digital de informação, a agência de notícias
                  Vanguarda. Em janeiro de 2015, fundaram o FalaRN.com, uma agência de notícias independente focada no
                  jornalismo investigativo e na análise de dados. O FalaRN.com estava situado em São Gonçalo do
                  Amarante, na região metropolitana de Natal, no Rio Grande do Norte, Nordeste do Brasil.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Em 2016, a organização internacional de defesa da liberdade de expressão, Repórteres Sem Fronteira
                  (RSF), revelou que a equipe do FalaRN (Projeto inicial do FalaTV) era alvo de ao menos onze ações
                  judiciais em decorrência de uma série de reportagens que expuseram suspeitas de corrupção envolvendo
                  políticos locais. As reportagens abordaram questões como desvio de fundos públicos, nepotismo e
                  estelionato eleitoral, suspeitas de corrupção da administração pública.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Diante do assédio judicial, os fundadores do FalaRN receberam apoio de organismos internacionais que
                  atuam na proteção de jornalistas como Artigo19, Iniciativa de Defesa Legal da Mídia (MDLI) e a própria
                  RSF.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Em 2017, o projeto FalaRN evoluiu para o FalaTV, com o objetivo de produzir reportagens de maior
                  impacto social, fazendo uso de recursos audiovisuais, vídeos e multimídia. No entanto, devido à falta
                  de apoio financeiro, o projeto ficou inativo por mais de dois anos.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Em janeiro de 2020, a produção foi retomada, ampliando a cobertura para incluir reportagens de âmbito
                  local, nacional e internacional.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  O FalaTV.org foi descontinuado em 2021 em razão dos impactos da pandemia de Covid-19. A falta de apoio
                  e condições financeira pôs um fim ao projeto de comunicação. No mesmo ano, cada um dos fundadores
                  seguiu com projetos individuais, como "FranciscoCosta.jor.br" e "JosiGoncalves.jor.br".
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Em 2023, essas iniciativas foram reformuladas, adotando o nome e conceitos mais plurais com a
                  denominação de "VOZ DA TERRA".
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">PARCEIROS</h2>
                <p className="leading-relaxed mb-4 font-semibold">
                  Os mentores do Voz já receberam incentivo de organismos nacionais e internacionais. No auge da
                  pandemia de Covid-19, o projeto recebeu recursos do Fundo de Auxílio Emergencial ao Jornalismo do
                  Google, que permitiu a produção de conteúdo por três meses. Posteriormente, recebeu apoio da Rory Peck
                  Trust, uma organização que colabora com iniciativas de jornalismo independente e freelancer.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Em 2024, fomos selecionados para o Google News Initiative (GNI) Startups Lab Brasil 2024, que é um
                  programa de 8 semanas que apoia novos empreendedores de jornalismo independente a criarem negócios
                  sustentáveis com foco no jornalismo local e cívico. O GNI tem como parceiro a Echos (Laboratório de
                  Futuros Desejáveis). O programa Startups Lab tem o objetivo de ajudar iniciativas ou startups de
                  jornalismo a desenvolver negócios de conteúdo, notícias e informação.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  O Voz da Terra que faz parte da Rede Cidadã Infoamazônia em parceria com o programa Vozes pela Ação
                  Climática Justa (VAC) foi selecionado para desenvolver reportagens de fôlego para as eleições de 2024.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Em 2024, o Voz da Terra foi contemplado entre candidatos das Américas (EUA, Canadá, América Latina e
                  Caribe) com uma oportunidade de “treinamento de instrutores” para aprender como lidar com workshops
                  comunitários para lidar com a desinformação. Esta iniciativa faz parte do Disarming Disinformation, um
                  projeto global de três anos executado pelo ICFJ com financiamento principal do Scripps Howard Fund.
                  Centro Internacional para Jornalistas (ICFJ) é uma organização profissional sem fins lucrativos
                  localizada em Washington, D.C., Estados Unidos, que promove o jornalismo em todo o mundo.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Um representante do Voz, passou uma semana na Argentina com parte do treinamento e teve apoio
                  financeiro para viagem e desenvolver um projeto de combate a desinformação ambiental nas comunidades
                  da Amazônia rondoniense.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  O Voz faz parte da Rede Nacional de Proteção de Jornalistas e Comunicadores que é uma iniciativa do
                  Instituto Vladimir Herzog com apoio da Repórteres sem Fronteiras, do Intervozes – Coletivo Brasil de
                  Comunicação Social e da Associação Profissão Jornalista (APJor).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">MISSÃO</h2>
                <p className="leading-relaxed mb-4 font-semibold">
                  Fortalecer a democratização da informação e promover a liberdade de expressão, valorizar e defender os
                  direitos humanos.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">LEMA</h2>
                <p className="leading-relaxed mb-4 font-semibold">
                  VOZ DA TERRA é um lugar onde às pessoas terão direito a fala. Vamos garantir a liberdade de expressão
                  para as populações por meio da disseminação de conteúdos como fotos, textos, audiovisuais, vídeos,
                  gráficos, infográficos e checagem de dados.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  São lemas: defender e combater todas as formas de violências. Valorizar os princípios da igualdade,
                  equidade, ética, educação e a informação.
                </p>
                <p className="leading-relaxed mb-4 font-semibold">
                  Nossas reportagens abordam uma ampla gama de temas que se alinham com os 17 objetivos de
                  desenvolvimento sustentável da Organização das Nações Unidas (ONU), buscando contribuir para a
                  transformação do mundo e a promoção do desenvolvimento sustentável.
                </p>

                {/* Imagem no final do texto */}
                <div className="mt-8 text-center">
                  <Image
                    src="/images/17-onu.jpeg"
                    alt="Objetivos de Desenvolvimento Sustentável da ONU"
                    width={1000}
                    height={563}
                    className="mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}
