import React, { useEffect, useState } from 'react';
import Section_Heading from '../../Shared/Section Heading/Section_Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Heart } from "phosphor-react";
import { Avatar, Card } from "keep-react";

const Personalized = () => {
    const [RecomOne, setRecomOne] = useState([])
    const [RecomTwo, setRecomTwo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/recom-one')
            .then(res => res.json())
            .then(data => setRecomOne(data))
        fetch('http://localhost:5000/recom-two')
            .then(res => res.json())
            .then(data => setRecomTwo(data))
    }, [])
    return (
        <>
            <div>
                <Section_Heading Sub_Title="P E R S O N A L A I Z E D" Title="Personalized Recommendation" Description="Discover Your Optimal Health Expedition: Unveiling the Ultimate Wellness Odyssey with Customized Insights and Tailored Recommendations Crafted Exclusively for Your Individual Journey" ></Section_Heading>

            </div>
            <div className='flex gap-10 container mx-auto mt-20'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        RecomOne?.map(recom => <div key={recom._id}>
                            <SwiperSlide>
                                <Card
                                    imgSrc={recom.link}
                                    imgSize="md"
                                    className="max-w-xs">
                                    <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200 mx-auto">
                                        <Heart size={20} weight="bold" color="white" />
                                    </Card.Container>
                                    <Card.Container className="flex flex-col items-center justify-center">
                                        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                            <Avatar size="2xl" shape="circle" img={recom.image} />
                                        </Card.Container>
                                        <Card.Container className="mb-3 mt-10 text-center">
                                            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">{recom.author}</Card.Title>
                                            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5 text-left ml-3">{recom.content.slice(0, 80)}</Card.Title>
                                        </Card.Container>
                                        <Card.Container className="flex w-full border-t border-t-metal-50 px-5 py-3">
                                            <Card.Container className="text-center">
                                                <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                                    Posting Date
                                                </Card.Title>
                                                <Card.Title className="!text-body-1 !font-semibold text-metal-800">{recom.date}</Card.Title>
                                            </Card.Container>
                                        </Card.Container>
                                        <Card.Container className="w-full border-t border-t-metal-50 px-5 py-3">
                                            <Card.Container className="">
                                                <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                                    Tags
                                                </Card.Title>
                                                <Card.Title className="!text-body-1 !font-semibold text-metal-800 flex items-center justify-between">{
                                                    recom.tags.map(tag => <>#{tag} </>)
                                                }</Card.Title>
                                            </Card.Container>
                                        </Card.Container>
                                    </Card.Container>
                                </Card>
                            </SwiperSlide></div>)
                    }

                </Swiper>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        RecomTwo?.map(recom => <div key={recom.title}>
                            <SwiperSlide>
                                <Card
                                    imgSrc={recom.link}
                                    imgSize="md"
                                    className="max-w-xs">
                                    <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200  ">
                                        <Heart size={20} weight="bold" color="white" />
                                    </Card.Container>
                                    <Card.Container className="flex flex-col items-center justify-center">
                                        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                                            <Avatar size="2xl" shape="circle" img={recom.image} />
                                        </Card.Container>
                                        <Card.Container className="mb-3 mt-10 text-center">
                                            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">{recom.author}</Card.Title>
                                            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5 text-left ml-3">{recom.content.slice(0, 80)}</Card.Title>
                                        </Card.Container>
                                        <Card.Container className="flex w-full border-t border-t-metal-50 px-5 py-3">
                                            <Card.Container className="text-center">
                                                <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                                    Posting Date
                                                </Card.Title>
                                                <Card.Title className="!text-body-1 !font-semibold text-metal-800">{recom.date}</Card.Title>
                                            </Card.Container>
                                        </Card.Container>
                                        <Card.Container className="w-full border-t border-t-metal-50 px-5 py-3">
                                            <Card.Container className="">
                                                <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                                    Tags
                                                </Card.Title>
                                                <Card.Title className="!text-body-1 !font-semibold text-metal-800 flex items-center justify-between">{
                                                    recom.tags.map(tag => <>#{tag} </>)
                                                }</Card.Title>
                                            </Card.Container>
                                        </Card.Container>
                                    </Card.Container>
                                </Card>
                            </SwiperSlide></div>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Personalized;