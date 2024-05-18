import Image from 'next/image';

interface Props {
  src: string;
  altContent: string;
  quality?: number;
}

export function FullImage({ src, altContent, quality }: Props) {
  return (
    <Image
      quality={quality}
      src={src}
      alt={altContent}
      fill={true}
      sizes="100%, 100%"
    />
  );
}
