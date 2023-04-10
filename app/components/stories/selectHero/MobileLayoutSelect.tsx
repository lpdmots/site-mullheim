import { Adventure } from "@/app/types/stories/adventure";
import { PortableText } from "@portabletext/react";
import React, { useMemo } from "react";
import { Carousel } from "../../animations/Carousel";
import { RichTextComponents } from "../../sanity/RichTextComponents";
import { HeroCard } from "./HeroCard";
import Link from "next/link";
import { StartStoryButton } from "./StartStoryButton";
import { ElementProps } from "@/app/types/stories/element";

export const MobileLayoutSelect = ({ story, element }: { story: Adventure; element: ElementProps }) => {
    const carouselData = useMemo(
        () =>
            story.heros?.map((hero) => {
                const skills = hero.variables?.filter((variable) => variable.nature === "skill");
                return <HeroCard key={hero.name} hero={hero} skills={skills} />;
            }),
        [story]
    );
    return (
        <div className="flex flex-col h-full gap-6 py-6" style={{ maxWidth: 600 }}>
            <div className=" items-center justify-center text-center">
                <PortableText value={story.selectContent} components={RichTextComponents} />
            </div>
            <div className="flex grow  items-center justify-around">
                <div className="h-full flex items-center justify-center text-center w-full">{story.heros?.length && <Carousel data={carouselData} />}</div>
            </div>
            <div className="flex items-center justify-center text-center gap-6">
                <Link href="/stories" className="hidden md:block btn-secondary">
                    Retour
                </Link>
                <StartStoryButton story={story} element={element} />
            </div>
        </div>
    );
};