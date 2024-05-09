import { type ProjectResponse } from '@/utils';

import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type TasksAndActivitiesFilterParams = {
  projectsList: ProjectResponse[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setProjectId: React.Dispatch<React.SetStateAction<string>>;
};

const TasksAndActivitiesFilter = ({
  projectsList,
  value,
  setValue,
  setProjectId,
}: TasksAndActivitiesFilterParams) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p className="py-1 px-4 text-sm">Projects</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-48 justify-between"
          >
            {value
              ? projectsList.find(
                  (project) => project.projectName.toLowerCase() === value
                )?.projectName
              : 'All projects'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-0">
          <Command>
            <CommandInput placeholder="Search project..." />
            <CommandEmpty>No project found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {projectsList.map((project) => {
                  const { _id, projectName } = project;

                  return (
                    <CommandItem
                      key={_id}
                      value={projectName}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue);
                        setProjectId(_id);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === projectName.toLowerCase()
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                      {projectName}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default TasksAndActivitiesFilter;
