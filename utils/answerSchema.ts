import { z, ZodTypeAny } from "zod";
import { Survey } from "../types/survey";

/**
 * shape:
 * { field.id: schema }
 */
export function buildAnswerSchema(survey: Survey)
{
    const shape: Record<string, z.ZodTypeAny> = {};

    survey.fields.forEach((field) => // field: {"q1" : risposta}
    {
        const key = field.id;

        if (field.type === "choice")
        {
            // runtime check: options esistono e non sono vuote
            if (!Array.isArray(field.options) || field.options.length === 0)
            {
                console.log("API malformata")
                return;
            }

            let schema: ZodTypeAny = z
                .string({
                    required_error: "Devi selezionare una risposta",
                    invalid_type_error: "Valore non valido",
                })
                .refine((val) => field.options.includes(val), {
                    message: "Valore non valido",
                });

            // se il campo non è richiesto, permette undefined
            if (!field.isRequired)
            {
                schema = schema.optional();
            }

            shape[key] = schema;
        } else if (field.type === "text")
        {
            let schema = z.string({
                required_error: "Risposta obbligatoria",
                invalid_type_error: "La risposta deve essere un testo",
            });

            // se è required, impongo almeno 1 char
            if (field.isRequired)
            {
                schema = schema.min(1, "Risposta obbligatoria");
            }

            if (typeof field.maxLength === "number")
            {
                schema = schema.max(field.maxLength, `Massimo ${field.maxLength} caratteri`);
            }

            shape[key] = schema;
        } else
        {
            // per tipi non previsti
            shape[key] = z.any().optional();
        }
    });

    return z.object(shape);
}
