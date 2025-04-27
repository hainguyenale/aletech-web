"use client"

import React, { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import LoadingUI from "@/components/loading-ui"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { solutionsPageQuery } from "@/sanity/queries/solutions"
import PageHeader from "@/components/page-header"

interface Project {
    id: string
    title: string
    category: string
    client: string
    description: string
    image: {
        url: string
        dimensions: {
            width: number
            height: number
        }
    }
}

interface Solution {
    id: string
    label: string
    title: string
    description: string
    features: string[]
    image: {
        url: string
        dimensions: {
            width: number
            height: number
        }
    }
    benefits: string[]
    caseStudies: Project[]
}

interface SolutionsData {
    pageHeader: {
        title: string
        description: string
    }
    solutions: Solution[]
    cta: {
        title: string
        description: string
        primaryButton: {
            text: string
            link: string
        }
        video?: {
            url: string
        }
        videoThumbnail?: {
            url: string
        }
    }
}

export default function SolutionsPageClient() {
    const [data, setData] = useState<SolutionsData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isChangingLanguage, setIsChangingLanguage] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const { language } = useLanguage()
    const controls = useAnimation()
    const [ctaRef, ctaInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (ctaInView) {
            controls.start("visible")
        }
    }, [controls, ctaInView])

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!initialLoad) {
                    setIsChangingLanguage(true)
                    await new Promise(resolve => setTimeout(resolve, 800))
                }

                const result = await client.fetch(solutionsPageQuery, { language })
                setData(result)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setIsLoading(false)
                setIsChangingLanguage(false)
                setInitialLoad(false)
            }
        }

        fetchData()
    }, [language, initialLoad])

    if (!data) {
        return null
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    }

    return (
        <React.Fragment>
            <LoadingUI isVisible={isChangingLanguage} />

            {!isChangingLanguage && <main className="min-h-screen bg-background text-foreground">
                <Navbar />

                {/* Page Header */}

                <PageHeader title={data.pageHeader.title} description={data.pageHeader.description} />

                {/* Solutions Grid */}
                <section className="py-20 bg-background">
                    <div className="container px-4 mx-auto">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            {data.solutions.map((solution) => (
                                <motion.div
                                    key={solution.id}
                                    variants={itemVariants}
                                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden group"
                                >
                                    <Link href={`/solutions/${solution.id}`} className="block">
                                        <div className="relative h-48 overflow-hidden">
                                            {solution.image && solution.image.url ? (
                                                <div className="relative w-full aspect-video">
                                                    <Image
                                                        src={solution.image.url}
                                                        alt={solution.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-xl"
                                                        priority={false}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-full aspect-video bg-gray-200 flex items-center justify-center rounded-xl">
                                                    <span className="text-gray-500">No image</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs mb-4">
                                                <span className="text-primary font-medium">{solution.label}</span>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                                {solution.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">{solution.description}</p>
                                            <div className="flex items-center text-primary text-sm font-medium">
                                                Learn More
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-b from-background to-background/95">
                    <div className="container px-4 mx-auto">
                        <motion.div
                            ref={ctaRef}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                                },
                            }}
                        >
                            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.cta.title}</h2>
                                        <p className="text-muted-foreground mb-6">
                                            {data.cta.description}
                                        </p>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link href={data.cta.primaryButton.link}>
                                                <Button className="bg-primary hover:bg-primary/90 text-white">
                                                    {data.cta.primaryButton.text}
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </motion.div>
                                    </div>

                                    {data.cta.video && (
                                        <div className="relative">
                                            <motion.div
                                                className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-xl opacity-50"
                                                animate={{
                                                    opacity: [0.3, 0.5, 0.3],
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    repeatType: "reverse",
                                                }}
                                            ></motion.div>
                                            <div className="relative aspect-video w-full bg-card/70 rounded-xl overflow-hidden flex items-center justify-center">
                                                <video
                                                    className="h-full object-cover"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    {...(data.cta.videoThumbnail?.url && {
                                                        poster: data.cta.videoThumbnail.url
                                                    })}
                                                >
                                                    <source src={data.cta.video.url} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </main>}

        </React.Fragment>
    )
} 