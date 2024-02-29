import { merge } from "../src/index.ts";

test('[4, 7, 3], [0, 1, 2], [5, 4, 3] should produce [0, 1, 2, 3, 3, 4, 4, 5, 7]', () => {
    let collection_1 = [4, 7, 3];
    let collection_2 = [0, 1, 2];
    let collection_3 = [5, 4, 3];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toStrictEqual([0, 1, 2, 3, 3, 4, 4, 5, 7]);
})