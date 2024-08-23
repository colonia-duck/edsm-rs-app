import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface SystemInfo {
    name: string,
    coords: Coords,
    information: Information,
    primaryStar: PrimaryStar,
}


interface Coords {
    x: number,
    y: number,
    z: number,
}


interface Information {
    allegiance: string,
    economy: string,
    faction: string,
    factionState: string,
    government: string,
    population: number,
    secondEconomy: string,
    security: string,
}


interface PrimaryStar {
    isScoopable: boolean,
    name: string,
}

export const loader: LoaderFunction = async () => {

    const systemName = 'Sol';
    const showInformation = '1';
    const showCoordinates = '1';
    const showPrimaryStar = '1';

    const apiUrl = `https://www.edsm.net/api-v1/system?systemName=${systemName}&showInformation=${showInformation}&showCoordinates=${showCoordinates}&showPrimaryStar=${showPrimaryStar}`;

    const response = await fetch(apiUrl);


    if(!response.ok) {
        throw new Response("Failed te fetch data", { status: response.status })
    }

    const data: SystemInfo = await response.json();
    return json(data);
};

export default function Index() {
    const data = useLoaderData<SystemInfo>();

    return (
        <div>
            <h1>System Info:</h1>
            <pre>
                {JSON.stringify(data)}
            </pre>
        </div>
    )
}