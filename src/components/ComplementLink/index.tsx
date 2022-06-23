// import { Container } from './styles';

import { CaretRight, IconProps } from 'phosphor-react';
import { ComponentType } from 'react';

type ComplementLinkProps = {
  icon: ComponentType<IconProps>;
  title: string;
  children: string;
};

export function ComplementLink({
  icon: Icon,
  title,
  children,
}: ComplementLinkProps): JSX.Element {
  return (
    <a
      href="/"
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        <Icon size={40} />
      </div>

      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{children}</p>
      </div>

      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
