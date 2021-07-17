export interface Item {
    id: string;
    name: string;
    koreanname: string;

    description: string;
    notes: Array<string>;

    rank: string;
    grade: string;
    type: string;
    color: string;
    level: string;

    droprate: string;
    dropped_by: Array<string>;
    recipe: Array<object>;
    stats: object;
    required_by: Array<string>;
    
}
//Item Classes
export interface RecipeWithOptions {
    currentIndex: number;
    name: Array<string>;
    amount: Array<number>;
}
export interface BossWithRate {
    name: string;
    rate: string;
}

export interface GradeWithColor {
    1: {
        name: 'Deltirama',
        color: 'C39BE1'
    },
    2: {
        name: 'Neptinos',
        color: '9BE1E1'
    },
    3: {
        name: 'Gnosis',
        color: 'DC143C'
    },
    4: {
        name: 'Alteia',
        color: '99FF99'
    }
}