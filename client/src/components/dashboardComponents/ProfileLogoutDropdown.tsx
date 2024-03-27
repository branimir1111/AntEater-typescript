import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { useAppSelector, useAppDispatch } from '@/utils';
import { NavLink, useNavigate } from 'react-router-dom';
import { customFetch } from '@/utils';
import { toast } from '../ui/use-toast';
import { logoutUser } from '@/features/user/userSlice';
import { unsetTheme } from '@/features/theme/themeSlice';
import { User, LogOut, CircleUserRound, ArrowDownUp } from 'lucide-react';

const ProfileLogoutDropdown = () => {
  const user = useAppSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await customFetch.get('/logout');
      dispatch(logoutUser());
      dispatch(unsetTheme());
      toast({ description: 'Successfully logged out' });
      navigate('/');
    } catch (error) {
      toast({ description: 'Logged out failed' });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="py-2">
          {user?.firstName}
          <ArrowDownUp className="w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="grid place-items-center">
          <Avatar>
            <AvatarImage
              src={user?.avatar}
              alt="ant"
              className="object-cover"
            />
            <AvatarFallback>
              <CircleUserRound />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="ghost" size="sm" asChild>
            <NavLink to="profile">
              <User className="w-4 mr-2" />
              Your Profile
            </NavLink>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="ghost" onClick={handleLogout} size="sm">
            <LogOut className="w-4 mr-2" />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileLogoutDropdown;
