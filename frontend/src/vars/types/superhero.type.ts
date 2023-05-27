import { InternalUploadFile } from 'antd/es/upload/interface';


export interface SuperheroShortType {
  id: string;
  nickname: string;
  images: string[];
}

export interface SuperheroType extends SuperheroShortType {
  real_name: string;
  superpowers: string;
  origin_description: string;
  catch_phrase: string;
}

export interface SuperheroErrorRes {
  data?: {
    Error?: string;
    error?: string;
  };
}

export interface SuperheroStatus {
  isError?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  error?: SuperheroErrorRes;
}

export interface SuperheroStatusData extends SuperheroStatus {
  errorMessage?: string;
}

export interface SuperheroForm {
  real_name: string;
  superpowers: string;
  origin_description: string;
  catch_phrase: string;
  nickname: string;
  images: InternalUploadFile[];
}

export interface SuperheroHelper {
  getAllSuperherosData: (page?: number) => void;
  getSingleSuperheroData: (id: string) => void;
  deleteSingleSuperheroData: (id: string) => void;
  updateSuperheroData: (data: { formData: FormData; id: string }) => void;
  createSuperheroData: (superhero: FormData) => void;
  getAllSuperherosStatus: SuperheroStatus;
  getSingleSuperheroStatus: SuperheroStatus;
  deleteSingleSuperheroStatus: SuperheroStatus;
  updateSuperheroStatus: SuperheroStatus;
  createSuperheroStatus: SuperheroStatus;
  superheros: SuperheroShortType[];
  selectedSuperhero: SuperheroType | null;
  superherosTotalCount: number;
}
