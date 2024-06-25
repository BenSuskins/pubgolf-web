export const rules = [
    "Each player must drink the designated drink at each stop.",
    "The par score for each drink represents the expected number of sips to finish the drink.",
    "If you finish your drink in fewer sips than par, your score for that hole is the number of sips you took.",
    "If you take more sips than par, your score for that hole is the number of sips you took.",
    "Each sip can last at most 1 Minute.",
    "Doing additional drinks will lower your score as decided by the referee."
];

export const drinks: DrinkInfo[] = [
    { pub: 'The Lock Inn', drinkA: 'Tequila', drinkB: 'Sambuca', par: 1, lat: 51.54704221722351, lng: -0.024302005296492523 },
    { pub: 'Beer Merchants Tap', drinkA: 'Beer', drinkB: 'Double Vodka & Single Vodka', par: 3, lat: 51.544537514752406, lng: -0.024089676469998805 },
    { pub: 'No 90', drinkA: 'Wine', drinkB: 'Double Gin', par: 2, lat: 51.5441483399746, lng: -0.022686143228642857 },
    { pub: 'The Lord Napier Star', drinkA: 'Cider', drinkB: 'Double Rum', par: 2, lat: 51.54317410748569, lng: -0.025277542906490397 },
    { pub: 'The Kenton Pub', drinkA: 'Cocktail', drinkB: 'Cocktail', par: 2, lat: 51.54412976012798, lng: -0.044405712731114565 },
    { pub: 'Peoples Park Tavern', drinkA: 'Spirit Mixer', drinkB: 'Spirit Mixer', par: 2, lat: 51.541594024295264, lng: -0.037807392511082755 },
    { pub: 'The Lauriston', drinkA: 'Guiness', drinkB: '2 x Double Whiskey', par: 4, lat: 51.53798547783272, lng: -0.04512754105558223 },
    { pub: 'Off Broadway', drinkA: 'Jagerbomb', drinkB: 'Jagerbomb', par: 1, lat: 51.5373719548513, lng: -0.06138017268091661 },
    { pub: 'Sebright Arms', drinkA: 'VK', drinkB: 'Smirnoff', par: 1, lat: 51.532039688673585, lng: -0.06306789819191375 },
];