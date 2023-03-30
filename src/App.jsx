import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Maria Luiza"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur, officia tempore explicabo, pariatur reprehenderit impedit aperiam ex quas omnis iusto voluptate! Eum esse qui debitis consectetur accusamus dolorum enim." 
          />
          <Post
            author="Pedro Henrique"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
