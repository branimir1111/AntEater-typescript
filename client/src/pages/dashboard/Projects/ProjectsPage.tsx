import { Outlet, useNavigation } from 'react-router-dom';
import { GlobalLoader } from '@/components';

const ProjectsPage = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      {isPageLoading ? <GlobalLoader /> : <Outlet />}
    </section>
  );
};
export default ProjectsPage;
