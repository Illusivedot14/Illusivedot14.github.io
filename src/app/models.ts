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
    rate: number;
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


//Enemy classes
export interface Enemy {
    id: string;
    name: string;
    color: string;
    quote: string;
    level: string;
    category: string;
    type: string;
    limit: number;
    respawn: string;
    location: string;
    conditions: string;
    stats: object;

    notes: Array<string>;
    drops: Array<string>;
    spells: Array<string>;
    minions: Array<string>;
    displayDrop: string;
}


export interface EnemySkills {
    id: string;
    name: string;
    category: string;
    type: string;
    limit: number;
    respawn: string;
    location: string;
    conditions: string;
    
    timer: number;
    drops: Array<string>;
    displayDrop: string;
    
}