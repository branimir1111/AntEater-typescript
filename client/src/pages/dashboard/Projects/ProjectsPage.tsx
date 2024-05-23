import { Outlet, useNavigation } from 'react-router-dom';
import { GlobalLoader } from '@/components';

const ProjectsPage = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default ProjectsPage;
