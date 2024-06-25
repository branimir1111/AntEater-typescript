import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';

type UserListProps = {
  _id: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar: string | undefined;
  setActiveUserId: React.Dispatch<React.SetStateAction<string>>;
};

const UserList = ({
  _id,
  isActive,
  firstName,
  lastName,
  email,
  role,
  avatar,
  setActiveUserId,
}: UserListProps) => {
  return (
    <article
      className={`flex gap-2 p-1 cursor-pointer rounded-sm hover:bg-background-first ${
        isActive ? 'bg-background-second' : ''
      }`}
      onClick={() => setActiveUserId(_id)}
    >
      <Avatar className="w-10 h-10">
        <AvatarImage src={avatar} alt="user" className="object-cover" />
        <AvatarFallback>
          <CircleUserRound />
        </AvatarFallback>
      </Avatar>
      <div>
        <p>{firstName + ' ' + lastName}</p>
        <p className="text-muted-foreground">{email}</p>
        <p className="text-muted-foreground capitalize">{role}</p>
      </div>
    </article>
  );
};
export default UserList;
