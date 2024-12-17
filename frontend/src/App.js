// Import the 'AllRoutes' component from the './Pages/AllRoutes' file
import AllRoutes from './Pages/AllRoutes';

// Define the 'App' component, which is the root component of the application
function App() {
  return (
    // Render a div element with the class name 'App'
    <div className="App">
      {/* Render the 'AllRoutes' component */}
      <AllRoutes />
    </div>
  );
}

// Export the 'App' component as the default export of this module
export default App;
