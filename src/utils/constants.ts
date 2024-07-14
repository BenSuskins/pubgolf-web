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
    { pub: 'Peoples Park Tavern', drinkA: 'Cocktail', drinkB: 'Cocktail', par: 2, lat: 51.5415990502505, lng: -0.0378202354885777 },
    { pub: 'The Lauriston', drinkA: 'Spirit Mixer', drinkB: 'Spirit Mixer', par: 2, lat: 51.53792602747728, lng: -0.04508932649695302 },
    { pub: 'Royal Inn on the Park', drinkA: 'Guiness', drinkB: '2 x Double Whiskey', par: 4, lat: 51.53680097695395, lng: -0.04328406325789921 },
    { pub: 'The Approach Tavern', drinkA: 'Jagerbomb', drinkB: 'Jagerbomb', par: 1, lat: 51.53132956472087, lng: -0.05172431396274521 },
    { pub: 'Sebright Arms', drinkA: 'VK', drinkB: 'Smirnoff', par: 1, lat: 51.532039688673585, lng: -0.06306789819191375 },
];

export const baseURL = 'https://api.suskins.co.uk/api';

export const routes = {
    HOME: "/home",
    GAME: "/game",
    SUBMIT: "/submit-score",
    RULES: "/how-to-play",
};

export const walkingRoute: [number, number][] = [
    [51.5469296, -0.0242917],
    [51.5471171, -0.0245255],
    [51.547006, -0.0250376],
    [51.5472536, -0.0253449],
    [51.5476655, -0.0258393],
    [51.547831, -0.0260163],
    [51.5479884, -0.0262476],
    [51.5483719, -0.0266685],
    [51.5485136, -0.0262925],
    [51.5483245, -0.0260742],
    [51.5479109, -0.0272147],
    [51.547873, -0.0271882],
    [51.5478358, -0.0271621],
    [51.5477591, -0.0273716],
    [51.5477047, -0.0273544],
    [51.54764, -0.0268659],
    [51.5475962, -0.0268107],
    [51.5475192, -0.0268188],
    [51.5474361, -0.0267319],
    [51.5473122, -0.0265733],
    [51.5472555, -0.0264942],
    [51.5470548, -0.0262392],
    [51.5468535, -0.0259881],
    [51.5467907, -0.0259202],
    [51.5466545, -0.0261974],
    [51.546527, -0.0261672],
    [51.545978, -0.0263673],
    [51.5458248, -0.0261827],
    [51.5457757, -0.026147],
    [51.5456945, -0.0260865],
    [51.5453961, -0.0258642],
    [51.5453568, -0.025835],
    [51.545128, -0.0256673],
    [51.5449692, -0.0255585],
    [51.5445991, -0.0253203],
    [51.5442758, -0.0251195],
    [51.544386, -0.0243594],
    [51.5444117, -0.024081],
    [51.5444471, -0.0236373],
    [51.5444868, -0.0231397],
    [51.5439324, -0.023035],
    [51.5444868, -0.0231397],
    [51.5444471, -0.0236373],
    [51.5444117, -0.024081],
    [51.544386, -0.0243594],
    [51.5442758, -0.0251195],
    [51.5437483, -0.025328],
    [51.5436754, -0.0253851],
    [51.5435058, -0.0255152],
    [51.5432708, -0.0255776],
    [51.5431137, -0.0259061],
    [51.5430854, -0.0259827],
    [51.5428566, -0.026682],
    [51.5427835, -0.0269561],
    [51.5426946, -0.0273314],
    [51.5430601, -0.0274998],
    [51.5440017, -0.0283092],
    [51.5440703, -0.0285865],
    [51.5440941, -0.0286825],
    [51.5442903, -0.0291549],
    [51.5445302, -0.0296693],
    [51.5447608, -0.0301197],
    [51.5448233, -0.0302713],
    [51.5448013, -0.03045],
    [51.5447532, -0.0309329],
    [51.544728, -0.0311738],
    [51.5447211, -0.0313634],
    [51.5447201, -0.0321663],
    [51.5447461, -0.0324333],
    [51.5447521, -0.0325972],
    [51.5447497, -0.0327841],
    [51.5447623, -0.0330012],
    [51.5447838, -0.0331176],
    [51.5447084, -0.0333123],
    [51.5446733, -0.033419],
    [51.5440147, -0.0341735],
    [51.5434872, -0.0349524],
    [51.543074, -0.0358425],
    [51.5426155, -0.036635],
    [51.542085, -0.037445],
    [51.5415144, -0.0380737],
    [51.5414685, -0.0381],
    [51.5407102, -0.0386969],
    [51.5403777, -0.0392639],
    [51.5388955, -0.0416442],
    [51.5388669, -0.0417049],
    [51.5388413, -0.0417648],
    [51.5387959, -0.0418723],
    [51.5385903, -0.0424439],
    [51.5385296, -0.0427322],
    [51.538499, -0.0429639],
    [51.5384273, -0.0433932],
    [51.538328, -0.0437704],
    [51.5381196, -0.0445825],
    [51.5380745, -0.0447707],
    [51.5379772, -0.0448897],
    [51.5379202, -0.0448524],
    [51.5378983, -0.0449538],
    [51.5379202, -0.0448524],
    [51.5375794, -0.0446888],
    [51.5373745, -0.0446287],
    [51.5369801, -0.0444717],
    [51.5369589, -0.0444465],
    [51.5367257, -0.0441546],
    [51.536639, -0.0438121],
    [51.5366813, -0.0437434],
    [51.5367523, -0.0436062],
    [51.5368982, -0.0433244],
    [51.5367523, -0.0436062],
    [51.5366813, -0.0437434],
    [51.536639, -0.0438121],
    [51.5365878, -0.0438699],
    [51.5355471, -0.0470961],
    [51.5355499, -0.0471822],
    [51.5351577, -0.0475269],
    [51.5351001, -0.0475864],
    [51.5350415, -0.0476452],
    [51.53404, -0.0486473],
    [51.5339582, -0.048723],
    [51.5335468, -0.0491594],
    [51.5334973, -0.0492059],
    [51.5332716, -0.0494126],
    [51.5332187, -0.049461],
    [51.5329606, -0.0497202],
    [51.5320414, -0.0506447],
    [51.5320206, -0.0507698],
    [51.5319527, -0.0507462],
    [51.5313095, -0.0513619],
    [51.5317582, -0.0526987],
    [51.5319029, -0.0531491],
    [51.5319293, -0.0533988],
    [51.5321743, -0.0535429],
    [51.5324842, -0.0537482],
    [51.5329624, -0.0540293],
    [51.532911, -0.0544075],
    [51.5328187, -0.0551254],
    [51.5326983, -0.0558967],
    [51.5325951, -0.0569499],
    [51.532619, -0.0570321],
    [51.5326196, -0.0571523],
    [51.5326105, -0.057332],
    [51.5325569, -0.0574796],
    [51.5325019, -0.0578362],
    [51.5324137, -0.0583662],
    [51.5323998, -0.0584567],
    [51.5321916, -0.0596825],
    [51.5321708, -0.059805],
    [51.532114, -0.0601562],
    [51.5320493, -0.0605436],
    [51.5319412, -0.0611889],
    [51.5320151, -0.0612261],
    [51.5324126, -0.0614597],
    [51.5322682, -0.0621738],
    [51.5322029, -0.0625678],
    [51.5320918, -0.0632388]
]
