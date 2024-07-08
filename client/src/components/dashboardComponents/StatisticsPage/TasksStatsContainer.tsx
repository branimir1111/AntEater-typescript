import {
  TasksStatsTypePieChart,
  TasksStatsPriorityPieChart,
  TasksStatsStatusPieChart,
} from '@/components';

type TaskTypeStatus = {
  taskType: string;
  tasks: number;
};
type TaskPriorityStatus = {
  priority: string;
  tasks: number;
};
type TaskStatus = {
  status: string;
  tasks: number;
};

type TasksStatsContainerProps = {
  tasksByType: TaskTypeStatus[];
  tasksByPriority: TaskPriorityStatus[];
  tasksByStatus: TaskStatus[];
};

const TasksStatsContainer = ({
  tasksByType,
  tasksByPriority,
  tasksByStatus,
}: TasksStatsContainerProps) => {
  return (
    <div className="mt-4 grid gap-2 break8:grid-cols-2 break13:grid-cols-3">
      <div>
        <TasksStatsTypePieChart tasksByType={tasksByType} />
      </div>
      <div>
        <TasksStatsPriorityPieChart tasksByPriority={tasksByPriority} />
      </div>
      <div className="break8:col-span-2 break13:col-span-1">
        <TasksStatsStatusPieChart tasksByStatus={tasksByStatus} />
      </div>
    </div>
  );
};
export default TasksStatsContainer;
