import Layout from './Layout/Layout';
import HotKeyCaller from './Util/EventsListeners';

export const App = () => {

  window.addEventListener('keydown', HotKeyCaller)
  return (
    <Layout/>
  );
}
