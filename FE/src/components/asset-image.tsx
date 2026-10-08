import type { ComponentPropsWithoutRef } from "react";

type AssetImageProps = Omit<ComponentPropsWithoutRef<"img">, "alt"> & { alt: string; fill?: boolean };

/** Local artwork keeps its original sizing and can be replaced in public/assets. */
export function AssetImage({ alt, fill, style, ...props }: AssetImageProps) {
  // Native images preserve the artwork's crop and avoid an image transformation server.
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} style={fill ? { position: "absolute", inset: 0, height: "100%", width: "100%", color: "transparent", ...style } : style} {...props} />;
}
