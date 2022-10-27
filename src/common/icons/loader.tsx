import { IconType } from 'react-icons/lib';
import {
  VscCircleSlash,
  VscGithubInverted,
  VscGraph,
  VscOpenPreview,
  VscLibrary,
  VscExtensions,
  VscStarFull,
} from 'react-icons/vsc';

export type IconName =
  | 'githubinverted'
  | 'openPreview'
  | 'graph'
  | 'library'
  | 'extensions'
  | 'starfull';

export type Icon = {
  name: IconName;
  Icon: IconType;
};

export const icons: Icon[] = [
  { name: 'githubinverted', Icon: VscGithubInverted },
  { name: 'openPreview', Icon: VscOpenPreview },
  { name: 'library', Icon: VscLibrary },
  { name: 'graph', Icon: VscGraph },
  { name: 'extensions', Icon: VscExtensions },
  { name: 'starfull', Icon: VscStarFull },
];

export const loader = (iconName: IconName, fontSize?: string | number) => {
  const IconElement = icons.find(icon => icon.name === iconName);

  if (IconElement) {
    return <IconElement.Icon color="#6a737d" fontSize={fontSize} />;
  }
};
