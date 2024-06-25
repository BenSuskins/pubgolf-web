interface DrinkInfo {
    pub: string;
    drinkA: string;
    drinkB: string;
    par: number;
    lat: number;
    lng: number;
};

interface Player {
    name: string;
    scores: number[];
    totalScore: number
}

interface MapComponentProps {
    drinks: DrinkInfo[];
    polylinePositions: [number, number][];
}

interface JoinGameFormProps {
    gameIdentifier: string;
};

type LatLngTuple = [number, number];

