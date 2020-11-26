import { FormControlMetadata } from './form-controls';

/**
 * Metadata to render a dynamic Angular form.
 */
export interface FormMetadata {
    /**
     * ID for the form.
     */
    id?: string;

    /**
     * Contents of the form. This can be a series of form questions or sections.
     */
    contents: FormContentMetadata[];
}

/**
 * Contents of a form, which can be either a form section or a form question.
 */
export type FormContentMetadata = FormSectionMetadata | FormQuestionMetadata;

export function formContentIsType(c: FormContentMetadata, type: 'section'): c is FormSectionMetadata;
export function formContentIsType(c: FormContentMetadata, type: 'question'): c is FormQuestionMetadata;
export function formContentIsType(c: FormContentMetadata, type: 'section' | 'question'): boolean {
    return c.type === type;
}

/**
 * A section of a dynamic Angular form.
 */
export interface FormSectionMetadata {
    type: 'section';

    /**
     * ID for the form section.
     */
    id: string;

    /**
     * Title of the form section.
     */
    title?: string;

    /**
     * Contents of the form section.
     */
    contents: FormContentMetadata[];
}

/**
 * A question within a dynamic Angular form.
 */
export interface FormQuestionMetadata {
    type: 'question';

    /**
     * ID of the form question.
     */
    id: string;

    /**
     * Display text of the form question.
     */
    questionText: string;

    /**
     * Help text for the form question.
     */
    helpText?: string;

    /**
     * Whether the user is required to provide a response to the question.
     */
    required: boolean;

    /**
     * Form controls for the question.
     */
    controls: FormControlMetadata[];
}
