
import { Card, CardHeader, Image} from "@heroui/react";

type LanguageCardProps = {
    imageSrc: string;
    name: string;
}

export default function LanguageCard({
    imageSrc,
    name,
}: LanguageCardProps) {
    return (
        <>
        
                <Card shadow="sm" isHoverable className="flex p-5">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={imageSrc}
                    width={100}
                    height={100} />
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">{name}</CardHeader>
                </Card>
        </>
    );
}