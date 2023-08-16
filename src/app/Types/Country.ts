export interface Country {
    commonName: String,
    officialName: String,
    capital: Array<String>,
    timezones: String,
    continents: Array<String>,
    flags: Flags,
    population: number,
    coatOfArms: CoatOfArms,
    startOfWeek: String,
    maps: Maps,
    currencies: any | null | undefined,
    borders: Array<String>,
    area: number,
    languages: string,
    unMember: boolean,
    drivingSide: string

}

interface Maps {
    googleMaps: String,
    openStreetMaps: String
}

interface CoatOfArms {
    png: String,
    svg: String,
}

interface Flags {
    png: String,
    svg: String,
    alt: String
}
