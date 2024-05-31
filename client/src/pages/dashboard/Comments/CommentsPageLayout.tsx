import CommentsTasksPage from './CommentsTasksPage';
import CommentTicketsPage from './CommentTicketsPage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CommentsPageLayout = () => {
  return (
    <Tabs
      defaultValue="Task comments"
      className="w-full outlet-hight p-8 bg-background-first"
    >
      <div className="w-full grid place-items-center mb-4">
        <TabsList className="h-20 grid break4:inline-flex break4:h-10">
          <TabsTrigger value="Task comments">Task comments</TabsTrigger>
          <TabsTrigger value="Ticket comments">Ticket comments</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="Task comments">
        <CommentsTasksPage />
      </TabsContent>
      <TabsContent value="Ticket comments">
        <CommentTicketsPage />
      </TabsContent>
    </Tabs>
  );
};
export default CommentsPageLayout;
