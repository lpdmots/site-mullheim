import Image from "next/image";
import Link from "next-intl/link";
import urlFor from "@/app/lib/urlFor";
import { BsCaretRightFill } from "react-icons/bs";
import TabelVoc from "./TabelVoc";
import { FaFileDownload } from "react-icons/fa";
import VideoBlog from "./VideoBlog";
import Flashcards from "../exercises/Flashcards";
import SimpleExercise from "../exercises/simpleExercise/SimpleExercise";

const cloudFrontDomain = process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN_NAME;

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="cms-featured-image-wrapper image-wrapper border-radius-30px mx-auto my-12" style={{ maxWidth: "700px" }}>
                    <Image src={urlFor(value).url()} height={700} width={700} loading="eager" alt="Blog Post Image" className="image object-contain rounded-lg" />
                </div>
            );
        },
        videoBlog: ({ value }: any) => <VideoBlog values={value} />,
        tabelVoc: ({ value }: any) => <TabelVoc data={value} />,
        flashcards: ({ value }: any) => {
            return <Flashcards data={value} />;
        },
        simpleExercise: ({ value }: any) => {
            return <SimpleExercise data={value} />;
        },
    },
    list: {
        bullet: ({ children }: any) => <ul className="ml-4 sm:ml-10 py-5 list-disc space-y-5">{children}</ul>,
        number: ({ children }: any) => <ol className="mt-lg list-decimal">{children}</ol>,
    },
    block: {
        h1: ({ children }: any) => <h1 className="display-1 my-12">{children}</h1>,
        h2: ({ children }: any) => <h2 className="display-2 my-12">{children}</h2>,
        h3: ({ children }: any) => <h3 className="display-3 my-12">{children}</h3>,
        h4: ({ children }: any) => <h4 className="display-4 my-12">{children}</h4>,
        blockquote: ({ children }: any) => <blockquote className="mt-12">{children}</blockquote>,
        translation: ({ children }: any) => (
            <div className="translation pl-8 md:pl-12" style={{ borderLeft: "solid 8px var(--neutral-600)" }}>
                <p className="italic">{children}</p>
            </div>
        ),
        hidden: ({ children }: any) => <p className="hidden">{children}</p>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const href = value.download ? cloudFrontDomain + value.href : value.href;
            const rel = value.href[0] !== "/" ? "noreferrer noopener" : undefined;
            const target = value.target ? "_blank" : "_self";
            return (
                <span className="flex justify-center my-8">
                    <Link className="btn-primary w-button" href={href} target={target} rel={rel} download={value.download}>
                        {value.download && <FaFileDownload className="mr-2" />}
                        {children}
                    </Link>
                </span>
            );
        },
        hightlightRed: ({ children }: any) => <span className="heading-span-secondary-4">{children}</span>,
        hightlightBlue: ({ children }: any) => (
            <span className="heading-span-secondary-2" style={{ whiteSpace: "normal" }}>
                {children}
            </span>
        ),
        hightlightOrange: ({ children }: any) => <span className="heading-span-secondary-1">{children}</span>,
        left: ({ children }: any) => <p style={{ textAlign: "left" }}>{children}</p>,
        center: ({ children }: any) => <p style={{ textAlign: "center" }}>{children}</p>,
        right: ({ children }: any) => <p style={{ textAlign: "right" }}>{children}</p>,
        inlineTranslation: ({ children }: any) => (
            <span className="translation italic underline ml-1">
                <BsCaretRightFill style={{ color: "var(--neutral-600)", marginRight: 2 }} />
                {children}
            </span>
        ),
    },
};
