interface ChoiceField
{
    id: string;
    type: "choice";
    question: string;
    options: string[];
    isRequired: boolean;
}

interface TextField
{
    id: string;
    type: "text";
    question: string;
    maxLength?: number;
    isRequired: boolean;
}

export type Field = ChoiceField | TextField;

export interface Survey
{
    id: string;
    name: string;
    fields: Field[];
}

// è possibile usare Zod al contrario? 
// definire dei tipi Typescript e inferire degli schemi Zod da usare a runtime?
