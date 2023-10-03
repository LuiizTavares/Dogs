import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComents from './PhotoComents';

const PhotoContent = ({ data }) => {
  const { photos, coments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photos.src} alt={photos.title} />
      </div>
      <div className={styles.detail}>
        <div>
          <p>
            <Link to={`/perfil/${photos.author}`}>@${photos.author}</Link>
            <span className={styles.visualizacoes}>{photos.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/$${photos.id}`}>{photos.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photos.peso} kg</li>
            <li>{photos.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComents id={photos.id} coments={coments} />
    </div>
  );
};

export default PhotoContent;
