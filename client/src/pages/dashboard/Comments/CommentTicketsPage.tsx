import {
  customFetch,
  type ProjectForComment,
  type TaskForComment,
} from '@/utils';
import { useQuery } from '@tanstack/react-query';
import {
  GlobalLoader,
  ErrorElement,
  ProjectCartTicketComments,
  TicketCartComments,
  CommentTicketCart,
} from '@/components';
import { useState } from 'react';

const CommentTicketsPage = () => {
  const [singleProjectId, setSingleProjectId] = useState('');
  // const [singleTaskId, setSingleTaskId] = useState('');
  const [singleTicketId, setSingleTicketId] = useState('');

  const { data, isPending, isError } = useQuery({
    queryKey: ['ticket-comments'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-ticket-comments');
      return data;
    },
  });

  console.log(data);

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { projectsWithTicketsAndComments } = data;

  let selectedProject;

  if (singleProjectId) {
    selectedProject = projectsWithTicketsAndComments.find(
      (project: ProjectForComment) => {
        return project._id === singleProjectId;
      }
    );
  } else {
    selectedProject = projectsWithTicketsAndComments[0];
  }

  let selectedTicket;
  const { tickets } = selectedProject;

  if (singleTicketId) {
    selectedTicket = tickets.find((task: TaskForComment) => {
      return task._id === singleTicketId;
    });
  } else {
    selectedTicket = tickets[0];
  }

  return (
    <section>
      {projectsWithTicketsAndComments.length < 1 ? (
        <h3 className="text-xl text-center">There is no created project yet</h3>
      ) : (
        <div className="w-full grid break15:grid-cols-3 gap-2">
          {/* Projects */}
          <div className="w-full bg-background rounded-sm border">
            <div className="w-full h-full bg-indigo-400 bg-opacity-10 p-2">
              <h1 className="text-2xl font-semibold mb-4">Projects</h1>
              {projectsWithTicketsAndComments.map(
                (project: ProjectForComment) => {
                  const isActive = selectedProject._id === project._id;
                  return (
                    <div className="w-full" key={project._id}>
                      <ProjectCartTicketComments
                        isActive={isActive}
                        project={project}
                        setSingleProjectId={setSingleProjectId}
                        setSingleTicketId={setSingleTicketId}
                      />
                      <div className="w-full break15:hidden">
                        {selectedProject._id === project._id ? (
                          <TicketCartComments
                            singleTicketId={singleTicketId}
                            selectedProject={selectedProject}
                            setSingleTicketId={setSingleTicketId}
                            selectedTicket={selectedTicket}
                          />
                        ) : null}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* Tickets */}
          <div className="w-full max-break15:hidden">
            <TicketCartComments
              selectedProject={selectedProject}
              singleTicketId={singleTicketId}
              setSingleTicketId={setSingleTicketId}
              selectedTicket={selectedTicket}
            />
          </div>
          {/* Comments */}
          <div className="w-full max-break15:hidden">
            <CommentTicketCart
              selectedTicket={selectedTicket}
              projectId={selectedProject._id}
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default CommentTicketsPage;
