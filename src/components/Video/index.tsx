import { DefaultUi, Player, Youtube } from '@vime/react';
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { gql, useQuery } from '@apollo/client';
import { ComplementLink } from '../ComplementLink';
import { Teacher } from '../Teacher';

import '@vime/core/themes/default.css';

type VideoProps = {
  slug: string;
};

type GetLessonBySlugResponse = {
  lesson: {
    id: string;
    title: string;
    videoId: string;
    description: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    };
  };
};

const GET_LESSON_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      id
      title
      videoId
      description
      teacher {
        name
        avatarURL
        bio
      }
    }
  }
`;

export function Video({ slug }: VideoProps): JSX.Element {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_QUERY, {
    variables: {
      slug,
    },
  });

  if (!data) {
    return (
      <div className="flex-1 items-center justify-center">
        <p>Carregando</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            <Teacher
              avatar={data.lesson.teacher.avatarURL}
              name={data.lesson.teacher.name}
              bio={data.lesson.teacher.bio}
            />
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade de discord
            </a>

            <a
              href="/"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesso o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <ComplementLink icon={FileArrowDown} title="Material Complementar">
            Acesse o material complementar para acelerar o seu desenvolvimento
          </ComplementLink>

          <ComplementLink icon={Image} title="Wallpapers exclusivos">
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina
          </ComplementLink>
        </div>
      </div>
    </div>
  );
}
