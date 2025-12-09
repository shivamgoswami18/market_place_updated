import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  FacebookIcon,
  LinkedInIcon,
  XTwitterIcon,
  YouTubeIcon,
  InstagramIcon,
} from "@/assets/icons/CommonIcons";
import { ReactElement } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface CustomerServiceItem {
  text: string;
  href?: string;
  isLink?: boolean;
}

export interface SocialMediaItem {
  href: string;
}

export const homePageConstants = {
  satisfiedClientsCount: "16334",
  ratingCount: "5",
};

export const customerServiceIcons: ReactElement[] = [
  <ClockIcon />,
  <EnvelopeIcon />,
  <PhoneIcon />,
];

export const socialMediaIcons: ReactElement[] = [
  <FacebookIcon />,
  <LinkedInIcon />,
  <XTwitterIcon />,
  <YouTubeIcon />,
  <InstagramIcon />,
];

export const footerConstants = {
  columns: [
    {
      title: "OM OSS",
      links: [
        { label: "Kontakt", href: "#" },
        { label: "Presse", href: "#" },
        { label: "Karriere", href: "#" },
        { label: "Vår historie", href: "#" },
      ],
    },
    {
      title: "FOR PRIVATPERSON",
      links: [
        { label: "Aktuelt", href: "#" },
        { label: "Inspirasjon", href: "#" },
        { label: "Hjelpesenter", href: "#" },
        { label: "Referanser", href: "#" },
        { label: "Startguide", href: "#" },
      ],
    },
    {
      title: "FOR BEDRIFTER",
      links: [
        { label: "Registrer bedrift", href: "#" },
        { label: "Referanser", href: "#" },
        { label: "Aktuelt", href: "#" },
        { label: "Startguide", href: "#" },
        { label: "Fordeler", href: "#" },
      ],
    },
  ] as FooterColumn[],
  customerService: [
    {
      text: "9-16 på hverdager. Stengt i helger",
      isLink: false,
    },
    {
      text: "bedrift@gmail.com",
      href: "mailto:bedrift@gmail.com",
      isLink: true,
    },
    {
      text: "012 345 6789",
      href: "tel:0123456789",
      isLink: true,
    },
  ] as CustomerServiceItem[],
  legalLinks: [
    { label: "Personvernerklæring", href: "#" },
    { label: "Nettstedkart", href: "#" },
    { label: "Vilkår", href: "#" },
    { label: "Innstillinger for informasjonskapsler", href: "#" },
  ] as FooterLink[],
  socialMedia: [
    {
      href: "#",
    },
    {
      href: "#",
    },
    {
      href: "#",
    },
    {
      href: "#",
    },
    {
      href: "#",
    },
  ] as SocialMediaItem[],
  copyright: `© ${new Date().getFullYear()}. Alle rettigheter forbeholdt.`,
  logo: "LOGO",
  customerServiceTitle: "KUNDESERVICE",
};
