"use client";
import { PiArrowBendLeftDownDuotone } from "react-icons/pi";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { SlideFromBottom } from "../../animations/Slides";

export const HeroVideo = () => {
    return (
        <SlideFromBottom>
            <>
                <div className="flex w-full justify-end">
                    <PiArrowBendLeftDownDuotone className="text-2xl md:text-4xl mt-2 lg:mt-4 mr-2" />
                    <h2 className="display-4 text-right mb-0">Start French Now</h2>
                </div>
                <div id="hero-video" className="cms-featured-image-wrapper image-wrapper border-radius-40px mx-auto p-0">
                    <LiteYouTubeEmbed id="KoUzwH5zPlU" title="How to build a sentence in French" />
                </div>
            </>
        </SlideFromBottom>
    );
};