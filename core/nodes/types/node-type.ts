/**
 * the enum value must match with figma's origin node type string.
 * this will be fixed later.
 */
export enum ReflectSceneNodeType {
  group = "GROUP",
  component = "COMPONENT", // this should be not a type, but a property
  // TODO: consider renaming to variant-set. the name variant is ambigious
  variant_set = "COMPONENT_SET", // this should be not a type, but a property
  constraint = "CONSTRAINT",
  instance = "INSTANCE", // this should be not a type, but a property
  text = "TEXT",
  frame = "FRAME",
  ellipse = "ELLIPSE",
  rectangle = "RECTANGLE",
  line = "LINE",
  vector = "VECTOR",
  image = "IMAGE",
  unknown = "UNKNOWN",
}

/**
 * ReflectSceneNodeType + Primitives e.g. star
 */
export enum ReflectNodeType {
  group = "GROUP",
  component = "COMPONENT", // this should be not a type, but a property
  // TODO: consider renaming to variant-set. the name variant is ambigious
  variant_set = "COMPONENT_SET", // this should be not a type, but a property
  constraint = "CONSTRAINT",
  instance = "INSTANCE", // this should be not a type, but a property
  text = "TEXT",
  frame = "FRAME",
  ellipse = "ELLIPSE",
  rectangle = "RECTANGLE",
  line = "LINE",
  vector = "VECTOR",
  image = "IMAGE",
  unknown = "UNKNOWN",
  ////////////////////////
  ////////////////////////
  star = "STAR",
  poligon = "POLIGON",
}
