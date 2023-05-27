export interface ResponseError extends NodeJS.ErrnoException {
  statusCode?: number;
}

export interface SuperheroShort {
  id: number;
  nickname: string;
  images: string[];
}

export interface SuperheroFull extends SuperheroShort {
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
}

export interface RequestBody {
  nickname: string;
  real_name?: string;
  origin_description?: string;
  superpowers?: string;
  catch_phrase?: string;
}

export interface RequestPageParams {
  page: number;
}

export interface RequestSuperheroParams {
  id: string;
}
