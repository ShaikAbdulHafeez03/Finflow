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
    alt: string;
}

// Sample data for the images (replace with your actual data)
const images: ImageData[] = [
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.49_3fbf2a11 - Copy.jpg", alt: "Partner 1" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.49_3fbf2a11.jpg", alt: "Partner 2" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.49_5c724334 - Copy.jpg", alt: "Partner 3" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.49_5c724334.jpg", alt: "Partner 4" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_0cec26e1.jpg", alt: "Partner 5" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_1f93b826.jpg", alt: "Partner 6" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_45866f5d.jpg", alt: "Partner 7" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_46afeee8.jpg", alt: "Partner 8" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_568af89e.jpg", alt: "Partner 9" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_ad3bc6b9.jpg", alt: "Partner 10" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_bc176a15.jpg", alt: "Partner 11" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_bc673ff3.jpg", alt: "Partner 12" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_be924f03.jpg", alt: "Partner 13" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_cd0a2e28.jpg", alt: "Partner 14" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_d31f2dbb.jpg", alt: "Partner 15" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.50_f8e53d56.jpg", alt: "Partner 16" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.53_55c8004f.jpg", alt: "Partner 17" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.55_2673aae1.jpg", alt: "Partner 18" },
    { src: "/assets/partners/WhatsApp Image 2025-09-07 at 12.57.55_8232204f.jpg", alt: "Partner 19" },
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
                            delay: 1300,
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
                            <CarouselItem key={index} className="basis-1/6">
                                <div className="p-0">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-0">
                                            <div style={{ width: '100%', height: '60px', position: 'relative' }}>
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
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
