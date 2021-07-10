import { useEffect, useState } from 'react'

import { api } from './services/api';
import { IMovie } from './shared/models/Movie';
import { IGenre } from './shared/models/Genre';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

export const App = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenre>({} as IGenre);

  useEffect(() => {
    api.get<IGenre[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<IMovie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<IGenre>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}