// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Depoimento from "./Depoimento"
import { depoimentos } from '@/dataTemp/depoimentos/Depoimentos';
export default function Depoimentos() {
    const Breakpoints = {
        0: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 2,
        },
        920: {
          slidesPerView: 3,
        }
      };
    return(
    <div className="w-[100%] p-4 shadow-xl pb-10 bg-[#458A64]">
    <h1 className="pb-4 text-3xl font-bold text-slate-100">Depoimentos de Sucesso</h1>
    <div className="flex flex-row gap-2 justify-around items-center">
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={3}
            breakpoints={Breakpoints}
            loop={false}
            navigation
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
        >
        <div className="swiper-slide flex items-center justify-center"> 
        {depoimentos.map((depoimento, index) => {
            return(
            <SwiperSlide key={index} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Depoimento className={`${index % 2 == 0 ? "bg-[#147BA7] text-slate-100" : "bg-slate-100"}`} src={depoimento.urlImage} nome={depoimento.nome} profissao={depoimento.profissao} depoimento={depoimento.depoimento}/>
            </SwiperSlide>
            )
        })}
        </div>
        </Swiper>
    </div>
    </div>
    )
}