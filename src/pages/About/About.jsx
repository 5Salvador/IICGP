import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { logoChurch } from "../../assets/assets";
import { pastores } from "../../assets/assets";

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto p-6 md:p-20 ">
        <div className="w-full flex flex-col space-y-10 md:p-6">
          <p className="text-4xl text-gray-600 font-bold">Sobre-Nós</p>

          {/* primeiro text */}
          <div className="w-full flex flex-col md:flex-row space-y-4 justify-between">
            <div className="md:w-[900px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                ducimus consequuntur commodi illum iste? Eum aperiam quasi nam
                beatae qui labore repellat vero facere. Impedit reiciendis
                maiores veniam aliquid minima laudantium commodi deleniti quia
                expedita. Sapiente soluta labore rerum deleniti repellendus
                maiores at modi nesciunt eos tenetur natus ipsum corporis vitae,
                numquam consectetur accusamus maxime animi eveniet mollitia
                ducimus unde perferendis possimus dolorum? Ipsam qui nemo
                numquam obcaecati non doloribus quae, deserunt sint placeat
                dolorum quia optio eius consequuntur illum asperiores? Nesciunt
                fugiat pariatur quis amet labore ducimus consequatur quibusdam
                deserunt eum consectetur hic minus, illo laborum porro,
                aspernatur assumenda! Ducimus esse molestiae ad placeat, hic
                sequi molestias facere expedita perspiciatis veniam ea,
                assumenda repellendus dolorum repellat dolor ipsa deserunt non.
                Eum corrupti aliquam, quam expedita ea odit tenetur. Explicabo
                optio, sint tenetur, doloribus nulla, dolor laudantium nam
                aliquid voluptatem esse culpa pariatur eaque ut deserunt
                inventore illum itaque eos voluptatum perspiciatis mollitia in
                quos dolorum? Beatae repellendus impedit illum? Iste sunt
                placeat sit, ipsam deserunt ullam velit quis omnis tenetur modi
                minima accusantium enim laudantium et facere eum totam animi
                quibusdam repellat temporibus quasi ad harum. Eligendi, debitis
                ducimus. Excepturi quasi est dicta harum, magni numquam facilis
                quaerat eum.
              </p>
            </div>
            <div className="md:w-1/4">
              <div>
                <img src={logoChurch} alt="" />
              </div>
            </div>
          </div>

          {/* segundo text */}
          <div className="w-full flex flex-col md:flex-row space-y-4 justify-between">
            <div className="md:w-1/3">
              <img src={pastores} alt="" />
            </div>
            <div className="md:w-[800px] flex">
              <div className="flex flex-col space-y-4">
                <p className="text-gray-600 text-2xl font-semibold">
                  Nossos pastores
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima ducimus consequuntur commodi illum iste? Eum aperiam
                  quasi nam beatae qui labore repellat vero facere. Impedit
                  reiciendis maiores veniam aliquid minima laudantium commodi
                  deleniti quia expedita. Sapiente soluta labore rerum deleniti
                  repellendus maiores at modi nesciunt eos tenetur natus ipsum
                  corporis vitae, numquam consectetur accusamus maxime animi
                  eveniet mollitia ducimus unde perferendis possimus dolorum?
                  Ipsam qui nemo numquam obcaecati non doloribus quae, deserunt
                  sint placeat dolorum quia optio eius consequuntur illum
                  asperiores? Nesciunt fugiat pariatur quis amet labore ducimus
                  consequatur quibusdam deserunt eum consectetur hic minus, illo
                  laborum porro, aspernatur assumenda! Ducimus esse molestiae ad
                  placeat, hic sequi molestias facere expedita perspiciatis
                  veniam ea, assumenda repellendus dolorum repellat dolor ipsa
                  deserunt non. Eum corrupti aliquam, quam expedita ea odit
                  tenetur. Explicabo optio, sint tenetur, doloribus nulla, dolor
                  laudantium nam aliquid voluptatem esse culpa pariatur eaque ut
                  deserunt inventore illum itaque eos voluptatum perspiciatis
                  mollitia in quos dolorum? Beatae repellendus impedit illum?
                  Iste sunt placeat sit, ipsam deserunt ullam velit quis omnis
                  tenetur modi minima accusantium enim laudantium et facere eum
                  totam animi quibusdam repellat temporibus quasi ad harum.
                  Eligendi, debitis ducimus. Excepturi quasi est dicta harum,
                  magni numquam facilis quaerat eum.
                </p>
              </div>
            </div>
          </div>

          {/* terceira seccao */}
        </div>
        <hr className="border-2 my-20" />
        <div className="flex flex-col space-y-10 md:p-6">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              esse consectetur, quidem asperiores assumenda quasi enim amet,
              numquam eos vel adipisci accusantium libero eaque architecto
              explicabo? Illo molestiae et ullam, dolorum alias consectetur ipsa
              aliquid tenetur exercitationem explicabo voluptatum mollitia culpa
              rem nisi ut vero velit, voluptate, fugiat laudantium. Accusantium
              quaerat officiis quasi veritatis neque eligendi commodi nesciunt
              eos aperiam voluptas tempora animi porro ipsa sint nisi, assumenda
              dolorum id blanditiis asperiores voluptatibus corporis! Provident
              expedita labore aspernatur voluptate perspiciatis nam, officiis
              similique molestiae natus necessitatibus quibusdam quasi unde
              asperiores numquam error sint modi debitis laboriosam distinctio a
              dolore, quidem, quaerat placeat. Velit sequi non sed nostrum eum
              reiciendis, blanditiis maiores, aut error earum fugiat corporis
              expedita iste eius fugit? Sint fuga accusamus corporis iure
              commodi repellat aperiam, eos quasi inventore aliquid laboriosam
              nulla temporibus recusandae ab debitis alias totam nobis maiores,
              facilis pariatur ut! Repudiandae, aliquam! Culpa molestiae
              repellendus unde, quibusdam aut minima tempora nobis corporis nemo
              blanditiis velit quam veniam eveniet magnam a assumenda dolore
              amet mollitia incidunt. Labore, nemo ipsum aperiam quam tempore
              facilis quas, expedita, dolorem quia repellendus atque rem! Id
              tenetur hic tempore ad nisi veniam cumque, magni eum dolore est
              expedita molestias, nemo facere!
            </p>
          </div>

          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              maxime nam perspiciatis consequuntur eligendi beatae nemo
              accusantium reprehenderit aperiam. Omnis ut iusto quisquam
              perferendis dolore ipsum quidem harum dolor repellat magnam
              aspernatur nisi laboriosam tempora tenetur, ea amet eligendi odit
              doloribus, aut laborum fugiat ullam. Voluptatibus mollitia
              aspernatur illo soluta veritatis ullam nobis error itaque
              laboriosam voluptatem suscipit eligendi dolorem earum facere est
              sed corrupti, iure nisi cupiditate recusandae harum vero iste quos
              ea. Consequatur explicabo modi inventore accusamus sint deleniti
              eum? Deleniti, velit praesentium recusandae voluptatem blanditiis
              atque dolorem in est eaque quas possimus explicabo, vitae,
              pariatur earum cupiditate inventore officia vel! Fugiat, amet
              voluptatibus. Corrupti dolores culpa totam. Quidem sapiente
              provident et facere illum voluptas, unde, odit numquam sed
              doloribus ratione in optio facilis. Harum quidem deleniti neque id
              dignissimos sed cumque inventore molestias fugit commodi repellat
              quisquam possimus, sit magnam excepturi quis, rerum molestiae
              architecto, quam officiis aliquid quo. Suscipit laudantium sed
              aperiam placeat tempore atque numquam facilis est. Id quo ducimus
              accusantium, iusto placeat reiciendis tempora doloremque nemo
              cumque, blanditiis vitae aliquam hic ipsum, quis saepe! Libero,
              aliquid atque exercitationem autem molestias vero, accusantium
              voluptate consequuntur quod architecto nesciunt porro asperiores
              repellat? Sunt minus dolores corrupti tempore deserunt. Id
              dignissimos veniam eligendi autem soluta non, aliquam voluptate
              expedita quae dolorem consequatur possimus porro, nulla pariatur
              ipsum accusantium deleniti aliquid est tempora inventore officiis?
              Accusamus, molestias quibusdam. Fuga earum nobis minima quidem
              necessitatibus dolor, iusto aut voluptatum. Facilis cum dolorum
              neque reiciendis enim maiores vitae labore omnis?
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
