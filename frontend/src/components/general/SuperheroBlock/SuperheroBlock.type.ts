import { SuperheroShortType } from "vars/types/superhero.type";

export interface SuperheroBlockProps {
  superhero: SuperheroShortType;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onClick: () => void;
}
