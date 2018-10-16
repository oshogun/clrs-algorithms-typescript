export class SortingTools {

    insertionSort(A:Array<number>):Array<number> {
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

const tools = new SortingTools();
const array = [4,3,1,2,6,5];
console.log(array.toString());
console.log(tools.insertionSort(array).toString());