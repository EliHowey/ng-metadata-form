type FormControlType = 'checkbox' | 'date' | 'email' | 'number' | 'phone' | 'radio' | 'select' | 'text' | 'textarea';

/**
 * Metadata required to render Angular form controls dynamically.
 */
export interface AbstractFormControlMetadata {
    /**
     * ID of the control.
     */
    id: string;

    /**
     * Type of the control.
     */
    controlType: FormControlType;

    /**
     * Label for the control.
     */
    label: string;

    /**
     * Help text for the control.
     */
    helpText?: string;

    /**
     * Whether the user is required to provide a value in the control.
     */
    required: boolean;

    /**
     * Initial value of the control.
     */
    initialValue?: string | number | boolean;
}

export type FormControlMetadata = { type: 'control' } & (
    | CheckboxControlMetadata
    | DateControlMetadata
    | EmailControlMetadata
    | PhoneControlMetadata
    | RadioControlMetadata
    | SelectControlMetadata
    | TextControlMetadata
);

/**
 * A checkbox input control.
 */
export interface CheckboxControlMetadata extends AbstractFormControlMetadata {
    controlType: 'checkbox';

    /**
     * Whether the checkbox is checked by default.
     */
    checked?: boolean;
}

/**
 * A date input control.
 */
export interface DateControlMetadata extends AbstractFormControlMetadata {
    controlType: 'date';

    /**
     * ISO date string for the earliest allowed date.
     * @example "2020-10-25"
     */
    min?: string;

    /**
     * ISO date string for the latest allowed date.
     * @example "2020-11-25"
     */
    max?: string;
}

/**
 * An email input control.
 */
export interface EmailControlMetadata extends AbstractFormControlMetadata {
    controlType: 'email';

    /**
     * Placeholder text for the input.
     * @example "email@example.com"
     */
    placeholder?: string;
}

/**
 * A numeric input control.
 */
export interface NumberControlMetadata extends AbstractFormControlMetadata {
    controlType: 'number';

    /**
     * Minimum value the input will accept.
     */
    min?: number;

    /**
     * Maximum value the input will accept.
     */
    max?: number;

    /**
     * The input will only accept values that are a multiple of this value.
     */
    step?: number;

    /**
     * Placeholder text for the input.
     */
    placeholder?: string;
}

/**
 * A phone input control.
 */
export interface PhoneControlMetadata extends AbstractFormControlMetadata {
    controlType: 'phone';
}

/**
 * A radio input control.
 */
export interface RadioControlMetadata extends AbstractFormControlMetadata {
    controlType: 'radio';

    /**
     * Value of the radio option.
     */
    value: string;

    /**
     * Whether the radio option is selected by default.
     */
    checked?: string;
}

/**
 * A select input control.
 */
export interface SelectControlMetadata extends AbstractFormControlMetadata {
    controlType: 'select';

    /**
     * Options available to select from the control.
     */
    options: (SelectOption | OptGroup)[];
}

/**
 * An option for a select control.
 */
type SelectOption = string | Option;

/**
 * An option for a select control.
 */
interface Option {
    /**
     * Text content of the option.
     */
    label: string;

    /**
     * Value of the option. If omitted, `label` will be used as the value.
     */
    value?: string;

    /**
     * Whether the option is selected by default.
     */
    selected?: boolean;

    /**
     * Whether the option is disabled by default.
     */
    disabled?: boolean;
}

/**
 * A group of related options within a select control.
 */
interface OptGroup {
    /**
     * Text content of the option group.
     */
    label: string;

    /**
     * Options within the option group.
     */
    options: SelectOption;

    /**
     * Whether the option group is disabled.
     */
    disabled?: boolean;
}

/**
 * A basic text input control.
 */
export interface TextControlMetadata extends AbstractFormControlMetadata {
    controlType: 'text';

    /**
     * Placeholder text for the input.
     */
    placeholder?: string;
}

export interface TextareaControlMetadata extends AbstractFormControlMetadata {
    controlType: 'textarea';

    /**
     * The number of visible text lines for the control.
     */
    rows?: number;

    /**
     * Placeholder text for the input.
     */
    placeholder?: string;
}

export function isControlOfType(c: AbstractFormControlMetadata, type: 'checkbox'): c is CheckboxControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'date'): c is DateControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'email'): c is EmailControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'number'): c is NumberControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'phone'): c is PhoneControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'radio'): c is RadioControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'select'): c is SelectControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'text'): c is TextControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: 'textarea'): c is TextareaControlMetadata;
export function isControlOfType(c: AbstractFormControlMetadata, type: FormControlType): boolean {
    return c.controlType === type;
}
