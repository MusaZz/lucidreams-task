// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Component
import Application from "./components/Application";

const App = () => {
  const client = new QueryClient({});
  return (
    <QueryClientProvider client={client}>
      <Application />
    </QueryClientProvider>
  );
};

export default App;
