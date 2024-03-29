import { defineField, defineType } from "sanity";

export default defineType({
    name: "condition",
    title: "Condition",
    type: "object",
    fields: [
        //nature, component, reference, arguments, operateur, order
        defineField({
            name: "nature",
            title: "Nature",
            type: "string",
            options: {
                list: [
                    //variable, roll, hero, count, step
                    { title: "Variable", value: "variable" },
                    { title: "Jet de dés", value: "roll" },
                    { title: "Héros", value: "hero" },
                    { title: "Compte", value: "count" },
                    { title: "Avancée", value: "step" },
                    { title: "Evaluation", value: "eval" },
                ],
            },
        }),
        defineField({
            name: "component",
            title: "Composant",
            type: "reference",
            to: [{ type: "element" }, { type: "choice" }, { type: "variable" }, { type: "extract" }],
        }),
        defineField({
            name: "reference",
            title: "Référence",
            type: "string",
        }),
        defineField({
            name: "arguments",
            title: "Arguments",
            type: "string",
            description:
                "Si comparaison d'un string: 'string1,string2,string3|count|asList|opposite' count est le nombre de string qui doit être inclus, asList permet de comparer à une liste pour éviter par exemple que male soit true quand on cherche dans female, opposite pour inverser le résultat. Si comparaison d'un nombre: 1,2,3,4+,3-,5/10. Si la nature est eval, il faut mettre le code à évaluer sous la forme '${time} > 10' par exemple.",
        }),
        defineField({
            name: "operator",
            title: "Opérateur",
            type: "string",
            options: {
                list: [
                    { title: "La variable existe", value: "isNotNull" },
                    { title: "La variable n'existe pas", value: "isNull" },
                    { title: "Comparaison", value: "compare" },
                ],
            },
            initialValue: "isNotNull",
        }),
        defineField({
            name: "code",
            title: "Code",
            type: "string",
        }),
    ],
});
