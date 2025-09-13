'use client'
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

// Define the data structure for your images
interface ImageData {
    src: string;
}

// Sample data for the images (replace with your actual data)
const images: ImageData[] = [
    { src: "/assets/partners/ACE.jpg" },
    { src: "/assets/partners/amada.png" },
    { src: "/assets/partners/BFW.png" },
    { src: "/assets/partners/DMG.png" },
    { src: "/assets/partners/doosan.jpg" },
    { src: "/assets/partners/download.jpg" },
    { src: "/assets/partners/Electronica logo.jpg" },
    { src: "/assets/partners/fanuc.jpg" },
    { src: "/assets/partners/husky.png" },
    { src: "/assets/partners/hyu.png" },
    { src: "/assets/partners/images.png" },
    { src: "/assets/partners/jyoti.jpg" },
    { src: "/assets/partners/LMW.png" },
    { src: "/assets/partners/logo-mcs.png" },
    { src: "/assets/partners/makino.jpg" },
    { src: "/assets/partners/mazak.jpg" },
    { src: "/assets/partners/mitsu.jpg" },
    { src: "/assets/partners/mitsu.png" },
    { src: "/assets/partners/trumpf.png" },
];

export function PartnerWithUs() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Our Partners</h2>
                    <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                        Trusted by industry leading companies
                    </p>
                </div>
                {/* Centered and responsive carousel */}
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 700,
                        }),
                    ]}
                    opts={{
                        loop: true,
                        align: 'center', // Ensures the carousel starts with the first item centered
                        slidesToScroll: 1,
                        // Set the number of visible items based on screen size
                        breakpoints: {
                            0: {
                                slidesToScroll: 1,
                                dragFree: true,
                                containScroll: 'trimSnaps',
                            },
                            640: { // sm breakpoint
                                slidesToScroll: 1,
                                dragFree: true,
                                containScroll: 'trimSnaps',
                            },
                            768: { // md breakpoint
                                slidesToScroll: 1,
                                dragFree: true,
                                containScroll: 'trimSnaps',
                            },
                            1024: { // lg breakpoint
                                slidesToScroll: 1,
                                dragFree: true,
                                containScroll: 'trimSnaps',
                            },
                        },
                    }}
                    className="w-full max-w-3xl mx-auto lg:h-24"
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className=" basis-1/3 lg:basis-1/6 sm:basis-1/3">
                                <div className="p-0">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0 ">
                                            <div style={{ width: '100%', height: '60px', position: 'relative' }}>
                                                <Image
                                                    src={image.src}
                                                    alt="{image.alt}"
                                                    layout="fill" // Make the image fill the container
                                                    objectFit="contain" // Maintain aspect ratio and fit within the container
                                                    style={{ objectPosition: 'center' }} // Center the image
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Optional navigation controls */}
                    {/* <CarouselPrevious />
          <CarouselNext /> */}
                </Carousel>
            </div>
        </section>
    )
}
