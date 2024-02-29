function merge(collection_1: number[], collection_2: number[], collection_3: number[]) {
    const mergeSort = (array: number[]) => {
        let length = array.length;
        if (length <= 1) {
            return array;
        }
        let middle = Math.floor(length / 2);
        let leftArray = array.slice(0, middle);
        let rightArray = array.slice(middle);

        return mergeTwoArrays(mergeSort(leftArray), mergeSort(rightArray));
    }

    const mergeTwoArrays = (leftArray: number[], rightArray: number[]): number[] => {
        const mergedArray: number[] = [];
        let i = 0;
        let j = 0;

        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] <= rightArray[j]) {
                mergedArray.push(leftArray[i]);
                i++;
            } else {
                mergedArray.push(rightArray[j]);
                j++;
            }
        }

        return mergedArray.concat(leftArray.slice(i), rightArray.slice(j));
    };

    let sortedCollection1 = mergeSort(collection_1);
    let sortedCollection2 = mergeSort(collection_2);
    let sortedCollection3 = mergeSort(collection_3);

    const result = mergeTwoArrays(mergeTwoArrays(sortedCollection1, sortedCollection2), sortedCollection3);

    return result;
}

export { merge }