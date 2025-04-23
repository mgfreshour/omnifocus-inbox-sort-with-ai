
// File: src/ui.js

export function createOptionField(name, title, options, selectedValue) {
    const optionNames = options.map(option => option.name);
    const selectedOption = options.find(option => option.value === selectedValue) || options[0];

    return new Form.Field.Option(
            name,
            title,
            options,
            optionNames,
            selectedOption
    );
}