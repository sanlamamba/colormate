import { Rgb, Hsl } from '@types_interfaces/ColorTypes';
import { ColorConverter } from '@helpers/ColorConverter';
export declare class RgbToHsl extends ColorConverter<Rgb, Hsl> {
    protected convert(rgb: Rgb): Hsl;
}
