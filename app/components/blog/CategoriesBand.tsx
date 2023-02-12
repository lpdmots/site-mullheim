import React from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import GrammarLogo from "../common/logos/GrammarLogo";
import VocabularyLogo from "../common/logos/VocabularyLogo";

function CategoriesBand() {
    return (
        <section className="section pd-top-5---bottom-5 wf-section">
            <div className="logo-strip-wrapper text-neutral-100 p-3">
                <div className="w-full max-w-7xl flex justify-around" style={{ marginRight: "7%" }}>
                    <div className="flex flex-col justify-center items-center p-2">
                        <p className="font-bold">Grammaire</p>
                        <GrammarLogo height={60} width={60} />
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <p className="font-bold">Vocabulaire</p>
                        <VocabularyLogo height={60} width={60} />
                    </div>
                    <div className="flex flex-col justify-between items-center p-2">
                        <p className="font-bold">Expressions</p>
                        <BsFillChatLeftQuoteFill style={{ height: 60, width: 60 }} />
                    </div>
                    <div className="flex flex-col justify-between items-center p-2">
                        <p className="font-bold">Conseils</p>
                        <MdTipsAndUpdates style={{ height: 60, width: 60 }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoriesBand;