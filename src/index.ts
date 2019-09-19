const root = document.getElementById("app")!

export type Mark = "H" | "C" | "S" | "D";

export interface Card {
    number: number;
    mark: Mark;
}

const NUMBERS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export const MARKS: Mark[] = ["H", "C", "S", "D"];

export const createTrump = (): Card[] => {
    const cards: Card[] = [];
    for (const mark of MARKS) {
        for (const number of NUMBERS) {
            cards.push({
                mark,
                number
            });
        }
    }
    return cards;
};

const trump = createTrump();

const markToOffset = {
    S: 0,
    C: 13,
    D: 26,
    H: 39
};
const cardToUrl = ({ mark, number }: Card) =>
    `https://chicodeza.com/wordpress/wp-content/uploads/torannpu-illust${markToOffset[
    mark
    ] + number}.png`;

for (const card of trump) {
    const img = document.createElement("img");
    img.setAttribute("src", cardToUrl(card));
    root.appendChild(img);
}