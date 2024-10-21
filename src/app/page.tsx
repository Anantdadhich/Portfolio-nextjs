"use client";


import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FaGear } from "react-icons/fa6";
import { ProjectCard } from "@/components/project-card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

import ContactForm from "@/components/Contact-form";
import MatrixRain from "@/components/ui/matrix-bg";

import TypingEffect from "@/components/ui/typing-effect";
import RevealAnimation from "@/components/ui/reveal-animation";

const BLUR_FADE_DELAY = 0.5;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <MatrixRain />
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="flex gap-2 justify-start items-center">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                
              </div>
              <TypingEffect
                className="max-w-[600px] md:text-xl text-green-500 [text-shadow:0_0_10px_rgba(0,255,0,0.5)]"
                text={DATA.description}
                delay={0.0025}
                delayStart={0.75}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={"/profile.jpg"} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="social">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex gap-2 justify-center items-center">
            👉
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <Tooltip key={name}>
                  <TooltipTrigger asChild className="">
                    <Link
                      href={social.url}
                      target="_blank"
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                          size: "icon",
                        }),
                        "size-6 sm:size-10"
                      )}
                    >
                      <social.icon className="size-4 sm:size-5 hover:size-4 transition-all" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            👈
          </div>
          <div className="flex justify-center items-center mt-3">
            <Link href="#projects">
              <Button className="flex rounded-none justify-center items-center gap-2.5 group bg-green-700 hover:bg-green-600 text-white">
                View Projects <FaGear className="group-hover:animate-spin" />
              </Button>
            </Link>
          </div>
        </BlurFade>
      </section>
<section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-xl font-bold">Tech Stack</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <RevealAnimation
              key={id}
              className="bg-white px-2 text-green-800 text-sm transition-all duration-300 ease-in-out hover:bg-green-800 hover:text-white hover:scale-110"
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            >
              {skill}
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>   
      
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block text-green-800 bg-gray-200 dark:bg-white text-background px-3 py-1 text-sm transition-transform duration-300 hover:scale-105">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl hover:text-green-600 transition-colors duration-300">
                Check out my latest work
              </h2>
              <p className="text-green-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed hover:text-green-400 transition-colors duration-300">
                I&apos;ve worked on a variety of projects, from simple
                websites to complex web applications. Here are a few of my
                favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <div className="transition-transform duration-300 hover:scale-[1.02]">
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  links={project.links}
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="space-y-3">
              <div className="inline-block text-green-800 bg-gray-200 dark:bg-white  text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed !text-green-500 [text-shadow:0_0_10px_rgba(0,255,0,0.5)]">
                Wanna connect with me? Drop me a message on my{" "}
                <Link
                  target="_blank"
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 underline"
                >
                  Twitter
                </Link>{" "}
                See you there✨
              </p>
            </div>
            <ContactForm />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}