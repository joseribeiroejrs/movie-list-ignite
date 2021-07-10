import { IGenre } from "../shared/models/Genre";
import { Button } from "./Button";
import '../styles/sidebar.scss';

interface SideBarProps {
  genres: IGenre[];
  selectedGenreId: number;
  handleClickButton: (id: number) => any;
}

export const SideBar = (props: SideBarProps) => {
  const { genres, selectedGenreId, handleClickButton } = props;
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}