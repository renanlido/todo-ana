import { ReactComponent as HammerSVG } from '../../../../assets/icons/marks/hammer.svg';
import { ReactComponent as HandsSVG } from '../../../../assets/icons/marks/hands.svg';
import { ReactComponent as BuildingSVG } from '../../../../assets/icons/marks/building.svg';
import { ReactComponent as StarSVG } from '../../../../assets/icons/marks/star.svg';

const Hammer: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <HammerSVG {...rest} />
);

const Hands: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <HandsSVG {...rest} />
);

const Building: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <BuildingSVG {...rest} />
);

const Star: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <StarSVG {...rest} />
);

export { Hammer, Hands, Building, Star };
