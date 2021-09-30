import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
  let [session] = useSession();

  return session ? (
    <button 
      type="button" 
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      {/* <FaGithub color="#04d361"/>  */}
      <img src={session.user.image} alt={session.user.name} width="24px" height="24px" style={{ borderRadius: "50%", marginRight: "1rem"}}/>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button" 
      className={styles.signInButton} 
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/> 
      Sign in with Github
    </button>
  );
}