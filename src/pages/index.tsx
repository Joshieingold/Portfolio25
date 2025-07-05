import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Button, Divider } from "@heroui/react";
import LanguageCard from "@/components/languageCard";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [languageView, setLanguageView] = useState("Front-End");
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Hello I'm&nbsp;</span>
          <span className={title({ color: "violet" })}>Josh&nbsp;</span>
          <br />
          <span className={title()}> Your full-stack developper </span>
          <div className={subtitle({ class: "mt-4" })}> I build efficient and beautiful software.</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
          <Button
            as={Link}
            href="/contact"
            className={
              buttonStyles({ color: "primary", radius: "full", variant: "shadow" }) +
              " cursor-pointer"
            }
          >
            Contact
          </Button>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <Divider className="my-8 sm:my-14" />
        <div className="w-full px-2 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center gap-4 mb-4">
            <div>
              <div className="mt-1 text-2xl sm:text-3xl text-gray-600 dark:text-white">
                Languages for all your needs
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap justify-end gap-2">
              <Button
                size="sm"
                className="flex-1 min-w-[90px]"
                onPress={() => setLanguageView("Front-End")}
              >
                Front-End
              </Button>
              <Button
                size="sm"
                className="flex-1 min-w-[90px]"
                onPress={() => setLanguageView("Back-End")}
              >
                Back-End
              </Button>
              <Button
                size="sm"
                className="flex-1 min-w-[90px]"
                onPress={() => setLanguageView("Database")}
              >
                Database
              </Button>
              <Button
                size="sm"
                className="flex-1 min-w-[90px]"
                onPress={() => setLanguageView("Other")}
              >
                Other
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {languageView === "Front-End" && (
              <>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"} name="Electron"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"} name="React"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} name="JavaScript"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} name="Typescript"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} name="TailWind"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} name="CSS"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} name="HTML"/>
              </>
            )}
            {languageView === "Back-End" && (
              <>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"} name="Java"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"} name="Python"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"} name="C#"/>
                {/* Add more back-end languages here */}
              </>
            )}
            {languageView === "Database" && (
              <>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"} name="Firebase"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"} name="PostgreSQL"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"} name="SqLite"/>
              </>
            )}
            {languageView === "Other" && (
              <>
                <LanguageCard imageSrc={"https://images.seeklogo.com/logo-png/50/2/github-icon-logo-png_seeklogo-503247.png"} name="GitHub"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"} name="Git"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"} name="NodeJS"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"} name="Bash"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"} name="NPM"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuget/nuget-original.svg"} name="Nuget"/>
                <LanguageCard imageSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-plain.svg"} name="VIM"/>
              </>
            )}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
