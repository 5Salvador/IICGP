import React from "react";
import Hero from "../../components/Hero";
import logoChurch from "../../assets/church.jpg";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { FaSpotify, FaTelegram } from "react-icons/fa6";
import { FaBible } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { programsCard } from "../../assets/assets";
import { secondProgramsCard } from "../../assets/assets";
import CardInformationList from "./components/CardInformationList";
import ProgramCardList from "../../components/ProgramCardList";
import PageHeader from "../../components/ParceriaHeader";
import TestimonyVideo from "./components/TestimonyVideo";
import PrayerRequestHeader from "./components/PrayerRequestHeader";
import Events from "./components/Events";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full">
        {/* About Section */}
        <div className="hidden container mx-auto  flex-col md:flex-row items-center justify-around space-y-4  p-4 md:p-20">
          <div className="flex  justify-end items-center overflow-hidden rounded-2xl shadow-2xl ">
            <img
              src={logoChurch}
              alt=""
              className="h-96 rounded-2xl hover:scale-110 transition duration-300 overflow-hidden"
            />
          </div>
          <div
            animate={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="md:w-1/2"
          >
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-2xl text-center md:text-start text-yellow-600 md:text-4xl">
                Bem-vindo a Casa da Glória da Palavra
              </p>
              <p className="text-yellow-600 text-center md:text-start">
                Devolvendo a Glória da Palavra
              </p>
              <p className="text-gray-500 italic text-center md:text-start">
                A Casa da Glória da Palavra é um lugar onde as pessoas podem
                aprender e compartilhar a verdade com os outros. Estamos aqui
                para te ajudar a transformar as suas vidas em pessoas melhores.
              </p>
              <div className="flex flex-row gap-2 justify-center md:justify-start">
                <div>
                  <Trophy className="text-yellow-600" />
                </div>
                <p className="font-semibold italic text-gray-600">
                  Vitória e Santidade
                </p>
              </div>
            </div>

            {/* Card with information  */}
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center p-4">
              <div className="flex flex-col mt-10 w-72 p-4 border rounded-lg  md:ml-0 items-center">
                <div className="flex flex-row gap-2">
                  <div>
                    <FaCalendarAlt className="text-yellow-600 text-2xl" />
                  </div>
                  <p className="font-semibold text-wine">Agenda dos Cultos</p>
                </div>
                <div className="text-gray-500 text-center mt-2">
                  <p>Quinta-feira: 18:00 Horas</p>
                  <p>Sexta-feira: 18:00 Horas</p>
                  <p>Domingo: 10:00 Horas</p>
                </div>
              </div>

              <div className="flex flex-col w-72 p-4 border rounded-lg justify-center md:mt-5 items-center">
                <div className="flex flex-row gap-2">
                  <div className="flex items-center">
                    <FaBible className="text-2xl" />
                  </div>
                  <p className="font-semibold text-wine">Ensinos e Programas</p>
                </div>
                <div className="text-gray-500 text-center mt-2">
                  <a href="https://t.me/palavraTV">
                    <div className="flex flex-row gap-2">
                      <div className="flex items-center">
                        <FaTelegram className="text-blue-700 text-xl" />
                      </div>
                      <p>Telegram Audios</p>
                    </div>
                  </a>
                  <a href="">
                    <div className="flex flex-row gap-2">
                      <div className="flex items-center">
                        <FaYoutube className="text-red-700 text-2xl" />
                      </div>
                      <p>Meu Testemunho</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Welcome Section */}
        <div className="w-full flex flex-col md:flex-wrap md:flex-row gap-10 items-start justify-between p-4 md:p-20">
          <div className="max-w-screen-xl p-4 flex flex-col gap-10 justify-center md:flex-row md:p-16 border rounded-2xl">
            <div className="md:max-w-96 max-h-96 rounded-2xl   items-center overflow-hidden">
              <img
                src={logoChurch}
                alt=""
                className=" rounded-2xl hover:scale-110 transition duration-300 overflow-hidden"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col space-y-2">
                <p className="font-bold text-2xl text-center md:text-start text-gold2 md:text-4xl">
                  Bem-vindo a Igreja Internacional Casa da Glória da Palavra
                </p>
                <p className="text-yellow-600 text-center md:text-start font-semibold">
                  Devolvendo a Glória da Palavra
                </p>
                <p className="text-gray-500 text-center md:text-start font-semibold">
                  A Casa da Glória da Palavra é um lugar onde as pessoas podem
                  aprender e compartilhar a verdade com os outros. Estamos aqui
                  para te ajudar a transformar as suas vidas em pessoas
                  melhores.
                </p>
                <div className="flex flex-row gap-2 justify-center md:justify-start">
                  <p className="font-semibold  text-gray-600">
                    Vitória e Santidade
                  </p>
                </div>
                <p className="text-gray-500 text-center md:text-start font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  ipsam laborum. Molestias quia porro necessitatibus excepturi
                  voluptates dicta. Accusantium ea incidunt dolorum assumenda
                  dolorem ullam impedit debitis voluptatibus quaerat laudantium,
                  similique nisi praesentium, minima provident nesciunt quod
                  vitae! Sunt beatae, vitae, dolore ipsa iusto est asperiores
                  aut fugit reprehenderit sapiente ut ex hic quidem ab provident
                  nisi placeat? Dolores magni explicabo fugit quas quos itaque
                  quam. Quaerat officiis doloribus eius corporis nemo voluptates
                  repellendus accusantium, fuga suscipit sequi. Eaque
                  exercitationem voluptatem incidunt veniam et! Facere nobis
                  dolores, saepe labore dolor, necessitatibus, doloremque
                  perspiciatis reprehenderit magnam omnis ipsum aperiam eos
                  harum.
                </p>
              </div>
            </div>
          </div>
          {/*Card dos cultos */}
          <div className="w-96 flex flex-col space-y-4 border  rounded-2xl p-4 md:p-6 bg-[#f7f7f7] shadow-lg">
            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-row gap-2">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-yellow-600 text-3xl" />
                </div>
                <p className="font-bold text-3xl text-yellow-600">Agenda Semanal</p>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-lg">
                  <p className="text-yellow-700">Quinta-feira</p>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="">
                    <p>Culto Geral</p>
                  </div>
                  <div>
                    <p>18:00 Horas</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-lg">
                  <p className="text-yellow-700">Sexta-feira</p>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="">
                    <p>Escola de Casamento e Familia</p>
                  </div>
                  <div>
                    <p>18:00 Horas</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-lg">
                  <p className="text-yellow-700">Domingo</p>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="">
                    <p>Primeiro Culto Geral</p>
                  </div>
                  <div>
                    <p>07:00 Horas</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="">
                    <p>Segundo Culto Geral</p>
                  </div>
                  <div>
                    <p>10:00 Horas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card with information  */}
          </div>
        </div>
      </div>
      <Events />
      <PrayerRequestHeader />
      <ProgramCardList
        programs={programsCard}
        title="Conheça-nos e explore gratuitamente"
      />
      <PageHeader
        firstText="Estamos procurando por parceiros para participarem da obra de Deus conosco"
        secondText="Deus nos deu a visão de pregar a Palavra de Deus sem compromisso em todos os lugares. Se isso ressoar com você, faça parte da nossa equipe de parceria mundial e deixe os outros saberem que “Jesus é o Senhor!” Você vai unir sua fé com a nossa? Junte-se a nós!"
        textButton="Tornar-se Parceiro"
      />
      <TestimonyVideo description="O meu testemunho podcast com Kalicha Sitoe, dificuldades para conceber filhos." />
      <CardInformationList
        programs={secondProgramsCard}
        title="Leia + Assista + Escute"
      />
    </>
  );
};

export default Home;
