import { FC } from 'react';

type PartnerLogoProps = {
  name: string;
  src: string;
};
export const PartnerLogo: FC<PartnerLogoProps> = ({ name, src }) => (
  <img
    alt={name}
    className="object-contain flex-shrink-0"
    height={80}
    loading="lazy"
    src={src}
    width={168}
  />
);
