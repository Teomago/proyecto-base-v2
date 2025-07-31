import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Code,
  Divider,
  Link,
  Button,
  Image as HeroUiImage,
} from '@heroui/react'
import { Accordion, AccordionItem } from '@heroui/react'

import config from '@/payload.config'
import './styles.css'
import Hero from './hero'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="flex flex-col h-auto h-max-auto max-w-full items-center overflow-hidden bg-black text-white">
      <div className="2xl:w-full 2xl:h-auto my-8 px-36 flex items-center justify-center">
        <div className="flex flex-col 2xl:w-2/5 px-24">
          <h1 className="text-6xl font-bold">Next.js Site Template For Agency and Portfolio</h1>
          <p className="my-8 text-orange-400">
            Elevate your online presence and impress clients effortlessly! — featuring essential
            integrations, pre-built pages, and customizable components. Modern, responsive design
            with fast loading and SEO optimization.
          </p>
          <Button
            className="w-1/4 bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            radius="md"
          >
            Button
          </Button>
        </div>
        <div className="2xl:w-3/5 px-6">
          <HeroUiImage
            isBlurred
            alt="HeroUI Album Cover"
            className=""
            src="https://images.wallpaperscraft.com/image/single/soldier_helmet_art_123765_1920x1080.jpg"
          />
        </div>
      </div>

      <div className="2xl:w-full 2xl:h-auto my-8 px-36 flex items-center justify-center">
        <div className="2xl:w-2/5 px-6">
          <HeroUiImage
            isBlurred
            alt="HeroUI Album Cover"
            className=""
            src="https://images.wallpaperscraft.com/image/single/code_text_colorful_140555_1080x1920.jpg"
          />
        </div>
        <div className="flex flex-col 2xl:w-3/5 px-24">
          <div className="w-full flex">
            <div className="flex flex-col w-1/2 px-2">
              <h1 className="text-6xl font-bold">Arte</h1>
              <p className="my-8 text-orange-400">
                Elevate your online presence and impress clients effortlessly! — featuring essential
                integrations, pre-built pages, and customizable components. Modern, responsive
                design with fast loading and SEO optimization.
              </p>
            </div>
            <div className="flex flex-col w-1/2 px-2">
              <h1 className="text-6xl font-bold">Programacion</h1>
              <p className="my-8 text-orange-400">
                Elevate your online presence and impress clients effortlessly! — featuring essential
                integrations, pre-built pages, and customizable components. Modern, responsive
                design with fast loading and SEO optimization.
              </p>
            </div>
          </div>
          <h1 className="text-6xl font-bold px-2">
            Multiples disciplinas como base para solucionar lo que se te ocurre
          </h1>
        </div>
      </div>

      <div className="2xl:w-full 2xl:h-auto my-8 px-36 flex items-center justify-center">
        <div className="flex flex-col 2xl:w-3/5 px-24">
          <div className="w-full flex">
            <div className="flex flex-col w-1/2 px-2">
              <h1 className="text-6xl font-bold">Arte</h1>
              <p className="my-8 text-orange-400">
                Elevate your online presence and impress clients effortlessly! — featuring essential
                integrations, pre-built pages, and customizable components. Modern, responsive
                design with fast loading and SEO optimization.
              </p>
            </div>
            <div className="flex flex-col w-1/2 px-2">
              <h1 className="text-6xl font-bold">Programacion</h1>
              <p className="my-8 text-orange-400">
                Elevate your online presence and impress clients effortlessly! — featuring essential
                integrations, pre-built pages, and customizable components. Modern, responsive
                design with fast loading and SEO optimization.
              </p>
            </div>
          </div>
          <h1 className="text-6xl font-bold px-2">
            Multiples disciplinas como base para solucionar lo que se te ocurre
          </h1>
        </div>
        <div className="2xl:w-2/5 px-6">
          <HeroUiImage
            isBlurred
            alt="HeroUI Album Cover"
            className=""
            src="https://images.wallpaperscraft.com/image/single/code_text_colorful_140555_1080x1920.jpg"
          />
        </div>
      </div>

      <div className="2xl:w-full 2xl:h-auto my-8 px-36 flex items-center justify-center"></div>
    </div>
  )
}
