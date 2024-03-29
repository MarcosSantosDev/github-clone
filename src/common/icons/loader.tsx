import { AiOutlineCaretDown } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
  VscGithubInverted,
  VscGraph,
  VscOpenPreview,
  VscLibrary,
  VscExtensions,
  VscStarFull,
  VscOrganization,
  VscBriefcase,
  VscLink,
  VscMail,
  VscLocation,
  VscLaw,
  VscChevronLeft,
  VscChevronRight,
} from 'react-icons/vsc';

export type IconName =
  | 'githubinverted'
  | 'openPreview'
  | 'graph'
  | 'library'
  | 'extensions'
  | 'starfull'
  | 'regstar'
  | 'organization'
  | 'briefcase'
  | 'link'
  | 'mail'
  | 'location'
  | 'law'
  | 'sortDown'
  | 'chevronLeft'
  | 'chevronRight';

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
  { name: 'organization', Icon: VscOrganization },
  { name: 'briefcase', Icon: VscBriefcase },
  { name: 'link', Icon: VscLink },
  { name: 'mail', Icon: VscMail },
  { name: 'location', Icon: VscLocation },
  { name: 'law', Icon: VscLaw },
  { name: 'regstar', Icon: FaRegStar },
  { name: 'sortDown', Icon: AiOutlineCaretDown },
  { name: 'chevronLeft', Icon: VscChevronLeft },
  { name: 'chevronRight', Icon: VscChevronRight },
];

export const loader = (iconName: IconName, fontSize?: string | number) => {
  const IconElement = icons.find(icon => icon.name === iconName);

  if (IconElement) {
    return (
      <IconElement.Icon
        className="global-icon-color"
        fontSize={fontSize}
        aria-hidden="true"
      />
    );
  }
};
