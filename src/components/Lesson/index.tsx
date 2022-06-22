// import { Container } from './styles';

import { LessonHeader } from '../LessonHeader';

type LessonProps = {
  title: string;
  slug: string;
  avaliableAt: Date;
  lessonType: 'live' | 'class';
};

export function Lesson({
  avaliableAt,
  lessonType,
  slug,
  title,
}: LessonProps): JSX.Element {
  return (
    <a href={`/${slug}`}>
      <span className="text-gray-300">{avaliableAt.toString()}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <LessonHeader lessonType={lessonType} isAvaliable />
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
}
