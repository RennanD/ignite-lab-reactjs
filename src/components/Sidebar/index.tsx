// import { Container } from './styles';

import { Lesson } from '../Lesson';

export function Sidebar(): JSX.Element {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lesson
          title="Abertura Ignite Lab"
          slug="abertura-ignite"
          lessonType="live"
          avaliableAt={new Date()}
        />
        <Lesson
          title="Ignite Lab - Aula 1"
          slug="ignite-lab-aula-1"
          lessonType="class"
          avaliableAt={new Date()}
        />
        <Lesson
          title="Ignite Lab - Aula 2"
          slug="ignite-lab-aula-2"
          lessonType="class"
          avaliableAt={new Date()}
        />
        <Lesson
          title="Ignite Lab - Aula 3"
          slug="ignite-lab-aula-3"
          lessonType="class"
          avaliableAt={new Date()}
        />
        <Lesson
          title="Ignite Lab - Aula 4"
          slug="ignite-lab-aula-4"
          lessonType="class"
          avaliableAt={new Date()}
        />
        <Lesson
          title="Ignite Lab - Aula 5"
          slug="ignite-lab-aula-5"
          lessonType="class"
          avaliableAt={new Date()}
        />
      </div>
    </aside>
  );
}
