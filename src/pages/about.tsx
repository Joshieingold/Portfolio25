import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About Me</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <Image
              alt="Profile photo"
              className="object-cover rounded-full"
              src={
                "https://media.licdn.com/dms/image/v2/D5603AQHLPgxnuW79DA/profile-displayphoto-shrink_400_400/B56ZTUlRnWGoAg-/0/1738733329542?e=1757548800&v=beta&t=AAPhbVBGpQY17mMY9YClBWap7-Wkfelb8ZWR01pfLjU"
              }
              width={300}
              height={300}
              isBlurred
              radius="full"
            />
            <div className="flex gap-4 mt-4">
              <a
                href="https://open.kattis.com/users/josh-lynch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kattis Profile"
              >
                <img
                  src="https://open.kattis.com/images/kattis/judge.png?6dd056="
                  alt="View My Kattis Account"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/josh-lynch-8b36242b3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn icon"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://github.com/joshieingold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <img
                  src="https://images.seeklogo.com/logo-png/50/2/github-icon-logo-png_seeklogo-503247.png"
                  alt="GitHub icon"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p>
              Hi, I’m Joshua Lynch — a self-taught software developer with a passion for building practical tools that solve real problems. I currently work at Rogers in a warehouse role, but I’ve gone beyond my job description by developing internal applications that have significantly improved our workflow. My background may not be traditional — no formal CS degree — but I’ve built powerful tools from the ground up. I’m fluent in many different programming lanagauges but most of all I’m driven by curiosity, real-world utility, and a love for efficient systems. I’m always learning, and always building.
            </p>
            <br />
            <p>
              Outside of coding, I’m an 1800-rated chess player and have hosted a Canadian Federation of Chess tournament. I also enjoy tackling algorithmic challenges and currently rank 22 on my former university’s Kattis leaderboard. Whether it's through code, strategy, or competition, I love working on things that challenge me to think deeply and grow.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
