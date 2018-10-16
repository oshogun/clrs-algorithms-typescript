"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SortingTools {
    insertionSort(A) {
        for (let j = 1; j < A.length; j++) {
            const key = A[j];
            // Insert A[j] into the sorted sequence A[1 .. j - 1]
            let i = j - 1;
            while (i >= 0 && A[i] > key) {
                A[i + 1] = A[i];
                i--;
            }
            A[i + 1] = key;
        }
        return A;
    }
}
exports.SortingTools = SortingTools;
const tools = new SortingTools();
const array = [4, 3, 1, 2, 6, 5];
console.log(array.toString());
console.log(tools.insertionSort(array).toString());
