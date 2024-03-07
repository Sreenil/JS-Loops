let a = 10;
let b = 5;

try {
    result = exceptions();
    console.log('try',result);
} catch (e) {
    result = 8;
    console.log('catch',result);
} finally {
    console.log('successfull');
}

function exceptions() {
    getErrors();
    return a / b;
}