import {
  Card,
  Skeleton,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  Button,
  Divider
} from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import React from "react";
import { Github } from "lucide-react";


type ProjectCardProps = {
  imageSrc: string;
  title: string;
  text: string;
  modalImageSrc: string;
  modalText: string;
  techStack?: string[];
  github?: string;
  website?: string;
  status?: string;
};

export default function ProjectCard({
  imageSrc,
  title,
  text,
  modalImageSrc,
  modalText,
  techStack = [],
  github,
  website,
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const modalLines = modalText.split("\n");

  // Safe keys, readable labels
  const techMap: Record<string, { label: string; color: string }> = {
    react: { label: "React", color: "bg-blue-500" },
    electron: {label: "Electron", color: "bg-sky-400"},
    express: { label: "Express", color: "bg-[#F2C986]" },
    node: { label: "Node", color: "bg-[#E1C1C1]" },
    python: { label: "Python", color: "bg-[#EADD86]" },
    django: { label: "Django", color: "bg-[#AFEAE5]" },
    firebase: { label: "Firebase", color: "bg-[#e69138]" },
    csharp: { label: "C#", color: "bg-[#674ea7]" }, // Safe key for C#
    bash: { label: "Bash", color: "bg-[#444444]" },
    javascript: {label: "JavaScript", color: "bg-amber-300"},
    html: {label: "HTML", color: "bg-orange-400"},
    css: {label: "CSS", color: "bg-blue-400"}
  };

  return (
    <>
      {/* Updated Card background colors */}
      <Card isHoverable
  className="py-3 px-4 flex flex-col justify-between gap-2 items-start max-w-xs shadow-lg hover:shadow-xl transition
             bg-neutral-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl min-h-[420px] h-[420px]"
>

        <div className="w-full flex justify-center">
          {!isLoaded ? (
            <Skeleton className="w-[150px] h-[150px] rounded-xl" />
          ) : (
            <Image
              alt="Card background"
              className="object-cover rounded-xl transition-opacity duration-300"
              src={imageSrc}
              width={150}
              height={150}
            />
          )}
        </div>
        <Divider/>
        <CardHeader className="pt-2 px-0 flex-col items-start w-full">
          <h4 className="text-xl font-light mb-1">{title}</h4>
          <p className="text-sm text-default-500 mb-2">{text}</p>
            <Divider className="mb-2"/>
          {/* Tech stack badges */}
            <div className="flex gap-2 mb-2 flex-wrap w-full">
            {techStack.map((tech) => {
              const key = tech.toLowerCase();
              const info = techMap[key] || {
              label: tech,
              color: "bg-gray-200",
              };
              return (
              <div
                key={tech}
                className={`text-xs font-medium px-2 py-1 rounded ${info.color} text-stone-50 whitespace-nowrap`}
              >
                {info.label}
              </div>
              );
            })}
            </div>

          {/* Links */}
          <div className="flex gap-3 text-sm mt-1">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Website
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#739150] flex items-center gap-1"
              >
                <Github size={14} /> GitHub
              </a>
            )}
          </div>

          <div className="mt-4 w-full flex justify-start">
            <Button size="sm" variant="bordered" onClick={onOpen} className={buttonStyles({ color: "primary", radius: "full" }) + " cursor-pointer"} >
              View Details
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          // Updated Modal background colors
          base: "border-[#292f46] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl",
        }}
      >
        <ModalContent>
          <ModalBody className="flex flex-row flex-auto justify-around p-6 items-center">
            {!isLoaded ? (
              <Skeleton className="w-[350px] h-[170px] rounded-xl mb-4" />
            ) : (
              <Image
                alt="Modal background"
                className="object-cover rounded-xl mb-4 w-30"
                src={modalImageSrc}
                width={350}
                height={170} // Changed height to 170 for consistency
              />
            )}

            {isLoaded ? (
              <div className="flex justify-center flex-col items-start max-w-2xl px-4">
                <h4 className="font-bold text-2xl mb-4">{title}</h4>
                {modalLines.map((line, index) => (
                  <p
                    key={index}
                    className="mb-2 text-base text-left whitespace-pre-line"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ) : (
              <div className="h-8 w-3/4 bg-gray-200 rounded mb-2 animate-pulse" />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
