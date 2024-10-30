import { Rgb } from '@types_interfaces/ColorTypes';
import { ColorConverter } from '@helpers/ColorConverter';
export declare class HexToRgb extends ColorConverter<string, Rgb> {
    static convertHexToRgb(hex: string): Rgb;
    protected convert(hex: string): Rgb;
}
