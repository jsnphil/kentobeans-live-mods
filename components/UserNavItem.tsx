import { signIn, signOut, useSession } from 'next-auth/react';
import { Navbar } from 'react-bootstrap';

function UserNavItem() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Navbar.Text>
          <img src={session?.user?.image!} width='30px' height={30} />
          {'  '}
          {session?.user?.name}
        </Navbar.Text>
        <Navbar.Text>
          {
            // TODO Replace with a Font Awesome unlock icon
            <button onClick={() => signOut()}>Sign Out</button>
          }
        </Navbar.Text>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>Login</button>
    </>
  );
}

export default UserNavItem;
