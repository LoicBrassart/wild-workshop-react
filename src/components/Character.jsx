import React from "react";

export default function Character({name}) {
    const cleanName = name
        .toLowerCase()
        .replace(" ", "")
        .replace("'", "");

    return (
    <article className="character">
        <img className="background" src="/img/backgrounds/outdoor-1.jpg" alt=""/>
        <img className="figure" src={`/img/adventurers/${cleanName}/1-f.png`} alt={`name`}/>
        <footer>
            <h3>{name}</h3>
        </footer>
    </article>);
}