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
  Divider,
  Link,
  Button,
  Image as HeroUiImage,
} from '@heroui/react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="flex flex-col h-screen h-max-auto max-w-full items-center justify-center overflow-hidden bg-black text-white">
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start!">
            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
          </CardHeader>
          <HeroUiImage
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-4.jpeg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start!">
            <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
            <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
          </CardHeader>
          <HeroUiImage
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-3.jpeg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start!">
            <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
          </CardHeader>
          <HeroUiImage
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-2.jpeg"
          />
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <HeroUiImage
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://heroui.com/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <HeroUiImage
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://heroui.com/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex grow gap-2 items-center">
              <HeroUiImage
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://heroui.com/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night&#39;s sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
