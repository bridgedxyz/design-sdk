import { CrossAxisAlignment } from "@reflect.bridged.xyz/core/lib";
import { FigmaCrossAxisAligment } from "../types";

export function convertCounterAxisAlignItemsToCrossAxisAlignment(origin: FigmaCrossAxisAligment): CrossAxisAlignment {
    switch (origin) {
        case "MIN":
            return CrossAxisAlignment.start
        case "CENTER":
            return CrossAxisAlignment.center
        case "MAX":
            return CrossAxisAlignment.end
    }
}