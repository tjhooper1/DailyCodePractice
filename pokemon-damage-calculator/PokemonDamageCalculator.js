//damage = 50 * (attack/defense) * effectiveness

function calculateDamage(yourType, opponentType, attack, defense) {
    console.log(yourType, opponentType, attack, defense);
    let multiplyer = 1;
    if (attacks[yourType].strength.includes(opponentType)) {
        multiplyer = 2;
    } else if (attacks[yourType].weakness.includes(opponentType)) {
        multiplyer = 0.5;
    }
    return Math.ceil(50 * (attack / defense) * multiplyer);
}

const attacks = {
    fire: {
        weakness: ["water", "fire"],
        strength: ["grass"]
    },
    water: {
        weakness: ["grass", "electric", "water"],
        strength: ["fire"]
    },
    grass: {
        weakness: ["fire", "grass"],
        strength: ["water"]
    },
    electric: {
        weakness: ["electric"],
        strength: ["water"]
    }
};

console.log(calculateDamage("water", "water", 120, 130)); // === 24
console.log(calculateDamage("fire", "grass", 80, 120)); // === 67
console.log(calculateDamage("water", "fire", 100, 120)); // === 84
