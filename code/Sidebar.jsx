import Sidebar from './Sidebar';

const MyComponent = ({initialSidebarState}) => {
  const [showSidebar, setShowSidebar] = useState(initialSidebarState);
  
  return (
    <div>,
      <button onClick={() => setShowSidebar(!showSidebar)}>
        Toggle sidebar
      </button>
      {showSidebar && <Sidebar />}
    </div>
  );
};