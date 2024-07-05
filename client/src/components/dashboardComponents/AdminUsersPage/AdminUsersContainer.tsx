import { type AdminUser } from '@/utils';
import {
  Table,
  TableHeader,
  TableCaption,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import day from 'dayjs';
import { AdminAddNewUser, AdminDeleteUser, AdminEditUser } from '@/components';

type AdminUsersContainerProps = {
  allUsers: AdminUser[];
};

const AdminUsersContainer = ({ allUsers }: AdminUsersContainerProps) => {
  return (
    <div className="w-full">
      <AdminAddNewUser />
      <Separator className="bg-[#0FB5BA] mt-4" />
      <Table>
        <TableCaption>A list of All Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#0FB5BA] font-bold">User</TableHead>
            <TableHead className="max-break6:hidden text-[#0FB5BA] font-bold">
              Role
            </TableHead>
            <TableHead className="max-break8:hidden text-[#0FB5BA] font-bold">
              Email
            </TableHead>
            <TableHead className="max-break14:hidden text-[#0FB5BA] font-bold">
              Created
            </TableHead>
            <TableHead className="text-[#0FB5BA] font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUsers.map((user) => {
            const { _id, firstName, lastName, email, role, createdAt, avatar } =
              user;
            const date = day(createdAt).format('D MMM YYYY');
            return (
              <TableRow key={_id}>
                <TableCell>
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={avatar}
                        alt="ant"
                        className="object-cover"
                      />
                      <AvatarFallback>
                        <CircleUserRound className="w-10 h-10" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p>{firstName}</p>
                      <p>{lastName}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="max-break6:hidden">{role}</TableCell>
                <TableCell className="max-break8:hidden">{email}</TableCell>
                <TableCell className="max-break14:hidden">{date}</TableCell>

                <TableCell className="flex items-center gap-3">
                  <AdminEditUser user={user} />
                  {/* <AdminEditTicket
                    allProjectsList={allProjectsList}
                    ticket={ticket}
                  /> */}
                  <AdminDeleteUser id={_id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Separator className="bg-[#0FB5BA] mt-2" />
    </div>
  );
};
export default AdminUsersContainer;
