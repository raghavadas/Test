var questionsTrained=false;

var willIPass = new Promise(function(resolve,reject){
    if ( questionsTrained){
        var status={result:"PASS",grade:"Good"};
        resolve(status);
    }
    else{
        var reason={question:"out of syllabus",result:"Fail"};
        reject(reason);
    }
});

var verifywithStudent = function () {
    willIPass
        .then(function (fulfilled) {
            // Pass
            console.log(fulfilled);         
        })
        .catch(function (error) {
         // chances to fail
            console.log(error.message);
        });
};

verifywithStudent();