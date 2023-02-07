import * as React from 'react';

import { usePageTitle } from '@/common/hooks';

import { Wrapper } from './ApplicationWrapper.styles';

const ApplicationWrapper = ({ children }: React.PropsWithChildren<unknown>) => {
  const pageTitle = usePageTitle();

  if (typeof window !== 'undefined' && pageTitle) {
    document.title = pageTitle;
  }

  return <Wrapper>{children}</Wrapper>;
};

export default ApplicationWrapper;
