// import { Container } from './styles';

type TeacherProps = {
  avatar: string;
  name: string;
  bio: string;
};

export function Teacher({ avatar, bio, name }: TeacherProps): JSX.Element {
  return (
    <div className="flex items-center gap-4 mt-6">
      <img
        className="h-14 w-14 rounded-full border-2 border-blue-500"
        src={avatar}
        alt="Teacher Avatar"
      />

      <div className="leading-relaxed">
        <strong className="font-bold text-2xl block">{name}</strong>
        <span className="text-gray-200 text-sm block">{bio}</span>
      </div>
    </div>
  );
}
