export enum movieType {
    Action = 1,
    Drama = 2,
    Romance = 3,
    Comedy = 4,
    Horror = 5,
}

export enum movieAgeGroup {
    G = 1,
    PG = 2,
    PG13 = 3,
    R = 4,
    NR = 5,
}

export interface movie {
    id: number;
    name: string;
    type: movieType;
    ageRating: movieAgeGroup;
    realeseDate: Date;
    rating: number;
    editor: string;
    director: string;
    distributedBy: string;
    executiveProducers: string;
    description: string;
}