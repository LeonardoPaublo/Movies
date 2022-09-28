export enum MovieType {
    Action = 1,
    Drama = 2,
    Romance = 3,
    Comedy = 4,
    Horror = 5,
}

export enum MovieAgeGroup {
    G = 1,
    PG = 2,
    PG13 = 3,
    R = 4,
    NR = 5,
}

export interface Movie {
    id: number;
    name: string;
    type: MovieType;
    ageRating: MovieAgeGroup;
    realeseDate: Date;
    rating: number;
    editor: string;
    director: string;
    distributedBy: string;
    executiveProducers: string;
    description: string;
}