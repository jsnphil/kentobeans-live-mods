import Footer from './footer';
import Navbar from './Navigation';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
