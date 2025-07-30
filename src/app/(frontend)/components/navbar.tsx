import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react'

import config from '@/payload.config'

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default async function Navbar() {
  const payloadConfig = await config

  return (
    <>
      <HeroUINavbar className="bg-zinc-900 text-white">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-yellow-600" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link className="text-orange-800" aria-current="page" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-orange-800" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link className="text-orange-800" href="https://payloadcms.com/docs" target="_blank">
              docs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="success" href={payloadConfig.routes.admin} variant="flat">
              Admin
            </Button>
          </NavbarItem>
        </NavbarContent>
      </HeroUINavbar>
      <div></div>
    </>
  )
}
