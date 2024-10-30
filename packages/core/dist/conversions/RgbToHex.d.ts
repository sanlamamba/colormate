import { Rgb } from '@types_interfaces/ColorTypes';
import { ColorConverter } from '@helpers/ColorConverter';
export declare class RgbToHex extends ColorConverter<Rgb, string> {
    static convertRgbToHex(rgb: Rgb): string;
    protected convert(rgb: Rgb): string;
}
