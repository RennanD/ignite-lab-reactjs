import { DefaultUi, Player, Youtube } from '@vime/react';
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { ComplementLink } from '../ComplementLink';
import { Teacher } from '../Teacher';

import '@vime/core/themes/default.css';

export function Video(): JSX.Element {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="7QSGhP97u5Y" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 03 - Player de Vídeo</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>

            <Teacher
              avatar="https://github.com/rennand.png"
              name="Rennan Oliveira"
              bio="Software Enginner at Grupo Pensar"
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
