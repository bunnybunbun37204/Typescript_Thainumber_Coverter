const ThaiNumbers_Dictionary = {
    '0': '0',
    '๐': '0',
    '๑': '1',
    '๒': '2',
    '๓': '3',
    '๔': '4',
    '๕': '5',
    '๖': '6',
    '๗': '7',
    '๘': '8',
    '๙': '9',
};

function splitText(text: string, spliter: string) {
    let value: string[] = text.split(spliter);
    let data: string = value.reduce((a, b) => a + b);
    return data;
}

export default class ThaiNumber_Converter {
    static toInteger(thainumber: string) {
        let value: any = splitText(thainumber, ',');
        if (value.length === 1) value = value[0].split('');
        let new_value: string[] = [];
        for (let i = 0; i < value.length; i++) {
            if (value[i] in ThaiNumbers_Dictionary) {
                new_value[i] = ThaiNumbers_Dictionary[value[i]];
            }
            else {
                return 'error check your data is it thai?';
            }
        }
        let result: string = new_value.reduce((a, b) => a + b);
        return parseInt(result);
    }
    static toStringData(thainumber) {
        let value: any = splitText(thainumber, ',');
        if (value.length === 1) value = value[0].split('');
        let new_value: string[] = [];
        for (let i = 0; i < value.length; i++) {
            if (value[i] in ThaiNumbers_Dictionary) {
                new_value[i] = ThaiNumbers_Dictionary[value[i]];
            }
            else {
                return 'error check your data is it thai?';
            }
        }
        let result: string = new_value.reduce((a, b) => a + b);
        return result;
    }
}