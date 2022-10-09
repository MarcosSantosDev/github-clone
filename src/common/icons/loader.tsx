import { AiOutlineStar, AiOutlineLink, AiOutlineProject } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';
import { GiBookmark, GiBookmarklet } from 'react-icons/gi';
import {
  GoRepo,
  GoRepoForked,
  GoLocation,
  GoLaw,
  GoMarkGithub,
  GoOrganization,
  GoCalendar,
} from 'react-icons/go';
import { IconType } from 'react-icons/lib';

type Icon = {
  name: string;
  Icon: IconType;
};

const icons: Icon[] = [
  { name: 'calendar', Icon: GoCalendar },
  { name: 'openedbook', Icon: GiBookmarklet },
  { name: 'closedbook', Icon: GiBookmark },
  { name: 'repository', Icon: GoRepo },
  { name: 'github', Icon: GoMarkGithub },
  { name: 'organization', Icon: GoOrganization },
  { name: 'star', Icon: AiOutlineStar },
  { name: 'link', Icon: AiOutlineLink },
  { name: 'project', Icon: AiOutlineProject },
  { name: 'location', Icon: GoLocation },
  { name: 'officeBuilding', Icon: FaRegBuilding },
  { name: 'forked', Icon: GoRepoForked },
  { name: 'law', Icon: GoLaw },
  { name: 'moon', Icon: BsMoon },
  { name: 'sun', Icon: BsSun },
  { name: 'box', Icon: FiBox },
];

export const loader = (
  iconName: string,
  fontSize?: string | number,
): JSX.Element => {
  const IconElement = icons.find(icon => icon.name === iconName);

  return IconElement ? (
    <IconElement.Icon color="#6a737d" fontSize={fontSize} />
  ) : (
    <></>
  );
};
