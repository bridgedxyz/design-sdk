import { MappingNode } from "../mapper/mapping-instance";
import {
  Frame,
  Group,
  Vector,
  Star,
  Line,
  Ellipse,
  Text,
  RegularPolygon,
  Rectangle,
  Component,
  Instance,
} from "../types";

/**
 * Type like Node, but without
 */
export type MappableNode =
  | Frame
  | Group
  | Vector
  | Star
  | Line
  | Ellipse
  | RegularPolygon
  | Rectangle
  | Text
  | Component
  | Instance;

export type MappingBlendInput<T = MappingNode, S = MappableNode> = {
  target: T;
  source: S;
};
