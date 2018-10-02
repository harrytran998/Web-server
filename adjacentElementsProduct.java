int adjacentElementsProduct(int[] inputArray) {
    int max = inputArray[0] * inputArray[1];
    for(int i = 1; i<=inputArray.length-2; i++){
        if(max < inputArray[i] * inputArray[i+1]){
            max =  inputArray[i] * inputArray[i+1];
        }
    }
    return max;
}
