import { Rgb, Cmyk } from '@types_interfaces/ColorTypes';
import { ColorConverter } from '@helpers/ColorConverter';
export declare class RgbToCmyk extends ColorConverter<Rgb, Cmyk> {
    protected convert(rgb: Rgb): Cmyk;
}
