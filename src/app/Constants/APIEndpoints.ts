export const APIKey = "lTUD85OAsG8nEdubvHa8PEebsFqtgmrMfe255Xia"

const APIEndpoints = {
    root: "https://restcountries.com/v3.1/all",
    search: {
        byName: (name: string) => "https://restcountries.com/v3.1/name/" + name
    },
    cities: {
        searchByName: (name: string) => "https://api.api-ninjas.com/v1/city?name=" + name,
        weather: (name: string) => "https://api.api-ninjas.com/v1/weather?city=" + name,
        ipAddress: (ip: string) => "https://api.api-ninjas.com/v1/iplookup?address=" + ip,
    }

}
export default APIEndpoints;