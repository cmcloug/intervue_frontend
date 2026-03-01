import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Outlet />
    </div>
  );
}
