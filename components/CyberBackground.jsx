"use client";

import Particles from "react-tsparticles";

export default function CyberBackground() {

return (

<Particles
options={{
background: { color: "#000000" },
particles: {
number: { value: 80 },
size: { value: 2 },
color: { value: "#00ffff" },
links: {
enable: true,
distance: 150,
color: "#00ffff",
opacity: 0.3
},
move: { enable: true, speed: 1 }
}
}}
/>

);

}