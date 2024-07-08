import axios from "axios";

export const fastestLap = async () => {
    const promise = axios.get("/m1features/fastest_lap");
    return promise.then((res) => res.data);
}

export const averagePositionForRacer = async () => {
    const promise = axios.get("/m1features/avg_pos_for_racer");
    return promise.then((res) => res.data);
}

export const mostRacedAgainst = async () => {
    const promise = axios.get("/m1features/most_raced_against");
    return promise.then((res) => res.data);
}

export const bestCircuitsForConstructor = async () => {
    const promise = axios.get("/m1features/best_circuits_for_constructor");
    return promise.then((res) => res.data);
}