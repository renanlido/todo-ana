import React from 'react';

import { ReactComponent as DownloadSVG } from '../../../../assets/icons/download.svg';

const Download: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <DownloadSVG {...rest} />
);

export { Download };
