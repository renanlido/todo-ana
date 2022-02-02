import { ReactComponent as BrasilSVG } from '../../../assets/flags/brasil.svg';
import { ReactComponent as ColombiaSVG } from '../../../assets/flags/colombia.svg';
import { ReactComponent as PeruSVG } from '../../../assets/flags/peru.svg';
import { ReactComponent as BoliviaSVG } from '../../../assets/flags/bolivia.svg';
import { ReactComponent as EquadorSVG } from '../../../assets/flags/equador.svg';

const Brasil: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <BrasilSVG {...rest} />
);

const Colombia: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <ColombiaSVG {...rest} />
);

const Peru: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <PeruSVG {...rest} />
);

const Bolivia: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <BoliviaSVG {...rest} />
);

const Equador: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => (
  <EquadorSVG {...rest} />
);
export { Brasil, Colombia, Peru, Equador, Bolivia };
