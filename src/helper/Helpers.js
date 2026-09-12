export default class {
    static isBetweenMinMaxRange(num, minNum, maxNum) {
        if(typeof num !== 'number')
            throw new TypeError(msgStr('num', 'number'));

        else if(typeof minNum !=='number')
            throw new TypeError(`The "minNum" argument must be a number type. Argument received "${ typeof minNum }".`);

        else if(typeof maxNum !== 'number')
            throw new TypeError(`The "maxNum" argument must be a number type. Argument received "${ typeof maxNum }".`);
        
        return num <= maxNum && num >= minNum;
    }
}
