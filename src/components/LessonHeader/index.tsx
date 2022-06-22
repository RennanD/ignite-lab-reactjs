// import { Container } from './styles';

import { CheckCircle, Lock } from 'phosphor-react';

type LessonHeaderProps = {
  lessonType: 'live' | 'class';
  isAvailable: boolean;
};

export function LessonHeader({
  isAvailable,
  lessonType,
}: LessonHeaderProps): JSX.Element {
  return (
    <header className="flex items-center justify-between">
      {isAvailable ? (
        <span className="text-sm font-medium text-blue-500 flex items-center gap-2">
          <CheckCircle size={20} />
          Conteúdo Liberado
        </span>
      ) : (
        <span className="text-sm font-medium text-orange-500 flex items-center gap-2">
          <Lock size={20} />
          Em Breve
        </span>
      )}
      <span className="text-xs rounded py-[2px] px-2 text-white border font-bold border-green-300">
        {lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
      </span>
    </header>
  );
}
