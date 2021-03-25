type FormControlType =
    | 'checkbox'
    | 'date'
    | 'email'
    | 'number'
    | 'phone'
    | 'radio-group'
    | 'select'
    | 'text'
    | 'textarea';

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
    | RadioGroupControlMetadata
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
 * A group of radio input controls.
 */
export interface RadioGroupControlMetadata extends AbstractFormControlMetadata {
    controlType: 'radio-group';

    /**
     * Options available to select from the radio group.
     */
    options: (string | OptionMetadata)[];
}

/**
 * A select input control.
 */
export interface SelectControlMetadata extends AbstractFormControlMetadata {
    controlType: 'select';

    /**
     * Options available to select from the control.
     */
    options: (string | OptionMetadata | OptGroup)[];
}

/**
 * An option for a radio group or select control.
 */
export interface OptionMetadata {
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
    options: string | OptionMetadata;

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
