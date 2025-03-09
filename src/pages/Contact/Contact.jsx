import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Form from "./components/Form";
import { imageMeta } from "../../assets/assets";
import PageHeader from "../../components/PageHeader";
import ContactCard from "./components/ContactCard";

const Contact = () => {
  return (
    <>
      <Header />
      <Navbar />
      <PageHeader Heading="Contate-nos" firstText="Ano da Igreja e Metas alcancadas"/>
      <ContactCard />
      <div className="container mx-auto flex flex-col md:flex-row p-6 justify-between gap-10 md:p-20">
        <div className="md:w-1/2 flex flex-col space-y-4">
          {/* <img src={imageMeta} alt="" className='rounded-2xl' /> */}
          <p className="text-gray-600 text-2xl md:text-2xl font-bold">
            Envie-nos a sua mensagem
          </p>
          <div className="flex flex-col space-y-2 text-lg text-black">
            <p>
              Precisando de oração, apoio ou apenas alguém para conversar?
              Envie-nos uma mensagem! Estamos aqui para você.
            </p>
            <p>
              Sua jornada de fé é importante para nós. Compartilhe suas dúvidas,
              alegrias e preocupações. Nossa equipe está pronta para ouvir e
              oferecer suporte.
            </p>
            <p>
              Acreditamos no poder da comunidade. Envie-nos uma mensagem e
              conecte-se com pessoas que se importam com você
            </p>
          </div>
          <p className='text-gray-600 text-2xl md:text-2xl font-bold'>Escreva aqui e sinta-se a vontade</p>
          <div className="flex flex-col space-y-2 text-lg text-black">
            <p>Se gostarias de efectuar Pedido de Oração, podes acessar <a href="" className="text-red-700 underline">Pedido de Oração</a> Prometemos que o seu pedido será tratado de forma séria e confidencial e que a nossa equipa irá rezar com confiança e expectativa para que a sua necessidade seja atendida de acordo com a Palavra de Godilitis.</p>

          </div>
        </div>
        <div className="md:w-1/2">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
