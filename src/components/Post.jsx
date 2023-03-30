import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
    return(
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src="https://github.com/maluCosta.png" />
                <div className={styles.authorInfo}>
                    <strong>Maria Luíza</strong>
                    <span>Desenvolvedora Front-end</span>
                </div>
            </div>

            <time title='29 de Março às 12:07' dateTime='2023-03-29 12:07:30'>Públicado há 1h</time>
        </header>

        <div className={styles.content}>
           <p>Fala galeraa 👋</p>
           <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
           <p><a href="">jane.design/doctorcare</a></p>
           <p>
             <a href="">#novoprojeto</a>{' '}
             <a href="">#nlw</a>{' '}
             <a href="">#rocketseat</a>
            </p>
        </div>

        <form className={styles.comentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
                placeholder='Deixe seu comentário'
            />

           <footer>
                <button type='submit'>Publicar</button>
           </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
       </article>
    )
}