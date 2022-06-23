/* eslint-disable import/no-duplicates */
// import { Container } from './styles';

import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

import { LessonHeader } from '../LessonHeader';

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
};

export function Lesson({
  availableAt,
  lessonType,
  slug,
  title,
}: LessonProps): JSX.Element {
  const isAvailable = isPast(availableAt);

  const availableDateFormatted = format(
    availableAt,
    "EEEE ' • ' dd ' de ' MMMM ' • ' HH'h'mm",
    {
      locale: ptBR,
    },
  );

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors">
        <LessonHeader lessonType={lessonType} isAvailable={isAvailable} />
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  );
}
