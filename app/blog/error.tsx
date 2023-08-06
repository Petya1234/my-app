'use client';
export default function errorWrapper({error} : {error: Error}) {
    return <h1>Ooops {error.message}</h1>

}