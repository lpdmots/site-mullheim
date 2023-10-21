"use client";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { shuffleArray } from "@/app/lib/utils";
import { useSimpleExerciseStore } from "@/app/stores/simpleExerciseStore";
import { SlideInOneByOneChild, SlideInOneByOneParent } from "../../animations/Slides";
import { FeedbackMessage, getSelectPoints, getSelectsInputsData } from "./SimpleExercise";
import ValidationButton from "./ValidationButton";

export const SelectLayout = ({ _key }: { _key: string }) => {
    const { updateScore, getExercise } = useSimpleExerciseStore();
    const { questions, questionIndex } = getExercise(_key);
    const [disabled, setDisabled] = useState(true);
    const currentQuestion = useMemo(() => {
        const currentQuestion = questions[questionIndex];
        currentQuestion.responses = shuffleArray(currentQuestion.responses);
        return currentQuestion;
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const scoreCalculation = currentQuestion.options?.scoreCalculation || 1;
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const [selects, setSelects] = useState({} as { [key: string]: string });
    const handleSelect = useCallback(
        (responseNumber: number, e: ChangeEvent<HTMLSelectElement>) => {
            setSelects((prevSelects) => ({ ...prevSelects, [responseNumber]: e.target.value }));
        },
        [setSelects]
    );

    const { prompt, correctResponses, isBottomSelect, isError } = useMemo(() => getSelectsInputsData(currentQuestion, handleSelect, "select"), [currentQuestion, handleSelect]);
    const feedbackMessage = useMemo(() => <FeedbackMessage isCorrect={isCorrect} correctResponses={correctResponses} />, [isCorrect, correctResponses]);

    useEffect(() => {
        if (Object.keys(selects).length === Object.keys(correctResponses).length) setDisabled(false);
        else setDisabled(true);
    }, [selects, correctResponses]);

    const handleClick = () => {
        const points = isError ? scoreCalculation : getSelectPoints(correctResponses, selects, scoreCalculation);
        const iscorrect = points === scoreCalculation;
        setIsCorrect(iscorrect);
        updateScore(_key, points, scoreCalculation);
    };

    return (
        <div className="flex-col flex justify-between items-center gap-8 grow">
            {prompt}
            <div className="flex justify-center items-center w-full">
                <SlideInOneByOneParent delayChildren={0.1}>
                    <div className="flex flex-col gap-4">
                        {isBottomSelect && (
                            <SlideInOneByOneChild duration={0.3}>
                                <div className="w-full flex justify-center my-1">
                                    <select
                                        className="rounded-xl px-2 text-secondary-2 text-base md:text-lg font-bold w-full sm:w-60 h-12 md:h-14"
                                        onChange={(e) => handleSelect(1, e)}
                                        autoComplete="off"
                                        defaultValue=""
                                    >
                                        <option value="" hidden></option>
                                        {currentQuestion.responses.map((response, index) => {
                                            return (
                                                <option className=" text-base md:text-lg font-bold" key={index} value={response.text}>
                                                    {response.text}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </SlideInOneByOneChild>
                        )}
                    </div>
                </SlideInOneByOneParent>
            </div>
            <ValidationButton _key={_key} handleValidation={handleClick} disabled={disabled} isCorrect={isCorrect} feedbackMessage={feedbackMessage} />
        </div>
    );
};
