import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import ResumePage from './containers/ResumePage.jsx';



const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },
    {
      path: '/resume_page',
      component: ResumePage
    },
    
  ]
};

export default routes;
