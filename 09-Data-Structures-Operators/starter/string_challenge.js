const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightSep = flights.split('+');
// console.log(flightSep);

for (const flight of flightSep) {
    // console.log(flight);
    sepSections = flight.split(';');
    const flightStatus = sepSections[0].replaceAll('_', ' ').trim();
    const org = sepSections[1].slice(0, 3).toUpperCase();
    const dest = sepSections[2].slice(0, 3).toUpperCase();
    const time = sepSections[3].replace(':', 'h');
    // console.log(time);

    console.log(
        `${
            flightStatus.startsWith('Delayed') ? '🔴 ' : ''
        }${flightStatus} from ${org} to ${dest} (${time})`.padStart('50', ' ')
    );
}
